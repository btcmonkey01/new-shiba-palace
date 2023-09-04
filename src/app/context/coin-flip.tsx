"use client"
import { useMetaMask } from 'metamask-react';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { COIN_FLIP_ADDRESS, betAmountList, getBetAmountList } from '../constants/contract';
import { CoinFlipSelection, initializeCoinFlipResultEvent, startFlip } from '../lib/web3/contract';
import { GamePlayed } from '../types/types';
import { useGameHistory } from './game-history';
import { parseCoinFlipEvent, parseCoinFlipResponse } from '../parser/web3-events';
import { toast } from 'react-hot-toast';
import { playAudio } from '../lib/utils';
import { SHIBARIUM_NETWORK_ID, SHIBARIUM_NETWORK_PARAMS, isShibariumNetwork } from '../utils/web';
import web3 from '../lib/web3/web3';

interface CoinFlipProps {
  coinSelection: CoinFlipSelection,
  betAmount: string,
  loadingFlip: boolean,
  flip: () => void,
  eventConnected: boolean;
  result?: GamePlayed,
  setCoinSelection: Dispatch<SetStateAction<CoinFlipSelection>>,
  setBetAmount: Dispatch<SetStateAction<string>>,
  resetResult: () => void;
}

const initialValues: CoinFlipProps= {
  coinSelection: CoinFlipSelection.HEADS,
  betAmount: getBetAmountList()[0].amount,
  loadingFlip: false,
  eventConnected: false,
  flip: () => {},
  setCoinSelection: () => {},
  setBetAmount: () => {},
  resetResult: () => {},
}

const CoinFlipContext = createContext<CoinFlipProps>(initialValues);

export function CoinFlipProvider({ children }: { children: ReactNode }) {

  const [ coinSelection, setCoinSelection ] = useState<CoinFlipSelection>(CoinFlipSelection.HEADS);
  const [ betAmount, setBetAmount ] = useState<string>(getBetAmountList()[0].amount);
  const [ loadingFlip, setLoadingFlip ] = useState<boolean>(false);
  const [ eventConnected, setEventConnected] = useState<boolean>(false);
  const [ result, setResult ] = useState<GamePlayed | undefined>(undefined);
  const { status, account, ethereum, chainId, switchChain, addChain } = useMetaMask();
  const { addNewGamePlayed } = useGameHistory();

  const canFlip = (): boolean => {
    if(!account) {
      toast.error("You need to connect your wallet");
      return false;
    }
    if(!isShibariumNetwork(chainId)) {
      toast.error("Connect to Shibarium Network");
      switchChain(SHIBARIUM_NETWORK_ID())
      .catch((error: any) => {
        if(error.code === 4902) {
          addChain(SHIBARIUM_NETWORK_PARAMS())
        }
      })
      return false;
    }
    if(!ethereum) {
      toast.error("You don't have enough funds");
      return false;
    }
    return true;
  }

  const flip = () => {
    playAudio('./select.mp3');
    if(!canFlip()) return
    setLoadingFlip(true);
    startFlip({
      from: account as string,
      ether: betAmount,
      choice: coinSelection,
    }).then((receipt) => {

      const log = receipt?.logs?.find( ( log: any ) => log?.address === COIN_FLIP_ADDRESS.toLowerCase())

      const params = web3.eth.abi.decodeLog([
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "didWin",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "betAmount",
          "type": "uint256"
        }
      ], log?.data, log?.topics);

      const result = parseCoinFlipResponse({
        ...params,
        transactionHash: receipt?.transactionHash,
      })

      setResult(result);
      addNewGamePlayed(result);
    }).catch((reason) => {
      console.log({reason})
      toast.error("Something went wrong :(");
    }).finally(() => {
      setLoadingFlip(false);
    })
  }

  useEffect(() => {
    if(status === "connected" && account && isShibariumNetwork(chainId)) {
      const event = initializeCoinFlipResultEvent({
        account: account,
        onConnected: (event) =>{ 
          setEventConnected(true)
        },
        onTrigger: (event) => { 
          console.log({event})
          const game: GamePlayed = parseCoinFlipEvent(event);
          setResult(game);
          addNewGamePlayed(game);
        },
        onError: (event) => {
          toast.error("Something went wrong :(");
          console.log({event})
        },
      })
      return () => {
        setEventConnected(false);
        event.off("connected", () => {});
        event.off("error", () => {});
        event.off("data", () => {});
      }
    }
  }, [account, chainId])

  const resetResult = () => {
    setResult(undefined);
  }

  return (
    <CoinFlipContext.Provider value={{
      betAmount,
      coinSelection,
      loadingFlip,
      setBetAmount,
      setCoinSelection,
      flip,
      result,
      eventConnected,
      resetResult
    }}>
      {children}
    </CoinFlipContext.Provider>
  );
}

export function useCoinFlip() {
  return useContext(CoinFlipContext);
}
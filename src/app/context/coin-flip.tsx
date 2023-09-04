"use client"
import { useMetaMask } from 'metamask-react';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { betAmountList, getBetAmountList } from '../constants/contract';
import { CoinFlipSelection, initializeCoinFlipResultEvent, startFlip } from '../lib/web3/contract';
import { GamePlayed } from '../types/types';
import { useGameHistory } from './game-history';
import { parseCoinFlipEvent } from '../parser/web3-events';
import { toast } from 'react-hot-toast';
import { playAudio } from '../lib/utils';
import { SHIBARIUM_NETWORK_ID, SHIBARIUM_NETWORK_PARAMS, isShibariumNetwork } from '../utils/web';

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
    }).then((value) => {
      console.log({value});
    }).catch((reason) => {
      if(reason?.data?.code === -32000) {
        toast.error("Insufficient funds");
      } else {
        toast.error("Something went wrong :(");
      }
    }).finally(() => {
      setLoadingFlip(false);
    })
  }

  useEffect(() => {
    if(status === "connected" && account && isShibariumNetwork(chainId)) {
      const event = initializeCoinFlipResultEvent({
        account: account,
        onConnected: (event) => setEventConnected(true),
        onTrigger: (event) => { 
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
        event.off("connected", () => {});
        event.off("error", () => {});
        event.off("data", () => {});
      }
    }
  }, [account])

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
"use client"
import { useMetaMask } from 'metamask-react';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast/headless';
import { betAmountList } from '../constants/contract';
import { CoinFlipSelection, initializeCoinFlipResultEvent, startFlip } from '../lib/web3/contract';
import { GamePlayed } from '../types/types';
import { useGameHistory } from './game-history';
import { parseCoinFlipEvent } from '../parser/web3-events';

interface CoinFlipProps {
  coinSelection: CoinFlipSelection,
  setCoinSelection: Dispatch<SetStateAction<CoinFlipSelection>>,
  betAmount: string,
  setBetAmount: Dispatch<SetStateAction<string>>,
  loadingFlip: boolean,
  flip: () => void,
  eventConnected: boolean;
  result?: GamePlayed,
}

const CoinFlipContext = createContext<CoinFlipProps | undefined>(undefined);

export function CoinFlipProvider({ children }: { children: ReactNode }) {

  const [ coinSelection, setCoinSelection ] = useState<CoinFlipSelection>(CoinFlipSelection.HEADS);
  const [ betAmount, setBetAmount ] = useState<string>(betAmountList[0]);
  const [ loadingFlip, setLoadingFlip ] = useState<boolean>(false);
  const [ eventConnected, setEventConnected] = useState<boolean>(false);
  const [ result, setResult ] = useState<GamePlayed | undefined>(undefined);
  const { account, ethereum } = useMetaMask();
  const { addNewGamePlayed } = useGameHistory();


  const canFlip = (): boolean => {
    if(!account) {
      toast.error("You need to connect your wallet");
      return false;
    }
    if(!ethereum) {
      toast.error("You don't have enough funds");
      return false;
    }
    return true;
  }

  const flip = () => {
    if(!canFlip()) return
    setLoadingFlip(true);
    startFlip({
      from: account as string,
      ether: betAmount,
      choice: coinSelection,
    }).then((value) => {
      console.log({value});
    }).catch((reason) => {
      toast.error("Something went wrong :(");
      // TODO: add warning toast: "Something went wrong"
      console.log({reason});
    }).finally(() => {
      setLoadingFlip(false);
    })
  }

  useEffect(() => {
    if(account) {
      const event = initializeCoinFlipResultEvent({
        account: account,
        onConnected: (event) => setEventConnected(true),
        onTrigger: (event) => { 
          const result: GamePlayed = parseCoinFlipEvent(event);
          setResult(result);
          console.log({event})
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

  return (
    <CoinFlipContext.Provider value={{
      betAmount,
      coinSelection,
      loadingFlip,
      setBetAmount,
      setCoinSelection,
      flip,
      result,
      eventConnected
    }}>
      {children}
    </CoinFlipContext.Provider>
  );
}

export function useCoinFlip() {
  return useContext(CoinFlipContext);
}
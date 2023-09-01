"use client"
import { useMetaMask } from 'metamask-react';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { getAllCoinFlipEvents } from '../lib/web3/contract';
import { parseCoinFlipEvent } from '../parser/web3-events';
import { GamePlayed } from '../types/types';
import { isShibariumNetwork } from '../utils/web';

interface GameHistoryValue {
  gameHistory: Array<GamePlayed>,
  addNewGamePlayed: (game: GamePlayed) => void
}

const initialValues: GameHistoryValue = {
  gameHistory: [],
  addNewGamePlayed: () => {},
}

const GameHistoryContext = createContext<GameHistoryValue>(initialValues);

export function GameHistoryProvider({ children }: { children: ReactNode }) {

  const [gameHistory, setGameHistory] = useState<Array<GamePlayed>>([]);
  const { status, account, chainId } = useMetaMask();

  const addNewGamePlayed = (game: GamePlayed) => {
    setGameHistory([
      ...gameHistory,
      game,
    ])
  }

  useEffect(() => {
    if(status === "connected" && account && isShibariumNetwork(chainId)) {
      getAllCoinFlipEvents({account})
      .then(events => {
        const CoinFlipHistory: Array<GamePlayed> = events.map( event => parseCoinFlipEvent(event))
        setGameHistory([...CoinFlipHistory])
      });
    }
  }, [account])

  return (
    <GameHistoryContext.Provider value={{ gameHistory, addNewGamePlayed }}>
      {children}
    </GameHistoryContext.Provider>
  );
}

export function useGameHistory() {
  return useContext(GameHistoryContext);
}
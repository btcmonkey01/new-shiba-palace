"use client"
import { GameHistoryProvider } from '@/app/context/game-history'
import { MetaMaskProvider } from 'metamask-react'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'


export const NextAuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <MetaMaskProvider>
        <GameHistoryProvider>
          {children}
        </GameHistoryProvider>
      </MetaMaskProvider>
    </SessionProvider>
  )
}

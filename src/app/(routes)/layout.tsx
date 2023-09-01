"use client"
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Poppins } from 'next/font/google'
import Sidebar from '../components/LeftSide/Sidebar'
import { NextAuthProvider } from '../components/Providers/Providers'
import RightSide from '../components/RightSide/RightSide'
import { GameHistoryProvider } from '../context/game-history'
import { authOptions } from '../lib/auth'
import './globals.css'
import { MetaMaskProvider } from 'metamask-react'
import { Toaster } from 'react-hot-toast'

const popins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='scroll-smooth bg-shibaBackground'>
      <body className={`${popins.className}`}>
        <NextAuthProvider>
          <MetaMaskProvider>
            <GameHistoryProvider>
              <div className='flex justify-center'>
                <Sidebar />
                <div className='w-full lg:w-[60vw] py-4'>
                  {children}
                </div>
                <RightSide />
                {/*             {
                  session ? <p> <Logout></Logout> </p> : <NavLogin></NavLogin>
                } */}
              </div>
            </GameHistoryProvider>
          </MetaMaskProvider>
        </NextAuthProvider>
      </body>
      <Toaster />
    </html>
  )
}

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Sidebar from '../components/LeftSide/Sidebar'
import { NextAuthProvider } from '../components/Providers/Providers'
import RightSide from '../components/RightSide/RightSide'
import './globals.css'
import { MetaMaskProvider } from 'metamask-react'
import { Toaster } from 'react-hot-toast'

const popins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Shiba Palace',
  description: 'First Shibarium Casino',
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
          <div className='flex justify-center'>
            <Sidebar />
            <div id='mainContent' className='w-full lg:w-[60vw] py-4 h-[calc(100vh-32px)] overflow-y-scroll'>
              {children}
            </div>
            <RightSide />
          </div>
        </NextAuthProvider>
        <Toaster />
      </body>
    </html>
  )
}

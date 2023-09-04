import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Sidebar from '../components/LeftSide/Sidebar'
import { NextAuthProvider } from '../components/Providers/Providers'
import RightSide from '../components/RightSide/RightSide'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const popins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Shiba Palace',
  description: 'Shiba Palace is the number one crypto casino on the SHIBARIUM network.',
  openGraph: {
    images: [
      "/images/home-logo.png"
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
/* h-[calc(100vh-32px)]  */
  return (
    <html lang="en" className='scroll-smooth bg-shibaBackground'>
      <body className={`${popins.className}`}>
        <NextAuthProvider>
          <div className='flex justify-center'>
            <Sidebar />
            <div id='mainContent' className='w-full lg:w-[60vw] py-4 h-screen overflow-y-scroll'>
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

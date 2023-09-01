"use client"
import React from 'react'
import Link from 'next/link'
import RecentWins from '../RecentWins/RecentWins'
import { toast } from 'react-hot-toast'

const MainContent = () => {

  const comingSoong = () => {
    toast('Coming Soon', {
      icon: '🧑‍🏭',
    });
  }

  return (
    <div className='w-[90%] flex flex-col items-center justify-center gap-8'>
      <div className='flex flex-col gap-'>
        <div className='font-bold text-lg text-white'>CHOOSE YOUR GAME</div>
        <div className='w-full games-container grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <Link href='/coin-flip'>
            <img src="./shibaflip.webp" alt="shibaflip"/>
          </Link>
          <img onClick={comingSoong} src="./shibaslots.webp" alt="shibaslots"/>
          <img onClick={comingSoong} src="./shibacrash.webp" alt="shibacrash"/>
          <img onClick={comingSoong} src="./shibaroulette.webp" alt="shibaslots"/>
        </div>
      </div>
      <RecentWins />
    </div>
  )
}

export default MainContent
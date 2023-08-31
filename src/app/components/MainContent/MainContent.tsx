import React from 'react'
import RecentWins from './RecentWins/RecentWins'

const MainContent = () => {
  return (
    <div className='w-[90%] flex flex-col items-center justify-center gap-8'>
      <div className='flex flex-col gap-2'>
        <div className='font-bold text-lg text-white'>CHOOSE YOUR GAME</div>
        <div className='w-full games-container grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <img src="./shibaflip.webp" alt="shibaflip"/>
          <img src="./shibaslots.webp" alt="shibaslots"/>
          <img src="./shibacrash.webp" alt="shibacrash"/>
          <img src="./shibaslots.webp" alt="shibaslots"/>
        </div>
      </div>
      <RecentWins />
    </div>
  )
}

export default MainContent
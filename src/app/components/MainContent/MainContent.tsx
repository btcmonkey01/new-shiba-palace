import React from 'react'
import RecentWins from './RecentWins/RecentWins'

const MainContent = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='games-container flex gap-4'>
        <div><img src="./roulette.webp" alt="Roulette" /></div>
        <div><img src="./SP1.webp" alt="SP1" /></div>
        <div><img src="./rocket.webp" alt="Rocket" /></div>
        <div><img src="./roulette.webp" alt="Roulette" /></div>
      </div>
      <RecentWins></RecentWins>
    </div>
  )
}

export default MainContent
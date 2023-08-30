import React from 'react'
import { FaDiscord, FaTwitch, FaYoutube } from 'react-icons/fa'
import Chat from './Chat/Chat'
const RightSide = () => {
  return (
    <div className='fixed left-[80vw] m-8'>
      <div className='flex gap-4'>
        <a href="#" target='_blank' aria-label='TheJuanmaSeries Twitch Channel'>
          <FaTwitch className='text-3xl text-gray-400 hover:text-[#6441A5] transition-transform hover:scale-110' />
        </a>
        <a href="#" target='_blank' aria-label='TheJuanmaSeries Youtube Channel'>
          <FaYoutube className='text-3xl text-gray-400 hover:text-[#c4302b] transition-transform hover:scale-110' />
        </a>
        <a href="#" target='_blank' aria-label='TheJuanmaSeries Youtube Channel'>
          <FaDiscord className='text-3xl text-gray-400 hover:text-[#5865F2] transition-transform hover:scale-110' />
        </a>
      </div>
      <div>
        <Chat></Chat>
      </div>
    </div>
  )
}

export default RightSide
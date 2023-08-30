import React from 'react'
import { FaDiscord, FaTwitter, FaTelegram } from 'react-icons/fa'
import Chat from './Chat/Chat'
const RightSide = () => {
  return (
    <div className='fixed w-[calc(20vw-64px)] flex flex-col h-[calc(100vh-64px)] left-[80vw] m-8 gap-4'>
      <div className='flex gap-4'>
        <a href="#" target='_blank' aria-label='TheJuanmaSeries Twitch Channel'>
          <FaTwitter className='text-3xl text-white/90 hover:text-white transition-transform hover:scale-110 ease-in-out duration-300' />
        </a>
        <a href="#" target='_blank' aria-label='TheJuanmaSeries Youtube Channel'>
          <FaTelegram className='text-3xl text-white/90 hover:text-white transition-transform hover:scale-110 ease-in-out duration-300' />
        </a>
        <a href="#" target='_blank' aria-label='TheJuanmaSeries Youtube Channel'>
          <FaDiscord className='text-3xl text-white/90 hover:text-white transition-transform hover:scale-110 ease-in-out duration-300' />
        </a>
      </div>
      <Chat/>
    </div>
  )
}

export default RightSide
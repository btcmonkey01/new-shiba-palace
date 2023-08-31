import React, { useState } from 'react'
import { FaDiscord, FaTwitter, FaTelegram } from 'react-icons/fa'
import Chat from './Chat/Chat'
const RightSide = () => {

  /* const [showChat, setShowChat] = useState(false) */
  /* ${showChat ? 'right-0' : 'right-[-340px] '} */
  return (
    <>
      <aside className={`hidden lg:flex flex-col fixed border-l-2 border-white/30 h-screen w-[340px] right-0 lg:w-[15vw] lg:left-[85vw] py-4 px-4`}>
        <div className='flex gap-4 h-[10%] '>
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
        <Chat />
      </aside>
    </>
  )
}

export default RightSide
import React from 'react'
import { FaTwitter, FaTelegram } from 'react-icons/fa'
import Chat from './Chat/Chat'
const RightSide = () => {

  return (
    <>
      <aside className={`hidden lg:flex flex-col fixed border-l-2 border-white/30 h-screen w-[340px] right-0 lg:w-[15vw] lg:left-[85vw] py-4 px-4`}>
        <div className='flex gap-4 h-[10%] '>
          <a href="https://twitter.com/ShibariumPalace" target='_blank' >
            <FaTwitter className='text-3xl text-white/90 hover:text-white transition-transform hover:scale-110 ease-in-out duration-300' />
          </a>
          <a href="https://t.me/shibariumpalace" target='_blank' >
            <FaTelegram className='text-3xl text-white/90 hover:text-white transition-transform hover:scale-110 ease-in-out duration-300' />
          </a>
        </div>
        <Chat />
      </aside>
    </>
  )
}

export default RightSide
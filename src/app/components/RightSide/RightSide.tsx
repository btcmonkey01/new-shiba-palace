import React from 'react'
import { FaTwitter, FaTelegram } from 'react-icons/fa'
import Chat from './Chat/Chat'
import Music from './Chat/Music'
const RightSide = () => {

  return (
    <>
      <aside className={`hidden lg:flex flex-col fixed border-l-2 border-white/30 h-screen w-[340px] right-0 lg:w-[15vw] lg:left-[85vw] py-4 px-4`}>
        <div className='flex justify-between h-[10%] '>
          <div className='flex gap-4'>
            <a href="https://twitter.com/ShibariumPalace" className='h-fit' target='_blank' >
              <FaTwitter className='text-3xl text-white/90 hover:text-white transition-transform hover:scale-110 ease-in-out duration-300' />
            </a>
            <a href="https://t.me/shibariumpalace" className='h-fit' target='_blank' >
              <FaTelegram className='text-3xl text-white/90 hover:text-white transition-transform hover:scale-110 ease-in-out duration-300' />
            </a>
          </div>
          <Music/>
        </div>
        <Chat />
      </aside>
    </>
  )
}

export default RightSide
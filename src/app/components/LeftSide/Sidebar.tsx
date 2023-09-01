"use client"
import React, { useState } from 'react'
import { HiHome, HiOutlineDocumentText } from 'react-icons/hi'
import SideBarItem, { Item } from './SideBarItem'
import { BiArrowToRight, BiArrowToLeft } from 'react-icons/bi'
import { PiGameControllerLight } from 'react-icons/pi'
import Link from 'next/link'
import { Wallet } from '../Wallet'
import { toast } from 'react-hot-toast'
const sideBarItemStyles = 'group-hover:text-white ease-in-out duration-300'

const Sidebar = () => {

  const [showBar, setShowBar] = useState(false)
  
  return (
    <aside className={`${!showBar ? 'left-[-300px]' : 'left-0'} transition-all duration-100 bg-primary lg:bg-transparent z-10 flex flex-col justify-between fixed border-r-2 border-white/30 h-screen w-[300px] lg:w-[15vw] lg:left-0 p-4`}>
      <button
        type='button'
        onClick={() => setShowBar(!showBar)}
        className='flex lg:hidden absolute justify-center items-center right-[-40px] 
        w-10 h-10 
        bg-secondary/80 hover:bg-secondary ease-in-out duration-300 rounded-sm'>
        {!showBar ? <BiArrowToRight className='text-2xl text-white' /> : <BiArrowToLeft className='text-2xl text-white' />}
      </button>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-start justify-center gap-1'>
          <div className='animatedLogoBackground w-full crounded flex'>
            <Link href='/'>
              <img src="./logo1.webp" className='w-[120px]' alt="Shiba Palace" />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <Link href={'/'} className='cursor-pointer group flex items-center text-white px-4 py-2 crounded hover:bg-[#AEC8CA]/30 ease-in-out duration-300'>
            <span className={`flex items-center gap-2 text-sm font-bold`}>
              <HiHome className={`text-xl ${sideBarItemStyles}`} />
              Home
            </span>
          </Link>
          <SideBarItem link='https://shiba-palace.gitbook.io/shiba-palace-whitepaper/'
            icon={<HiOutlineDocumentText className={`text-xl ${sideBarItemStyles}`} />}
            type='general'
            title='Paper'>
          </SideBarItem>
          <SideBarItem
            icon={<PiGameControllerLight className={`text-xl ${sideBarItemStyles}`} />}
            type='list'
            title='Games'>
            <Item link='/coin-flip' title='Shibaflip' icon={<img src="./flipIcon.webp" alt="Spanish Flag" className='w-8' />} />
            <Item title='Shibaslots' icon={<img src="./slotsIcon.webp" alt="Korean Flag" className='w-8' />} />
            <Item title='Shibacrash' icon={<img src="./crashIcon.webp" alt="Chinese Flag" className='w-8' />} />
            <Item title='Shibaroulette' icon={<img src="./rouletteIcon.webp" alt="Chinese Flag" className='w-8 ' />} />
          </SideBarItem>
          <SideBarItem
            icon={<img src="./english.webp" alt="Spanish Flag" className='w-5 h-fit' />}
            type='list'
            title='English'>
            <Item title={'Español'} icon={<img src="./spanish.webp" alt="Spanish Flag" className='w-5' />} ></Item>
            <Item title={'한국어'} icon={<img src="./korea.webp" alt="Korean Flag" className='w-5' />} ></Item>
            <Item title={'中文'} icon={<img src="./china.webp" alt="Chinese Flag" className='w-5 border border-white' />} ></Item>
          </SideBarItem>
        </div>
      </div>
      <div>
        <Wallet />
      </div>
    </aside>
  )
}

export default Sidebar
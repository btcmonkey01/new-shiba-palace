"use client"
import React, { ReactNode, useState } from 'react'
import { HiHome } from 'react-icons/hi'
import SideBarItem, { Item } from './SideBarItem'
import { BiArrowToRight, BiArrowToLeft } from 'react-icons/bi'
const sideBarItemStyles = 'group-hover:text-white ease-in-out duration-300'

const items = [
  {
    category: 'Noticias'
  },
  {
    category: 'Ultimos Videos'
  },
  {
    category: 'Contenido BDO',
    subcategories: [
      {
        categorie: 'Primeros Pasos(link directo)'
      },
      {
        categorie: 'Guías Principales(link directo)'
      },
      {
        categorie: 'Guías PVE(subcategoria)'
      },
    ]
  },
]

const Sidebar = () => {

  const [showBar, setShowBar] = useState(true)
  /*   */
  return (
    <aside className={`${!showBar ? 'left-[-300px]' : 'left-0'} transition-all duration-100 bg-primary lg:bg-transparent z-10 flex flex-col justify-between fixed border-r-2 border-white/30 h-screen w-[300px] lg:w-[15vw] left-0 p-4`}>
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
            <img src="./logo1.webp" className='w-[120px]' alt="Shiba Palace" />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <SideBarItem link='#'
            icon={<HiHome className={`text-xl ${sideBarItemStyles}`} />}
            type='general'
            title='Home'>
          </SideBarItem>
          <SideBarItem link='#'
            icon={<HiHome className={`text-xl ${sideBarItemStyles}`} />}
            type='general'
            title='Games'>
          </SideBarItem>

          {/*         <SideBarItem
          icon={<HiHome className={`text-xl ${sideBarItemStyles}`} />}
          type='list'
          title='Contenido'>
          <Item link='/categories/contenido' type='list' title={'Ultimas Noticias'} icon={<HiHome className={`text-base ${sideBarItemStyles}`} />} ></Item>
          <Item link='#Videos Principales' type='list' title={'Principales videos'} icon={<HiHome className={`text-base ${sideBarItemStyles}`} />} ></Item>
          <Item link='#Otros videos' type='list' title={'Otros videos'} icon={<HiHome className={`text-base ${sideBarItemStyles}`} />} ></Item>
        </SideBarItem> 
        */}
        </div>
      </div>

      <div>
        <img src="./Wallet.webp" alt="" className='w-[120px] buttons-animation' />
      </div>
    </aside>
  )
}

export default Sidebar
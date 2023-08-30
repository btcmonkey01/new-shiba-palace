import React, { ReactNode } from 'react'
import { HiHome } from 'react-icons/hi'
import SideBarItem, { Item } from './SideBarItem'

const sideBarItemStyles = 'group-hover:text-[#82AAAD] ease-in-out duration-300'

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
  return (
    <div className='fixed left-0 m-8 flex flex-col gap-4'>
      <div className='flex flex-col items-start justify-center gap-1'>
        <div className='animatedLogoBackground w-full crounded flex'>
          {/* <img src="" className='w-[80px]' alt="Shiba Palace" /> */}
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        {/*         {
          items.map(i => (
            <SideBarItem
              icon={<HiHome className={`text-xl ${sideBarItemStyles}`} />}
              type='list'
              title='Contenido'>
              {
                i.subcategories?.map(sub => (
                  <Item link='/categories/contenido' type='list' title={'Ultimas Noticias'} icon={<HiHome className={`text-base ${sideBarItemStyles}`} />} ></Item>
                ))
              }
            </SideBarItem>
          ))
        } */}
        <SideBarItem link='#'
          icon={<HiHome className={`text-xl ${sideBarItemStyles}`} />}
          type='general'
          title='Inicio'>
        </SideBarItem>

        <SideBarItem
          icon={<HiHome className={`text-xl ${sideBarItemStyles}`} />}
          type='list'
          title='Contenido'>
          <Item link='/categories/contenido' type='list' title={'Ultimas Noticias'} icon={<HiHome className={`text-base ${sideBarItemStyles}`} />} ></Item>
          <Item link='#Videos Principales' type='list' title={'Principales videos'} icon={<HiHome className={`text-base ${sideBarItemStyles}`} />} ></Item>
          <Item link='#Otros videos' type='list' title={'Otros videos'} icon={<HiHome className={`text-base ${sideBarItemStyles}`} />} ></Item>
        </SideBarItem>
      </div>

    </div>
  )
}

export default Sidebar
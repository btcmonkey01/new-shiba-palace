"use client"
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'

type itemType = 'list' | 'general'

interface ItemProps {
  title: string
  icon: JSX.Element
  type?: itemType
  link?: string
}
interface SideBarItemProps extends ItemProps {
  children: ReactNode
}

export const Item: React.FC<ItemProps> = ({ link, title, icon, type = 'general' }) => (
  <Link href={link ?? '#'} className='group flex items-center text-white px-4 py-2 crounded hover:bg-[#AEC8CA]/30 ease-in-out duration-300'>
    <span className={`flex gap-2 ${type === 'list' ? 'text-sm font-medium' : 'text-sm font-bold '} `}>{icon} {title} </span>
  </Link>
)

const SideBarItem: React.FC<SideBarItemProps> = ({ title, children, type, icon, link }) => {
  const [showOptions, setShowOptions] = useState(false)

  if (type === 'general') return <Item link={link} icon={icon} title={title} />

  return (
    <div className='flex flex-col' onClick={() => setShowOptions(!showOptions)}>
      <div className='group cursor-pointer flex items-center text-white px-4 py-2 crounded hover:bg-white/30 ease-in-out duration-300'>
        <span className='flex gap-2 font-bold'>{icon} {title} </span>
      </div>
      {
        <div className={`flex flex-col ml-5 box ${showOptions ? 'expanded' : ''} `}>
          <div>
            {children}
          </div>
        </div>
      }
    </div>
  )
}

export default SideBarItem
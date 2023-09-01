"use client"
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'
import { toast } from 'react-hot-toast'

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
  <>
    {
      link ?
        <Link href={link ?? '/'} target='_blank' className='cursor-pointer group flex items-center text-white px-4 py-2 crounded hover:bg-[#AEC8CA]/30 ease-in-out duration-300'>
          <span className={`flex items-center gap-2 text-sm font-bold`}>{icon} {title} </span>
        </Link>
        :
        <div 
        onClick={()=>{
          toast('Coming Soon', {
            icon: '🧑‍🏭',
          });
        }}
        className='cursor-pointer group flex items-center text-white px-4 py-2 crounded hover:bg-[#AEC8CA]/30 ease-in-out duration-300'>
          <span className={`flex items-center gap-2 text-sm font-bold`}>{icon} {title} </span>
        </div>
    }
  </>

)

const SideBarItem: React.FC<SideBarItemProps> = ({ title, children, type, icon, link }) => {
  const [showOptions, setShowOptions] = useState(false)

  if (type === 'general') return <Item link={link} icon={icon} title={title} />

  return (
    <div className='flex flex-col' >
      <div
        onClick={() => setShowOptions(!showOptions)}
        className='group cursor-pointer flex items-center text-white px-4 py-2 crounded hover:bg-white/30 ease-in-out duration-300'>
        <span className='flex gap-2 items-center text-sm font-bold'>{icon} {title} </span>
      </div>
      {
        <div className={`flex flex-col ml-5  ${showOptions ? 'expanded' : 'box'}`}>
          <div>
            {children}
          </div>
        </div>
      }
    </div>
  )
}

export default SideBarItem
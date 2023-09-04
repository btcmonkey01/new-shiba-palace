"use client"
import React, { useRef, useState } from 'react'
import { BiSolidVolumeMute } from 'react-icons/bi'
import { AiFillSound } from 'react-icons/ai'

const Music = () => {
  const [playMusic, setPlayMusic] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleReproductor = () => {
    if (playMusic) {
      audioRef.current?.pause();
    }
    else {
      audioRef.current?.play();
    }
    setPlayMusic(!playMusic)
  }
  return (
    <span onClick={toggleReproductor} className='h-fit cursor-pointer'>
      <audio ref={audioRef} src="./remix.mp3"></audio>
      {
        playMusic ?
          <AiFillSound className='text-3xl text-white/90 hover:text-white transition-transform hover:scale-110 ease-in-out duration-300' />
          :
          <BiSolidVolumeMute className='text-3xl text-white/90 hover:text-white transition-transform hover:scale-110 ease-in-out duration-300' />
      }
    </span>
  )
}

export default Music
import { playAudio } from '@/app/lib/utils';
import React, { useEffect } from 'react'

type CoinFlipLoseProps = {
  amount: string
}

export const CoinFlipLose = ({amount}: CoinFlipLoseProps) => {

  useEffect(() => {
    playAudio('./lose.wav');
  }, [])

  return (
    <div className='text-3xl font-semibold flex flex-col gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className="text-white">SORRY MY DEAR FRIEND</h2>
        <img src="./token.webp" className='w-[300px]' />
        <p className='text-white'>YOU LOST</p>
        <p className='text-primary w-full bg-white rounded-md p-1 text-4xl'>{amount} BON</p>
      </div>
      <hr />
      <div className='bg-secondary/75 hover:bg-secondary ease-in-out duration-300 px-4 py-2 rounded-md'>
        <button type='button'>RETURN</button>
      </div>
    </div>
  )
}
import React from 'react'
export const CoinFlipWin = () => {

  return (
    <div className='text-3xl font-semibold flex flex-col gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className="text-white">CONGRATULATIONS</h2>
        <img src="./token.webp" className='w-[300px]' />
        <p className='text-white'>YOU WON</p>
        <p className='text-secondary w-full bg-white rounded-md p-1 text-4xl'>0.1 BON</p>
      </div>
      <hr />
      <div className='bg-secondary/75 hover:bg-secondary ease-in-out duration-300 px-4 py-2 rounded-md'>
        <button type='button'>CLAIM REWARD</button>
      </div>
    </div>
  )
}
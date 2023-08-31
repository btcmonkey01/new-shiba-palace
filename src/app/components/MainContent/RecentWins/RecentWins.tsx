import { winners } from '@/app/constants/winners'
import React from 'react'

const RecentWins = () => {
  return (
    <div className='w-full hidden lg:flex flex-col gap-2'>
      <div className='font-bold text-lg text-white'>RECENT WINS</div>
      <div className='border-4 bg-secondary/70 border-black w-full rounded-lg'>
        <table className='w-full border-4 border-white'>
          <thead>
            <tr>
              <th>GAME</th>
              <th>WINNER</th>
              <th>TIME</th>
              <th>BET SIZE</th>
              <th>PROFIT</th>
              <th>PAYOUT</th>
              <th>CRYPTO</th>
            </tr>
          </thead>
          <tbody>
            {
              winners.map((w, i) => (
                <tr key={i}>
                  <td> {w.game} </td>
                  <td> {w.winner} </td>
                  <td> {w.date} </td>
                  <td> ${w.betSize} </td>
                  <td> {w.profit} </td>
                  <td> ${w.payout} </td>
                  <td> <img src={w.crypto} className='w-8' alt="Coin Image" /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentWins
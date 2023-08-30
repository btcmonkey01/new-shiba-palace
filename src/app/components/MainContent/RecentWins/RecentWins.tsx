import { winners } from '@/app/constants/winners'
import React from 'react'

const RecentWins = () => {
  return (
    <div>
      <div>Recent</div>
      <table>
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
                <td> <img src={w.crypto} alt="" /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default RecentWins
'use client'
import { useGameHistory } from '@/app/context/game-history'
import { GameType } from '@/app/types/types'
import { reduceAddressString } from '@/app/utils/web'
import { stat } from 'fs'
import { useMetaMask } from 'metamask-react'
import { useCallback, useMemo } from 'react'

type RecentWinsProps = {
  filterGame?: GameType
}

const RecentWins = ({filterGame}: RecentWinsProps) => {

  const {
    gameHistory
  } = useGameHistory();

  const { status } = useMetaMask();

  const filteredGameHistory = useMemo(() => {
    if(!filterGame) return gameHistory;
    return gameHistory?.filter(({game}) => game === filterGame);
  }, [gameHistory])

  const ListHistory = useCallback(()=> {
    return (
      <tbody>
        {
          filteredGameHistory.map(({game, address, timestamp, betAmount, payout, didWin, txn }, i) => (
            <tr key={`${game}_${i}`}>
              <td> {game} </td>
              <td> {reduceAddressString(address)} </td>
              <td> {timestamp} </td>
              <td> ${Number(betAmount)} BONE </td>
              <td> {didWin ? '+' : '-'}100% </td>
              <td> {didWin ? '+' : '-'}${Number(payout)} </td>
              {/* <td> <img src={'./btc.png'} className='w-8' alt="Coin Image" /></td> */}
              <td>
                <a className='text-blue-600 hover:text-blue-500 hover:underline' href={`https://puppyscan.shib.io/tx/${txn}`} target='_blank'>{reduceAddressString(txn)}</a>
              </td>
            </tr>
          ))
        }
      </tbody>
    )
  }, [filteredGameHistory])

  return (
    <div className='w-full hidden lg:flex flex-col gap-2'>
      <div className='font-bold text-lg text-white'>RECENT WINS</div>
      <div className='border-4 bg-secondary/70 border-black w-full rounded-lg'>
        <table className='w-full border-4 border-white'>
          <thead>
            <tr>
              <th>GAME</th>
              <th>WALLET</th>
              <th>TIME</th>
              <th>BET SIZE</th>
              <th>PROFIT</th>
              <th>PAYOUT</th>
              {/* <th>CRYPTO</th> */}
              <th>TXN</th>
            </tr>
          </thead>  
          {
            status === "connected" &&
            <ListHistory/>
          }        
        </table>
        {
          (status !== 'connected' || filteredGameHistory.length === 0) &&
          <div className='grid place-items-center h-60 border-4 border-white'>
            <p className='text-white font-bold'>
              {
                status !== 'connected' ? "Connet your Wallet" : filteredGameHistory.length === 0 && "Start flip now"
              }
            </p>
          </div>
        }
      </div>
    </div>
  )
}

export default RecentWins
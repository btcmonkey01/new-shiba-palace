import { GamePlayed } from "../types/types"

export const parseCoinFlipEvent = (event: any): GamePlayed => {
  const {
    returnValues,
    transactionHash
  } = event

  const {
    sender,
    betAmount,
    didWin,
    payout,
    timestamp
  } = returnValues
 
  return {
    game: "Coin Flip",
    address: sender,
    didWin: didWin,
    betAmount: betAmount,
    payout: payout,
    timestamp: timestamp,
    tx: transactionHash,
  }
}
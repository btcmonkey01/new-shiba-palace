import web3 from "../lib/web3/web3"
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
    timestamp
  } = returnValues
  const ethBetAmount = betAmount ? web3.utils.fromWei(betAmount, 'ether') : '';

  return {
    game: "Shiba Flip",
    address: sender,
    didWin: didWin,
    betAmount: ethBetAmount,
    payout: ethBetAmount,
    timestamp: timestamp,
    txn: transactionHash,
  }
}
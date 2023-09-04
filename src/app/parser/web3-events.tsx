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

  const timestampNumber = parseInt(timestamp);
  const time = timestamp ? new Date(timestampNumber * 1000).toUTCString() : ""

  return {
    game: "Shiba Flip",
    address: sender,
    didWin: didWin,
    betAmount: ethBetAmount,
    payout: ethBetAmount,
    timestamp: time,
    txn: transactionHash,
  }
}

export const parseCoinFlipResponse = (response: any): GamePlayed => {
  const {
    sender,
    betAmount,
    didWin,
    timestamp,
    transactionHash
  } = response;

  const ethBetAmount = betAmount ? web3.utils.fromWei(betAmount, 'ether') : '';

  const timestampNumber = parseInt(timestamp);
  const time = timestamp ? new Date(timestampNumber * 1000).toUTCString() : ""
  
  return {    
    game: "Shiba Flip",
    address: sender,
    didWin: didWin,
    betAmount: ethBetAmount,
    payout: ethBetAmount,
    timestamp: time,
    txn: transactionHash,
  }
}
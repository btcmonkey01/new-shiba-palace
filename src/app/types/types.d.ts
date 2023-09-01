
export type GamePlayed = {
  game: "Coin Flip"
  address: string
  timestamp: number
  betAmount: BigInt
  payout: BigInt
  didWin: boolean
  tx: string
}

export type GamePlayed = {
  game: GameType
  address: string
  timestamp: number
  betAmount: string
  payout: string
  didWin: boolean
  txn: string
}

export type GameType = 'Shiba Flip' | ""
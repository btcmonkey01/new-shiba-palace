
export type GamePlayed = {
  game: GameType
  address: string
  timestamp: string
  betAmount: string
  payout: string
  didWin: boolean
  txn: string
}

export type GameType = 'Shiba Flip' | ""
"use client"
import { getBetAmountList } from "@/app/constants/contract";
import { useCoinFlip } from "@/app/context/coin-flip";
import { CoinFlipSelection } from "@/app/lib/web3/contract";
import { CSSProperties, MouseEvent } from "react";

export const CoinFlipGame = ({}) => {

  const {
    betAmount,
    coinSelection,
    loadingFlip,
    setBetAmount,
    setCoinSelection,
    flip,
    result,
    eventConnected
  } = useCoinFlip();

  const onCoinSelection = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    const coinValue = parseInt(value);
    setCoinSelection(coinValue as CoinFlipSelection);
  }

  const onBetAmountSelection = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setBetAmount(value);
  }

  const buttonStyles: CSSProperties = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    height: "50px",
    margin: "auto auto"
  }

  return <div className="flex flex-col gap-6">
    <div className="flex justify-center ">
      {
        loadingFlip ? 
        <img className="w-80 aspect-square" src="/image/coinFlig.gif" alt="coin rotating" />
        : <img className="w-80 aspect-square" src="Token.webp"/>
      }
    </div>
    <div className="flex justify-center text-2xl font-black text-white">
      I LIKE
    </div>
    <div className="flex flex-row justify-center gap-6">
      <div className={`border-4 border-white rounded-lg hover:scale-105 ease-in-out duration-200 ${coinSelection === CoinFlipSelection.HEADS ? 'opacity-1 scale-105' : 'opacity-50 hover:opacity-75'}`}>
        <button 
          className={`border-4 border-black h-full w-48 py-2 rounded-[5px] bg-secondary`}
          value={CoinFlipSelection.HEADS} 
          onClick={onCoinSelection} 
          // className={`${coinSelection === CoinFlipSelection.HEADS ? 'bg-blue-500' : ''}`}
        >
          <div
            style={{
              backgroundImage:`url(/images/heads.webp)`,
              aspectRatio: "228/79",
              ...buttonStyles
            }}
          >
          </div>
        </button>
      </div>
      <div className={`border-4 border-white rounded-lg hover:scale-105 ease-in-out duration-200 ${coinSelection === CoinFlipSelection.TAILS ? 'opacity-1 scale-105' : 'opacity-50 hover:opacity-75'}`}>
        <button 
          className={`border-4 border-black h-full w-48 py-2 rounded-[5px] bg-secondary`}
          value={CoinFlipSelection.TAILS} 
          onClick={onCoinSelection}
        >
          <div
            style={{
              backgroundImage:`url(/images/tails.webp)`,
              aspectRatio: "184/88",
              ...buttonStyles
            }}
          >
          </div>
        </button>
      </div>
    </div>
    <div className="flex justify-center text-2xl font-black text-white">
      FOR
    </div>
    <div className="flex flex-row flex-wrap justify-center gap-6 max-w-2xl mx-auto">
      {
        getBetAmountList().map(({amount, img, aspectRatio}) => {
          return (
            <div className={`border-4 border-white rounded-lg hover:scale-105 ease-in-out duration-200 ${betAmount === amount ? 'opacity-1 scale-105' : 'opacity-50 hover:opacity-75'}`}>
              <button 
                className={`border-4 border-black h-full w-40 py-2 rounded-[5px] bg-secondary`}
                key={amount}
                value={amount}
                onClick={onBetAmountSelection} 
              >
                <div
                  style={{
                    backgroundImage:`url(${img})`, 
                    ...buttonStyles, 
                    aspectRatio: aspectRatio,
                    height: "25px"
                  }}
                >
                </div>
              </button>
            </div>
          )
        }
        )
      }
    </div>
    <div>
      <button onClick={() => flip()}>
        Flip Flop
      </button>
    </div>
  </div>
}
import { CoinFlipGame } from "@/app/components/CoinFlip/CoinFlipGame";
import RecentWins from "@/app/components/RecentWins/RecentWins";
import { CoinFlipProvider } from "@/app/context/coin-flip";

const Page = () => {


  return  <CoinFlipProvider>
    <div className='flex flex-col items-center justify-center gap-8 w-full'>
        <CoinFlipGame/>
        <RecentWins />
    </div>
  </CoinFlipProvider>
}

export default Page;

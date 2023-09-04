
import { Address } from "web3"
import web3 from "./web3";
import { COIN_FLIP_ABI, COIN_FLIP_ADDRESS } from "@/app/constants/contract";

type Amount = string;

export enum CoinFlipSelection {
  HEADS,
  TAILS
}

const coinFlip = new web3.eth.Contract(COIN_FLIP_ABI, COIN_FLIP_ADDRESS);

type startFlipOptions = {
	from: Address,
  ether: Amount,
  choice: CoinFlipSelection
}
/**
 * @param from address entering the flip
 * @param ether amount sent to the pool by the participant
 * @param choice Coinflip selection by the participant
 */
export const startFlip = async ({ from, ether, choice}: startFlipOptions): Promise<any> => {
  const encodedABI = coinFlip.methods.flip(choice).encodeABI();
  return web3.eth.sendTransaction(
    {
      data: encodedABI,
      from: from,
      gas: 2000000,
      value: web3.utils.toWei(ether, 'ether'),
      to: coinFlip.options.address,
    },
  );
}

type initializeEventOptions = {
	account: string,
  onConnected: (event: any) => void,
  onTrigger: (event: any) => void,
  onError: (erro: any) => void,
}

/**
 * @param account address entering the flip
 * @param onConnected callback when event is connected
 * @param onTrigger callback when event is fired
 * @param onError callback when event returns an error
 */
export const initializeCoinFlipResultEvent = ({account, onConnected, onTrigger, onError}: initializeEventOptions) => {
  const event = coinFlip.events.CoinFlipResult({
/*     filter: {
      sender: [account]
    }, */
    fromBlock: "latest"
  });
  event.on("connected", onConnected)
  event.on("data", onTrigger)
  event.on("error", onError)
  
  return event;
}

type getAllEventsProps = {
  account: string
}

/**
 * @param account address entering the flip
 */
export const getAllCoinFlipEvents = async ({account}: getAllEventsProps) => {
  return await coinFlip.getPastEvents("CoinFlipResult",{
/*     filter: {
      sender: [account]
    }, */
    fromBlock: 0,
  });
}
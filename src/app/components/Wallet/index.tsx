import { MetaMaskIcon } from "@/app/icons";
import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import * as blockies from 'blockies-ts';
import { reduceAddressString } from "@/app/utils/web";
import { toast } from "react-hot-toast";


export const Wallet = () => {

  const [profileImage, setProfileImage] = useState<string>("");

  const { status, connect, account, chainId } = useMetaMask();

  useEffect(() => {
    if (account) {
      const imgSrc = blockies.create({ seed: account }).toDataURL();
      setProfileImage(imgSrc);
    }
  }, [account])

  if (status === "initializing") return <div className="text-white">Loading...</div>

  if (status === "unavailable") return <div className="text-white">MetaMask not available</div> 

  if (status === "notConnected") {
    return (
      <button onClick={connect} className="flex buttons-animation relative">
        <img src="./Wallet.webp" alt="Wallet Button" className='w-[120px] ' />
        <MetaMaskIcon/>
      </button>
    )
  }

  if (status === "connecting") return <div>Connecting...</div>

  if (status === "connected") return <div className="flex flex-row place-items-center gap-4 px-4 py-2">
    <img src={profileImage ?? null} className="rounded-full" />
    <p className="text-white font-bold">{reduceAddressString(account)}</p>
  </div>

  return null;
}
import { MetaMaskIcon } from "@/app/icons";
import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import * as blockies from 'blockies-ts';
import { SHIBARIUM_NETWORK_ID, SHIBARIUM_NETWORK_PARAMS, isShibariumNetwork, reduceAddressString } from "@/app/utils/web";


export const Wallet = () => {

  const [profileImage, setProfileImage] = useState<string | undefined>(undefined);

  const { status, connect, account, chainId, switchChain, ethereum, addChain } = useMetaMask();

  useEffect(() => {
    if (account) {
      const imgSrc = blockies.create({ seed: account }).toDataURL();
      setProfileImage(imgSrc);
    }
  }, [account])

  useEffect(() => {
    if(chainId) {
      if(!isShibariumNetwork(chainId)) {
        console.log({chainId, ethereum})
        switchChain(SHIBARIUM_NETWORK_ID())
        .catch((error: any) => {
          if(error.code === 4902) {
            addChain(SHIBARIUM_NETWORK_PARAMS())
          }
        })
      }
    }
  }, [chainId])

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

  if (status === "connecting") return <div className="text-white">Connecting...</div>

  if (status === "connected") return <div className="flex flex-row place-items-center gap-2 px-4 py-2">
    <img src={profileImage} className="rounded-full" />
    <p className="text-white font-bold">{reduceAddressString(account)}</p>
  </div>

  return null;
}
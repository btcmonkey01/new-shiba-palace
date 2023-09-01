import { MetaMaskIcon } from "@/app/icons";
import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import * as blockies from 'blockies-ts';
import { reduceAddressString } from "@/app/utils/web";


export const Wallet = () => {

  const [profileImage, setProfileImage] = useState<string>("");

  const { status, connect, account, chainId } = useMetaMask();

  useEffect(() => {
    if(account) {
      const imgSrc = blockies.create({ seed: account }).toDataURL();
      setProfileImage(imgSrc);
    }
  }, [account])

  if (status === "initializing") return <div>Loading</div>

  if (status === "unavailable") return <div>MetaMask not available</div> //TODO: Add install metamask

  if (status === "notConnected") return <button onClick={connect}><MetaMaskIcon></MetaMaskIcon>Connect to MetaMask</button>

  if (status === "connecting") return <div>Connecting...</div>

  if (status === "connected") return <div>
      <img src={profileImage}/>
      <p>{reduceAddressString(account)}</p>
    </div>

  return null;
}
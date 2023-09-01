import { SHIBARIUM_BETA_ID, SHIBARIUM_ID } from "../constants/web3"


export const isShibariumNetwork = (chainID: string) => {
  if(process.env.NODE_ENV === "development") {
    return chainID === SHIBARIUM_BETA_ID;
  } else if(process.env.NODE_ENV === "production") {
    return chainID === SHIBARIUM_ID
  } else return false
}

export const reduceAddressString = (str: string) => {
  const prefix = str.slice(0, 5);
  const suffix = str.slice(-5);

  return `${prefix}...${suffix}`;
}
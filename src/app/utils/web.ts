import { SHIBARIUM_BETA_ID, SHIBARIUM_BETA_PARAMS, SHIBARIUM_ID, SHIBARIUM_PARAMS } from "../constants/web3"

export const isShibariumNetwork = (chainID: string) => {
  if(process.env.NODE_ENV === "development") {
    return chainID === SHIBARIUM_BETA_ID;
  } else if(process.env.NODE_ENV === "production") {
    return chainID === SHIBARIUM_ID
  } else return false
}

export const SHIBARIUM_NETWORK_ID = () => {
  if(process.env.NODE_ENV === "development") {
    return  SHIBARIUM_BETA_ID;
  } else if(process.env.NODE_ENV === "production") {
    return SHIBARIUM_ID
  } else return SHIBARIUM_ID
}

export const SHIBARIUM_NETWORK_PARAMS = () => {
  if(process.env.NODE_ENV === "development") {
    return  SHIBARIUM_BETA_PARAMS;
  } else if(process.env.NODE_ENV === "production") {
    return SHIBARIUM_PARAMS;
  } else return SHIBARIUM_PARAMS
}

export const reduceAddressString = (str: string) => {
  const prefix = str.slice(0, 5);
  const suffix = str.slice(-5);

  return `${prefix}...${suffix}`;
}
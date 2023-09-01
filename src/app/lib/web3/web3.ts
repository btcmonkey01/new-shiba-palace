import Web3 from 'web3';

declare global {
	interface Window { web3: any; }
}

// if (window !== undefined) {
// 	window.web3 = window.web3;
// }

let web3: Web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we check if metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // set up provider through infura
  const provider = new Web3.providers.HttpProvider(
    // pass url of remote node
    'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
  );
  web3 = new Web3(provider);

}

export default web3;
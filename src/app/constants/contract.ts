export const COIN_FLIP_ADDRESS = '0x8d33608fc030cBEBf0c997070a26C54e15690749';  //shibarium beta

export const COIN_FLIP_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "didWin",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "betAmount",
				"type": "uint256"
			}
		],
		"name": "CoinFlipResult",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "LogEvent",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_choiceId",
				"type": "uint8"
			}
		],
		"name": "flip",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_pause",
				"type": "bool"
			}
		],
		"name": "setPause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "statuses",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "betAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "didWin",
				"type": "bool"
			},
			{
				"internalType": "enum CoinFlip.CoinFlipSelection",
				"name": "choice",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalBets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
] as const 

export const betAmountListDev = [
	{
		amount: "0.005",
		img: "/images/0.5bone.webp",
		aspectRatio: "301/80"
	},
	{
		amount: "0.01",
		img: "/images/1bone.webp",
		aspectRatio: "219/79"
	},
	{
		amount: "0.025",
		img: "/images/2.5bone.webp",
		aspectRatio: "153/40"
	},
	{
		amount: "0.05",
		img: "/images/5bone.webp",
		aspectRatio: "245/79"
	},
	{
		amount: "0.08",
		img: "/images/8bone.webp",
		aspectRatio: "49/16"
	}
]

export const betAmountList = [
	{
		amount: "0.5",
		img: "/images/0.5bone.webp",
		aspectRatio: "301/80"
	},
	{
		amount: "1",
		img: "/images/1bone.webp",
		aspectRatio: "219/79"
	},
	{
		amount: "2.5",
		img: "/images/2.5bone.webp",
		aspectRatio: "153/40"
	},
	{
		amount: "5",
		img: "/images/5bone.webp",
		aspectRatio: "245/79"
	},
	{
		amount: "8",
		img: "/images/8bone.webp",
		aspectRatio: "49/16"
	}
]


export const getBetAmountList = () => {
	if(process.env.NODE_ENV === "development") {
    return betAmountListDev;
  } else if(process.env.NODE_ENV === "production") {
    return betAmountList
  } else return betAmountList
}
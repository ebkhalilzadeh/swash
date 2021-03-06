var communityConfig = {
	apiBaseURL: 'https://www.streamr.com/api/v1/communities',
	datacoinAddress: '0x0cf0ee63788a0849fe5297f3407f701e122cc023',
	communityAddress: '0xF24197f71fC9b2F4F4c24ecE461fB0Ff7C91FD23',
	secret: "swash-secret2",
	communityAbi: [
		{
			"constant":false,
			"inputs":[
				{
					"name":"recipient",
					"type":"address"
				},
				{
					"name":"account",
					"type":"address"
				},
				{
					"name":"amount",
					"type":"uint256"
				}
			],
			"name":"withdrawTo",
			"outputs":[],
			"payable":false,
			"stateMutability":"nonpayable",
			"type":"function"
		},
		{
			"constant": true,
			"inputs": [
			  {
				"name": "",
				"type": "address"
			  }
			],
			"name": "withdrawn",
			"outputs": [
			  {
				"name": "",
				"type": "uint256"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		  },
		  {
			"constant": false,
			"inputs": [
			  {
				"name": "recipient",
				"type": "address"
			  },
			  {
				"name": "blockNumber",
				"type": "uint256"
			  },
			  {
				"name": "totalEarnings",
				"type": "uint256"
			  },
			  {
				"name": "proof",
				"type": "bytes32[]"
			  }
			],
			"name": "withdrawAllFor",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		  },

	],
	datacoinAbi: [
	    {
	      "constant": true,
	      "inputs": [],
	      "name": "name",
	      "outputs": [
	        {
	          "name": "",
	          "type": "string"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "view",
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [
	        {
	          "name": "spender",
	          "type": "address"
	        },
	        {
	          "name": "value",
	          "type": "uint256"
	        }
	      ],
	      "name": "approve",
	      "outputs": [
	        {
	          "name": "",
	          "type": "bool"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "nonpayable",
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [],
	      "name": "totalSupply",
	      "outputs": [
	        {
	          "name": "",
	          "type": "uint256"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "view",
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [
	        {
	          "name": "from",
	          "type": "address"
	        },
	        {
	          "name": "to",
	          "type": "address"
	        },
	        {
	          "name": "value",
	          "type": "uint256"
	        }
	      ],
	      "name": "transferFrom",
	      "outputs": [
	        {
	          "name": "",
	          "type": "bool"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "nonpayable",
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [],
	      "name": "decimals",
	      "outputs": [
	        {
	          "name": "",
	          "type": "uint8"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "view",
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [
	        {
	          "name": "spender",
	          "type": "address"
	        },
	        {
	          "name": "addedValue",
	          "type": "uint256"
	        }
	      ],
	      "name": "increaseAllowance",
	      "outputs": [
	        {
	          "name": "",
	          "type": "bool"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "nonpayable",
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [
	        {
	          "name": "to",
	          "type": "address"
	        },
	        {
	          "name": "value",
	          "type": "uint256"
	        }
	      ],
	      "name": "mint",
	      "outputs": [
	        {
	          "name": "",
	          "type": "bool"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "nonpayable",
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [
	        {
	          "name": "_owner",
	          "type": "address"
	        }
	      ],
	      "name": "balanceOf",
	      "outputs": [
	        {
	          "name": "",
	          "type": "uint256"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "view",
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [],
	      "name": "symbol",
	      "outputs": [
	        {
	          "name": "",
	          "type": "string"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "view",
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [
	        {
	          "name": "account",
	          "type": "address"
	        }
	      ],
	      "name": "addMinter",
	      "outputs": [],
	      "payable": false,
	      "stateMutability": "nonpayable",
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [],
	      "name": "renounceMinter",
	      "outputs": [],
	      "payable": false,
	      "stateMutability": "nonpayable",
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [
	        {
	          "name": "spender",
	          "type": "address"
	        },
	        {
	          "name": "subtractedValue",
	          "type": "uint256"
	        }
	      ],
	      "name": "decreaseAllowance",
	      "outputs": [
	        {
	          "name": "",
	          "type": "bool"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "nonpayable",
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [
	        {
	          "name": "to",
	          "type": "address"
	        },
	        {
	          "name": "value",
	          "type": "uint256"
	        }
	      ],
	      "name": "transfer",
	      "outputs": [
	        {
	          "name": "",
	          "type": "bool"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "nonpayable",
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [
	        {
	          "name": "account",
	          "type": "address"
	        }
	      ],
	      "name": "isMinter",
	      "outputs": [
	        {
	          "name": "",
	          "type": "bool"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "view",
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [
	        {
	          "name": "owner",
	          "type": "address"
	        },
	        {
	          "name": "spender",
	          "type": "address"
	        }
	      ],
	      "name": "allowance",
	      "outputs": [
	        {
	          "name": "",
	          "type": "uint256"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "view",
	      "type": "function"
	    },
	    {
	      "inputs": [
	        {
	          "name": "name",
	          "type": "string"
	        },
	        {
	          "name": "symbol",
	          "type": "string"
	        }
	      ],
	      "payable": false,
	      "stateMutability": "nonpayable",
	      "type": "constructor"
	    },
	    {
	      "anonymous": false,
	      "inputs": [
	        {
	          "indexed": true,
	          "name": "account",
	          "type": "address"
	        }
	      ],
	      "name": "MinterAdded",
	      "type": "event"
	    },
	    {
	      "anonymous": false,
	      "inputs": [
	        {
	          "indexed": true,
	          "name": "account",
	          "type": "address"
	        }
	      ],
	      "name": "MinterRemoved",
	      "type": "event"
	    },
	    {
	      "anonymous": false,
	      "inputs": [
	        {
	          "indexed": true,
	          "name": "from",
	          "type": "address"
	        },
	        {
	          "indexed": true,
	          "name": "to",
	          "type": "address"
	        },
	        {
	          "indexed": false,
	          "name": "value",
	          "type": "uint256"
	        }
	      ],
	      "name": "Transfer",
	      "type": "event"
	    },
	    {
	      "anonymous": false,
	      "inputs": [
	        {
	          "indexed": true,
	          "name": "owner",
	          "type": "address"
	        },
	        {
	          "indexed": true,
	          "name": "spender",
	          "type": "address"
	        },
	        {
	          "indexed": false,
	          "name": "value",
	          "type": "uint256"
	        }
	      ],
	      "name": "Approval",
	      "type": "event"
	    }
	]
}
export {communityConfig};
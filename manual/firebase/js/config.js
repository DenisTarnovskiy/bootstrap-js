
   var  contractAddress = ('0x6BdC816cE50F2bC68251f22A8c3bd9a79B7A9A70');

    var CoursetroContract = web3.eth.contract([
        {
            "constant": true,
            "inputs": [],
            "name": "numberOfBets",
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
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "playerTicketsCount",
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
            "name": "maxAmountOfTickets",
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
            "name": "maxAmountOfBets",
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
            "name": "range",
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
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "ticketTypes",
            "outputs": [
                {
                    "name": "number",
                    "type": "uint256"
                },
                {
                    "name": "totalTickets",
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
            "name": "totalBet",
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
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "winner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "winningNumber",
                    "type": "uint256"
                }
            ],
            "name": "Win",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_minimumBet",
                    "type": "uint256"
                },
                {
                    "name": "_maxAmountOfBets",
                    "type": "uint256"
                }
            ],
            "name": "VirtLotto",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "number",
                    "type": "uint256"
                }
            ],
            "name": "pickNumber",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "player",
                    "type": "address"
                }
            ],
            "name": "canPlay",
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
            "constant": false,
            "inputs": [],
            "name": "draw",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }
    ],);


bla =

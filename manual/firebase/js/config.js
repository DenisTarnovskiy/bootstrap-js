export default {
    contractAddress: '0x6BdC816cE50F2bC68251f22A8c3bd9a79B7A9A70',
    contractAbi: [
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
        ],
        "bytecode": "0x608060405267016345785d8a000060015560006002556000600355600560045534801561002b57600080fd5b50610bd48061003b6000396000f3006080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630823d5f3146100b45780630eecae211461010f578063214fa2cc146101755780632ca8c6d3146101955780636549e874146101c05780639ab05ee614610217578063bf9130f81461024e578063e08a96cd14610279578063e97206a9146102a4578063e9dbebce146102cf578063fe5e185314610317575b600080fd5b3480156100c057600080fd5b506100f5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610342565b604051808215151515815260200191505060405180910390f35b61011761038e565b6040518083815260200180602001828103825283818151815260200191508051906020019060200280838360005b83811015610160578082015181840152602081019050610145565b50505050905001935050505060405180910390f35b6101936004803603810190808035906020019092919050505061040d565b005b3480156101a157600080fd5b506101aa610626565b6040518082815260200191505060405180910390f35b3480156101cc57600080fd5b50610201600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061062c565b6040518082815260200191505060405180910390f35b34801561022357600080fd5b5061024c6004803603810190808035906020019092919080359060200190929190505050610644565b005b34801561025a57600080fd5b506102636106aa565b6040518082815260200191505060405180910390f35b34801561028557600080fd5b5061028e6106af565b6040518082815260200191505060405180910390f35b3480156102b057600080fd5b506102b96106b5565b6040518082815260200191505060405180910390f35b3480156102db57600080fd5b506102fa600480360381019080803590602001909291905050506106ba565b604051808381526020018281526020019250505060405180910390f35b34801561032357600080fd5b5061032c6106de565b6040518082815260200191505060405180910390f35b60006004600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054109050919050565b60006060600060606000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103f157600080fd5b6103f96106e4565b809250819350505081819350935050509091565b6000600182101580156104215750600a8211155b151561042c57600080fd5b600154341015151561043d57600080fd5b61044633610342565b151561045157600080fd5b6006600083815260200190815260200160002090506060604051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001348152602001838152508160020160008360010154815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201559050508060010160008154809291906001019190505550600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555061057b3361070d565b15156105e85760053390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b346002600082825401925050819055506003600081548092919060010191905055506004546003541015156106225761061f6106e4565b50505b5050565b60035481565b60076020528060005260406000206000915090505481565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600082111561069557816001819055505b60008111156106a657806004819055505b5050565b600481565b60045481565b600a81565b60066020528060005260406000206000915090508060000154908060010154905082565b60025481565b60006060600060606106f46107b0565b91506106ff826107e8565b905081819350935050509091565b600080600090505b6005805490508110156107a5578273ffffffffffffffffffffffffffffffffffffffff1660058281548110151561074857fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561079857600191506107aa565b8080600101915050610715565b600091505b50919050565b60006001600a424460405180838152602001828152602001925050506040518091039020600190048115156107e157fe5b0601905090565b6060600060606000806000600660008881526020019081526020016000209450846001015460405190808252806020026020018201604052801561083b5781602001602082028038833980820191505090505b509350600092505b846001015483101561094d5784600201600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915081848481518110151561089957fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f6747c18256028de8cd2fa276e75d6b4193ac34c1b55fa8e71797ac132d32ad398288604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a18280600101935050610843565b600084511115610a4757835160025481151561096557fe5b049050610970610a5d565b6000600281905550600092505b8460010154831015610a4257600073ffffffffffffffffffffffffffffffffffffffff1684848151811015156109af57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff16141515610a355783838151811015156109e457fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610a33573d6000803e3d6000fd5b505b828060010193505061097d565b610a50565b610a4f610a5d565b5b8395505050505050919050565b6000600190505b600a81111515610aa15760066000828152602001908152602001600020600080820160009055600182016000905550508080600101915050610a64565b600090505b600580549050811015610b3c5760076000600583815481101515610ac657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558080600101915050610aa6565b6000600581610b4b9190610b57565b50600060038190555050565b815481835581811115610b7e57818360005260206000209182019101610b7d9190610b83565b5b505050565b610ba591905b80821115610ba1576000816000905550600101610b89565b5090565b905600a165627a7a72305820f187b192ad0517368b24f611782be3dba9924d9a76a89d67e394483d8f5aad440029",
        "deployedBytecode": "0x6080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630823d5f3146100b45780630eecae211461010f578063214fa2cc146101755780632ca8c6d3146101955780636549e874146101c05780639ab05ee614610217578063bf9130f81461024e578063e08a96cd14610279578063e97206a9146102a4578063e9dbebce146102cf578063fe5e185314610317575b600080fd5b3480156100c057600080fd5b506100f5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610342565b604051808215151515815260200191505060405180910390f35b61011761038e565b6040518083815260200180602001828103825283818151815260200191508051906020019060200280838360005b83811015610160578082015181840152602081019050610145565b50505050905001935050505060405180910390f35b6101936004803603810190808035906020019092919050505061040d565b005b3480156101a157600080fd5b506101aa610626565b6040518082815260200191505060405180910390f35b3480156101cc57600080fd5b50610201600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061062c565b6040518082815260200191505060405180910390f35b34801561022357600080fd5b5061024c6004803603810190808035906020019092919080359060200190929190505050610644565b005b34801561025a57600080fd5b506102636106aa565b6040518082815260200191505060405180910390f35b34801561028557600080fd5b5061028e6106af565b6040518082815260200191505060405180910390f35b3480156102b057600080fd5b506102b96106b5565b6040518082815260200191505060405180910390f35b3480156102db57600080fd5b506102fa600480360381019080803590602001909291905050506106ba565b604051808381526020018281526020019250505060405180910390f35b34801561032357600080fd5b5061032c6106de565b6040518082815260200191505060405180910390f35b60006004600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054109050919050565b60006060600060606000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103f157600080fd5b6103f96106e4565b809250819350505081819350935050509091565b6000600182101580156104215750600a8211155b151561042c57600080fd5b600154341015151561043d57600080fd5b61044633610342565b151561045157600080fd5b6006600083815260200190815260200160002090506060604051908101604052803373ffffffffffffffffffffffffffffffffffffffff168152602001348152602001838152508160020160008360010154815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201559050508060010160008154809291906001019190505550600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555061057b3361070d565b15156105e85760053390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b346002600082825401925050819055506003600081548092919060010191905055506004546003541015156106225761061f6106e4565b50505b5050565b60035481565b60076020528060005260406000206000915090505481565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600082111561069557816001819055505b60008111156106a657806004819055505b5050565b600481565b60045481565b600a81565b60066020528060005260406000206000915090508060000154908060010154905082565b60025481565b60006060600060606106f46107b0565b91506106ff826107e8565b905081819350935050509091565b600080600090505b6005805490508110156107a5578273ffffffffffffffffffffffffffffffffffffffff1660058281548110151561074857fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561079857600191506107aa565b8080600101915050610715565b600091505b50919050565b60006001600a424460405180838152602001828152602001925050506040518091039020600190048115156107e157fe5b0601905090565b6060600060606000806000600660008881526020019081526020016000209450846001015460405190808252806020026020018201604052801561083b5781602001602082028038833980820191505090505b509350600092505b846001015483101561094d5784600201600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915081848481518110151561089957fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f6747c18256028de8cd2fa276e75d6b4193ac34c1b55fa8e71797ac132d32ad398288604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a18280600101935050610843565b600084511115610a4757835160025481151561096557fe5b049050610970610a5d565b6000600281905550600092505b8460010154831015610a4257600073ffffffffffffffffffffffffffffffffffffffff1684848151811015156109af57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff16141515610a355783838151811015156109e457fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610a33573d6000803e3d6000fd5b505b828060010193505061097d565b610a50565b610a4f610a5d565b5b8395505050505050919050565b6000600190505b600a81111515610aa15760066000828152602001908152602001600020600080820160009055600182016000905550508080600101915050610a64565b600090505b600580549050811015610b3c5760076000600583815481101515610ac657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558080600101915050610aa6565b6000600581610b4b9190610b57565b50600060038190555050565b815481835581811115610b7e57818360005260206000209182019101610b7d9190610b83565b5b505050565b610ba591905b80821115610ba1576000816000905550600101610b89565b5090565b905600a165627a7a72305820f187b192ad0517368b24f611782be3dba9924d9a76a89d67e394483d8f5aad440029",
        "sourceMap": "26:3952:0:-;;;376:10;358:28;;415:1;392:24;;449:1;422:28;;486:1;456:31;;26:3952;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:3952:0;;;;;;;",
        "deployedSourceMap": "26:3952:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1807:131;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1807:131:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1944:233;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1944:233:0;;;;;;;;;;;;;;;;;;1075:726;;;;;;;;;;;;;;;;;;;;;;;;;;422:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;422:28:0;;;;;;;;;;;;;;;;;;;;;;;654:50;;8:9:-1;5:2;;;30:1;27;20:12;5:2;654:50:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;792:277;;8:9:-1;5:2;;;30:1;27;20:12;5:2;792:277:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;493:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;493:43:0;;;;;;;;;;;;;;;;;;;;;;;456:31;;8:9:-1;5:2;;;30:1;27;20:12;5:2;456:31:0;;;;;;;;;;;;;;;;;;;;;;;542;;8:9:-1;5:2;;;30:1;27;20:12;5:2;542:31:0;;;;;;;;;;;;;;;;;;;;;;;602:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;602:46:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;392:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;392:24:0;;;;;;;;;;;;;;;;;;;;;;;1807:131;1861:4;535:1;1884:18;:26;1903:6;1884:26;;;;;;;;;;;;;;;;:47;1877:54;;1807:131;;;:::o;1944:233::-;1995:4;2001:9;2022:18;2050:24;762:5;;;;;;;;;;;748:19;;:10;:19;;;740:28;;;;;;;;2112:16;:14;:16::i;:::-;2085:43;;;;;;;;2147:13;2162:7;2139:31;;;;1944:233;;;;:::o;1075:726::-;1263:29;1151:1;1141:6;:11;;:30;;;;;571:2;1156:6;:15;;1141:30;1133:39;;;;;;;;1203:10;;1190:9;:23;;1182:32;;;;;;;;1232:19;1240:10;1232:7;:19::i;:::-;1224:28;;;;;;;;1295:11;:19;1307:6;1295:19;;;;;;;;;;;1263:51;;1371:112;;;;;;;;;1399:10;1371:112;;;;;;1431:9;1371:112;;;;1462:6;1371:112;;;1325:10;:18;;:43;1344:10;:23;;;1325:43;;;;;;;;;;;:158;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1493:10;:23;;;:25;;;;;;;;;;;;;1528:18;:30;1547:10;1528:30;;;;;;;;;;;;;;;;:32;;;;;;;;;;;;;1576:24;1589:10;1576:12;:24::i;:::-;1575:25;1571:80;;;1616:7;1629:10;1616:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1616:24:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1571:80;1673:9;1661:8;;:21;;;;;;;;;;;1692:12;;:14;;;;;;;;;;;;;1737:15;;1721:12;;:31;;1717:78;;;1768:16;:14;:16::i;:::-;;;1717:78;1075:726;;:::o;422:28::-;;;;:::o;654:50::-;;;;;;;;;;;;;;;;;:::o;792:277::-;877:10;869:5;;:18;;;;;;;;;;;;;;;;;;916:1;902:11;:15;898:70;;;946:11;933:10;:24;;;;898:70;1001:1;982:16;:20;978:85;;;1036:16;1018:15;:34;;;;978:85;792:277;;:::o;493:43::-;535:1;493:43;:::o;456:31::-;;;;:::o;542:::-;571:2;542:31;:::o;602:46::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;392:24::-;;;;:::o;2183:230::-;2226:4;2232:9;2253:18;2306:24;2274:22;:20;:22::i;:::-;2253:43;;2333:31;2350:13;2333:16;:31::i;:::-;2306:58;;2383:13;2398:7;2375:31;;;;2183:230;;;;:::o;3440:241::-;3500:4;3521:6;3530:1;3521:10;;3516:136;3537:7;:14;;;;3533:1;:18;3516:136;;;3590:6;3576:20;;:7;3584:1;3576:10;;;;;;;;;;;;;;;;;;;;;;;;;;;:20;;;3572:70;;;3623:4;3616:11;;;;3572:70;3553:3;;;;;;;3516:136;;;3669:5;3662:12;;3440:241;;;;;:::o;3286:148::-;3340:4;3426:1;571:2;3379:15;3396:16;3369:44;;;;;;;;;;;;;;;;;;;;;;;;3364:50;;;:58;;;;;;;;3363:64;3356:71;;3286:148;:::o;2419:861::-;2482:9;2503:29;2571:24;2652:6;2712:14;2893:22;2535:11;:26;2547:13;2535:26;;;;;;;;;;;2503:58;;2612:10;:23;;;2598:38;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;2598:38:0;;;;2571:65;;2661:1;2652:10;;2647:198;2668:10;:23;;;2664:1;:27;2647:198;;;2729:10;:18;;:21;2748:1;2729:21;;;;;;;;;;;:27;;;;;;;;;;;;2712:44;;2783:6;2770:7;2778:1;2770:10;;;;;;;;;;;;;;;;;:19;;;;;;;;;;;2808:26;2812:6;2820:13;2808:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;2693:3;;;;;;;2647:198;;;2876:1;2859:7;:14;:18;2855:394;;;2929:7;:14;2918:8;;:25;;;;;;;;2893:50;;2958:11;:9;:11::i;:::-;2994:1;2983:8;:12;;;;3019:1;3015:5;;3010:187;3026:10;:23;;;3022:1;:27;3010:187;;;3100:1;3078:24;;:7;3086:1;3078:10;;;;;;;;;;;;;;;;;;:24;;;;3074:109;;;3126:7;3134:1;3126:10;;;;;;;;;;;;;;;;;;:19;;:38;3146:17;3126:38;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3126:38:0;3074:109;3051:3;;;;;;;3010:187;;;2855:394;;;3227:11;:9;:11::i;:::-;2855:394;3266:7;3259:14;;2419:861;;;;;;;;:::o;3687:289::-;3731:6;3740:1;3731:10;;3726:80;571:2;3743:1;:10;;3726:80;;;3781:11;:14;3793:1;3781:14;;;;;;;;;;;;3774:21;;;;;;;;;;;;;;3755:3;;;;;;;3726:80;;;3825:1;3821:5;;3816:99;3832:7;:14;;;;3828:1;:18;3816:99;;;3874:18;:30;3893:7;3901:1;3893:10;;;;;;;;;;;;;;;;;;;;;;;;;;;3874:30;;;;;;;;;;;;;;;3867:37;;;3848:3;;;;;;;3816:99;;;3942:1;3925:7;:18;;;;;:::i;:::-;;3968:1;3953:12;:16;;;;3687:289;:::o;26:3952::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
        "source": "pragma solidity ^0.4.20;\n\ncontract VirtLotto_3 {\n    struct Ticket {\n        address owner;\n        uint amount;\n        uint number;\n    }\n\n    struct TicketType {\n        uint number;\n        uint totalTickets;\n        mapping(uint => Ticket) tickets;\n    }\n\n    event Win(\n        address winner,\n        uint winningNumber\n    );\n\n    address owner;\n    uint minimumBet = 100 finney;\n    uint public totalBet = 0;\n    uint public numberOfBets = 0;\n    uint public maxAmountOfBets = 5;\n    uint public constant maxAmountOfTickets = 4;\n    uint public constant range = 10;\n    address[] players;\n    mapping(uint => TicketType) public ticketTypes;\n    mapping(address => uint) public playerTicketsCount;\n\n    modifier onlyOwner {\n        require(msg.sender == owner);\n        _;\n    }\n\n    function VirtLotto(uint _minimumBet, uint _maxAmountOfBets) public {\n        owner = msg.sender;\n\n        if (_minimumBet > 0) {\n            minimumBet = _minimumBet;\n        }\n\n        if (_maxAmountOfBets > 0) {\n            maxAmountOfBets = _maxAmountOfBets;\n        }\n    }\n\n    function pickNumber(uint number) public payable {\n        require(number >= 1 && number <= range);\n        require(msg.value >= minimumBet);\n        require(canPlay(msg.sender));\n\n        TicketType storage ticketType = ticketTypes[number];\n\n        ticketType.tickets[ticketType.totalTickets] = Ticket({\n            owner: msg.sender,\n            amount: msg.value,\n            number: number\n            });\n        ticketType.totalTickets++;\n        playerTicketsCount[msg.sender]++;\n\n        if (!playerExists(msg.sender)) {\n            players.push(msg.sender);\n        }\n\n        totalBet += msg.value;\n        numberOfBets++;\n\n        if (numberOfBets >= maxAmountOfBets) {\n            generateWinner();\n        }\n    }\n\n    function canPlay(address player) public view returns (bool) {\n        return playerTicketsCount[player] < maxAmountOfTickets;\n    }\n\n    function draw() payable public onlyOwner  returns (uint, address[]) {\n        uint winningNumber;\n        address[] memory winners;\n\n        (winningNumber, winners) = generateWinner();\n\n        return (winningNumber, winners);\n    }\n\n    function generateWinner() private returns (uint, address[]) {\n        uint winningNumber = generateRandomNumber();\n        address[] memory winners = distributePrizes(winningNumber);\n\n        return (winningNumber, winners);\n    }\n\n    function distributePrizes(uint winningNumber) private returns (address[]) {\n        TicketType storage ticketType = ticketTypes[winningNumber];\n        address[] memory winners = new address[](ticketType.totalTickets);\n\n        for (uint i = 0; i < ticketType.totalTickets; i++) {\n            address winner = ticketType.tickets[i].owner;\n            winners[i] = winner;\n            emit Win(winner, winningNumber);\n        }\n\n        if (winners.length > 0) {\n            uint winnerEtherAmount = totalBet / winners.length;\n\n            resetGame();\n            totalBet = 0;\n\n            for (i = 0; i < ticketType.totalTickets; i++) {\n                if (winners[i] != address(0)) {\n                    winners[i].transfer(winnerEtherAmount);\n                }\n            }\n        } else {\n            resetGame();\n        }\n\n        return winners;\n    }\n\n    function generateRandomNumber() private view returns (uint) {\n        return (uint(keccak256(block.timestamp, block.difficulty)) % range) + 1;\n    }\n\n    function playerExists(address player) private view returns (bool) {\n        for (uint i = 0; i < players.length; i++) {\n            if (players[i] == player) {\n                return true;\n            }\n        }\n\n        return false;\n    }\n\n    function resetGame() private {\n        for (uint i = 1; i <= range; i++) {\n            delete ticketTypes[i];\n        }\n\n        for (i = 0; i < players.length; i++) {\n            delete playerTicketsCount[players[i]];\n        }\n\n        players.length = 0;\n        numberOfBets = 0;\n    }\n}\n",
        "sourcePath": "/Users/tecsynt_den/bootstrap-js/manual/firebase/folder_4_truffle/contracts/Lotto.sol",
        "ast": {
            "absolutePath": "/Users/tecsynt_den/bootstrap-js/manual/firebase/folder_4_truffle/contracts/Lotto.sol",
            "exportedSymbols": {
                "VirtLotto_3": [
                    475
                ]
            },
            "id": 476,
            "nodeType": "SourceUnit",
            "nodes": [
                {
                    "id": 1,
                    "literals": [
                        "solidity",
                        "^",
                        "0.4",
                        ".20"
                    ],
                    "nodeType": "PragmaDirective",
                    "src": "0:24:0"
                },
                {
                    "baseContracts": [],
                    "contractDependencies": [],
                    "contractKind": "contract",
                    "documentation": null,
                    "fullyImplemented": true,
                    "id": 475,
                    "linearizedBaseContracts": [
                        475
                    ],
                    "name": "VirtLotto_3",
                    "nodeType": "ContractDefinition",
                    "nodes": [
                        {
                            "canonicalName": "VirtLotto_3.Ticket",
                            "id": 8,
                            "members": [
                                {
                                    "constant": false,
                                    "id": 3,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8,
                                    "src": "77:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "77:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 5,
                                    "name": "amount",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8,
                                    "src": "100:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "100:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7,
                                    "name": "number",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8,
                                    "src": "121:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 6,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "121:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "name": "Ticket",
                            "nodeType": "StructDefinition",
                            "scope": 475,
                            "src": "53:86:0",
                            "visibility": "public"
                        },
                        {
                            "canonicalName": "VirtLotto_3.TicketType",
                            "id": 17,
                            "members": [
                                {
                                    "constant": false,
                                    "id": 10,
                                    "name": "number",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17,
                                    "src": "173:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "173:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12,
                                    "name": "totalTickets",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17,
                                    "src": "194:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "194:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16,
                                    "name": "tickets",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17,
                                    "src": "221:31:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Ticket_$8_storage_$",
                                        "typeString": "mapping(uint256 => struct VirtLotto_3.Ticket)"
                                    },
                                    "typeName": {
                                        "id": 15,
                                        "keyType": {
                                            "id": 13,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "229:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Mapping",
                                        "src": "221:23:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Ticket_$8_storage_$",
                                            "typeString": "mapping(uint256 => struct VirtLotto_3.Ticket)"
                                        },
                                        "valueType": {
                                            "contractScope": null,
                                            "id": 14,
                                            "name": "Ticket",
                                            "nodeType": "UserDefinedTypeName",
                                            "referencedDeclaration": 8,
                                            "src": "237:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Ticket_$8_storage_ptr",
                                                "typeString": "struct VirtLotto_3.Ticket"
                                            }
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "name": "TicketType",
                            "nodeType": "StructDefinition",
                            "scope": 475,
                            "src": "145:114:0",
                            "visibility": "public"
                        },
                        {
                            "anonymous": false,
                            "documentation": null,
                            "id": 23,
                            "name": "Win",
                            "nodeType": "EventDefinition",
                            "parameters": {
                                "id": 22,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 19,
                                        "indexed": false,
                                        "name": "winner",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 23,
                                        "src": "284:14:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 18,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "284:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 21,
                                        "indexed": false,
                                        "name": "winningNumber",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 23,
                                        "src": "308:18:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 20,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "308:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "274:58:0"
                            },
                            "src": "265:68:0"
                        },
                        {
                            "constant": false,
                            "id": 25,
                            "name": "owner",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "339:13:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            },
                            "typeName": {
                                "id": 24,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "339:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "value": null,
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 28,
                            "name": "minimumBet",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "358:28:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 26,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "358:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "313030",
                                "id": 27,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "376:10:0",
                                "subdenomination": "finney",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_100000000000000000_by_1",
                                    "typeString": "int_const 100000000000000000"
                                },
                                "value": "100"
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 31,
                            "name": "totalBet",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "392:24:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 29,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "392:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 30,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "415:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                },
                                "value": "0"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 34,
                            "name": "numberOfBets",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "422:28:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 32,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "422:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 33,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "449:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                },
                                "value": "0"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 37,
                            "name": "maxAmountOfBets",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "456:31:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 35,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "456:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "35",
                                "id": 36,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "486:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_5_by_1",
                                    "typeString": "int_const 5"
                                },
                                "value": "5"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": true,
                            "id": 40,
                            "name": "maxAmountOfTickets",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "493:43:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 38,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "493:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "34",
                                "id": 39,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "535:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_4_by_1",
                                    "typeString": "int_const 4"
                                },
                                "value": "4"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": true,
                            "id": 43,
                            "name": "range",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "542:31:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 41,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "542:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "3130",
                                "id": 42,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "571:2:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                },
                                "value": "10"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 46,
                            "name": "players",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "579:17:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[]"
                            },
                            "typeName": {
                                "baseType": {
                                    "id": 44,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "579:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "id": 45,
                                "length": null,
                                "nodeType": "ArrayTypeName",
                                "src": "579:9:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                    "typeString": "address[]"
                                }
                            },
                            "value": null,
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 50,
                            "name": "ticketTypes",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "602:46:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TicketType_$17_storage_$",
                                "typeString": "mapping(uint256 => struct VirtLotto_3.TicketType)"
                            },
                            "typeName": {
                                "id": 49,
                                "keyType": {
                                    "id": 47,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "610:4:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "602:27:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TicketType_$17_storage_$",
                                    "typeString": "mapping(uint256 => struct VirtLotto_3.TicketType)"
                                },
                                "valueType": {
                                    "contractScope": null,
                                    "id": 48,
                                    "name": "TicketType",
                                    "nodeType": "UserDefinedTypeName",
                                    "referencedDeclaration": 17,
                                    "src": "618:10:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                        "typeString": "struct VirtLotto_3.TicketType"
                                    }
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 54,
                            "name": "playerTicketsCount",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "654:50:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "typeName": {
                                "id": 53,
                                "keyType": {
                                    "id": 51,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "662:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "654:24:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                },
                                "valueType": {
                                    "id": 52,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "673:4:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 64,
                                "nodeType": "Block",
                                "src": "730:56:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 60,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 57,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 490,
                                                            "src": "748:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 58,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "748:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 59,
                                                        "name": "owner",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 25,
                                                        "src": "762:5:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "748:19:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                ],
                                                "id": 56,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    493,
                                                    494
                                                ],
                                                "referencedDeclaration": 493,
                                                "src": "740:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                    "typeString": "function (bool) pure"
                                                }
                                            },
                                            "id": 61,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "740:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 62,
                                        "nodeType": "ExpressionStatement",
                                        "src": "740:28:0"
                                    },
                                    {
                                        "id": 63,
                                        "nodeType": "PlaceholderStatement",
                                        "src": "778:1:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 65,
                            "name": "onlyOwner",
                            "nodeType": "ModifierDefinition",
                            "parameters": {
                                "id": 55,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "730:0:0"
                            },
                            "src": "711:75:0",
                            "visibility": "internal"
                        },
                        {
                            "body": {
                                "id": 95,
                                "nodeType": "Block",
                                "src": "859:210:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 75,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 72,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25,
                                                "src": "869:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 73,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 490,
                                                    "src": "877:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 74,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "877:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "869:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 76,
                                        "nodeType": "ExpressionStatement",
                                        "src": "869:18:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 79,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 77,
                                                "name": "_minimumBet",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67,
                                                "src": "902:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 78,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "916:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "902:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 85,
                                        "nodeType": "IfStatement",
                                        "src": "898:70:0",
                                        "trueBody": {
                                            "id": 84,
                                            "nodeType": "Block",
                                            "src": "919:49:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 82,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 80,
                                                            "name": "minimumBet",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 28,
                                                            "src": "933:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 81,
                                                            "name": "_minimumBet",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 67,
                                                            "src": "946:11:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "933:24:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 83,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "933:24:0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 88,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 86,
                                                "name": "_maxAmountOfBets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 69,
                                                "src": "982:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 87,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1001:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "982:20:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 94,
                                        "nodeType": "IfStatement",
                                        "src": "978:85:0",
                                        "trueBody": {
                                            "id": 93,
                                            "nodeType": "Block",
                                            "src": "1004:59:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 91,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 89,
                                                            "name": "maxAmountOfBets",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 37,
                                                            "src": "1018:15:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 90,
                                                            "name": "_maxAmountOfBets",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 69,
                                                            "src": "1036:16:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "1018:34:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 92,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "1018:34:0"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 96,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [],
                            "name": "VirtLotto",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 70,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 67,
                                        "name": "_minimumBet",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 96,
                                        "src": "811:16:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 66,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "811:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 69,
                                        "name": "_maxAmountOfBets",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 96,
                                        "src": "829:21:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 68,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "829:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "810:41:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 71,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "859:0:0"
                            },
                            "scope": 475,
                            "src": "792:277:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 187,
                                "nodeType": "Block",
                                "src": "1123:678:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 108,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 104,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "id": 102,
                                                            "name": "number",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 98,
                                                            "src": "1141:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">=",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "hexValue": "31",
                                                            "id": 103,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "1151:1:0",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                "typeString": "int_const 1"
                                                            },
                                                            "value": "1"
                                                        },
                                                        "src": "1141:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "&&",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 107,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "id": 105,
                                                            "name": "number",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 98,
                                                            "src": "1156:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "<=",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "id": 106,
                                                            "name": "range",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 43,
                                                            "src": "1166:5:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "1156:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "1141:30:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                ],
                                                "id": 101,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    493,
                                                    494
                                                ],
                                                "referencedDeclaration": 493,
                                                "src": "1133:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                    "typeString": "function (bool) pure"
                                                }
                                            },
                                            "id": 109,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1133:39:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 110,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1133:39:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 115,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 112,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 490,
                                                            "src": "1190:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 113,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1190:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">=",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 114,
                                                        "name": "minimumBet",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 28,
                                                        "src": "1203:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1190:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                ],
                                                "id": 111,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    493,
                                                    494
                                                ],
                                                "referencedDeclaration": 493,
                                                "src": "1182:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                    "typeString": "function (bool) pure"
                                                }
                                            },
                                            "id": 116,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1182:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 117,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1182:32:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 120,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 490,
                                                                "src": "1240:3:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 121,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "1240:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        ],
                                                        "id": 119,
                                                        "name": "canPlay",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 202,
                                                        "src": "1232:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                                            "typeString": "function (address) view returns (bool)"
                                                        }
                                                    },
                                                    "id": 122,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1232:19:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                ],
                                                "id": 118,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    493,
                                                    494
                                                ],
                                                "referencedDeclaration": 493,
                                                "src": "1224:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                    "typeString": "function (bool) pure"
                                                }
                                            },
                                            "id": 123,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1224:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 124,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1224:28:0"
                                    },
                                    {
                                        "assignments": [
                                            126
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 126,
                                                "name": "ticketType",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 188,
                                                "src": "1263:29:0",
                                                "stateVariable": false,
                                                "storageLocation": "storage",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                    "typeString": "struct VirtLotto_3.TicketType"
                                                },
                                                "typeName": {
                                                    "contractScope": null,
                                                    "id": 125,
                                                    "name": "TicketType",
                                                    "nodeType": "UserDefinedTypeName",
                                                    "referencedDeclaration": 17,
                                                    "src": "1263:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                        "typeString": "struct VirtLotto_3.TicketType"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 130,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 127,
                                                "name": "ticketTypes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 50,
                                                "src": "1295:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TicketType_$17_storage_$",
                                                    "typeString": "mapping(uint256 => struct VirtLotto_3.TicketType storage ref)"
                                                }
                                            },
                                            "id": 129,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 128,
                                                "name": "number",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 98,
                                                "src": "1307:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "1295:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_TicketType_$17_storage",
                                                "typeString": "struct VirtLotto_3.TicketType storage ref"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "1263:51:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 144,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 131,
                                                        "name": "ticketType",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 126,
                                                        "src": "1325:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                            "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                        }
                                                    },
                                                    "id": 135,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "tickets",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 16,
                                                    "src": "1325:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Ticket_$8_storage_$",
                                                        "typeString": "mapping(uint256 => struct VirtLotto_3.Ticket storage ref)"
                                                    }
                                                },
                                                "id": 136,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 133,
                                                        "name": "ticketType",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 126,
                                                        "src": "1344:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                            "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                        }
                                                    },
                                                    "id": 134,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "totalTickets",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 12,
                                                    "src": "1344:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "IndexAccess",
                                                "src": "1325:43:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Ticket_$8_storage",
                                                    "typeString": "struct VirtLotto_3.Ticket storage ref"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 138,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 490,
                                                            "src": "1399:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 139,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1399:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 140,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 490,
                                                            "src": "1431:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 141,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1431:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 142,
                                                        "name": "number",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 98,
                                                        "src": "1462:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 137,
                                                    "name": "Ticket",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8,
                                                    "src": "1371:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_Ticket_$8_storage_ptr_$",
                                                        "typeString": "type(struct VirtLotto_3.Ticket storage pointer)"
                                                    }
                                                },
                                                "id": 143,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "names": [
                                                    "owner",
                                                    "amount",
                                                    "number"
                                                ],
                                                "nodeType": "FunctionCall",
                                                "src": "1371:112:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Ticket_$8_memory",
                                                    "typeString": "struct VirtLotto_3.Ticket memory"
                                                }
                                            },
                                            "src": "1325:158:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Ticket_$8_storage",
                                                "typeString": "struct VirtLotto_3.Ticket storage ref"
                                            }
                                        },
                                        "id": 145,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1325:158:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 149,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1493:25:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 146,
                                                    "name": "ticketType",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 126,
                                                    "src": "1493:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                        "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                    }
                                                },
                                                "id": 148,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "memberName": "totalTickets",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 12,
                                                "src": "1493:23:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 150,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1493:25:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 155,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1528:32:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 151,
                                                    "name": "playerTicketsCount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 54,
                                                    "src": "1528:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 154,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 152,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 490,
                                                        "src": "1547:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 153,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1547:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "IndexAccess",
                                                "src": "1528:30:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 156,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1528:32:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "id": 161,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "!",
                                            "prefix": true,
                                            "src": "1575:25:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 158,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 490,
                                                            "src": "1589:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 159,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1589:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "id": 157,
                                                    "name": "playerExists",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 423,
                                                    "src": "1576:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                                        "typeString": "function (address) view returns (bool)"
                                                    }
                                                },
                                                "id": 160,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1576:24:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 170,
                                        "nodeType": "IfStatement",
                                        "src": "1571:80:0",
                                        "trueBody": {
                                            "id": 169,
                                            "nodeType": "Block",
                                            "src": "1602:49:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 165,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 490,
                                                                    "src": "1629:3:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 166,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": null,
                                                                "src": "1629:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 162,
                                                                "name": "players",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 46,
                                                                "src": "1616:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                    "typeString": "address[] storage ref"
                                                                }
                                                            },
                                                            "id": 164,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "push",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "1616:12:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) returns (uint256)"
                                                            }
                                                        },
                                                        "id": 167,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1616:24:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 168,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "1616:24:0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 174,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 171,
                                                "name": "totalBet",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31,
                                                "src": "1661:8:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "+=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 172,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 490,
                                                    "src": "1673:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 173,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "1673:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "1661:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 175,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1661:21:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 177,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1692:14:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 176,
                                                "name": "numberOfBets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34,
                                                "src": "1692:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 178,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1692:14:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 181,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 179,
                                                "name": "numberOfBets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34,
                                                "src": "1721:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">=",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "id": 180,
                                                "name": "maxAmountOfBets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37,
                                                "src": "1737:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "1721:31:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 186,
                                        "nodeType": "IfStatement",
                                        "src": "1717:78:0",
                                        "trueBody": {
                                            "id": 185,
                                            "nodeType": "Block",
                                            "src": "1754:41:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "id": 182,
                                                            "name": "generateWinner",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 258,
                                                            "src": "1768:14:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                                "typeString": "function () returns (uint256,address[] memory)"
                                                            }
                                                        },
                                                        "id": 183,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1768:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                            "typeString": "tuple(uint256,address[] memory)"
                                                        }
                                                    },
                                                    "id": 184,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "1768:16:0"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 188,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [],
                            "name": "pickNumber",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 99,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 98,
                                        "name": "number",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 188,
                                        "src": "1095:11:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 97,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1095:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1094:13:0"
                            },
                            "payable": true,
                            "returnParameters": {
                                "id": 100,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1123:0:0"
                            },
                            "scope": 475,
                            "src": "1075:726:0",
                            "stateMutability": "payable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 201,
                                "nodeType": "Block",
                                "src": "1867:71:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 199,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 195,
                                                    "name": "playerTicketsCount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 54,
                                                    "src": "1884:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 197,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 196,
                                                    "name": "player",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 190,
                                                    "src": "1903:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1884:26:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "id": 198,
                                                "name": "maxAmountOfTickets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 40,
                                                "src": "1913:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "1884:47:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "functionReturnParameters": 194,
                                        "id": 200,
                                        "nodeType": "Return",
                                        "src": "1877:54:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 202,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": true,
                            "modifiers": [],
                            "name": "canPlay",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 191,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 190,
                                        "name": "player",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 202,
                                        "src": "1824:14:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 189,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1824:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1823:16:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 194,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 193,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 202,
                                        "src": "1861:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 192,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1861:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1860:6:0"
                            },
                            "scope": 475,
                            "src": "1807:131:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 231,
                                "nodeType": "Block",
                                "src": "2012:165:0",
                                "statements": [
                                    {
                                        "assignments": [],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 213,
                                                "name": "winningNumber",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 232,
                                                "src": "2022:18:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 212,
                                                    "name": "uint",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2022:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 214,
                                        "initialValue": null,
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2022:18:0"
                                    },
                                    {
                                        "assignments": [],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 218,
                                                "name": "winners",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 232,
                                                "src": "2050:24:0",
                                                "stateVariable": false,
                                                "storageLocation": "memory",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[]"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 216,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2050:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 217,
                                                    "length": null,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "2050:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                        "typeString": "address[]"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 219,
                                        "initialValue": null,
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2050:24:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 225,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "components": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 220,
                                                        "name": "winningNumber",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 213,
                                                        "src": "2086:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 221,
                                                        "name": "winners",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 218,
                                                        "src": "2101:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                            "typeString": "address[] memory"
                                                        }
                                                    }
                                                ],
                                                "id": 222,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "TupleExpression",
                                                "src": "2085:24:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "tuple(uint256,address[] memory)"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 223,
                                                    "name": "generateWinner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 258,
                                                    "src": "2112:14:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                        "typeString": "function () returns (uint256,address[] memory)"
                                                    }
                                                },
                                                "id": 224,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2112:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "tuple(uint256,address[] memory)"
                                                }
                                            },
                                            "src": "2085:43:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 226,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2085:43:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "components": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 227,
                                                    "name": "winningNumber",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 213,
                                                    "src": "2147:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "id": 228,
                                                    "name": "winners",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 218,
                                                    "src": "2162:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                        "typeString": "address[] memory"
                                                    }
                                                }
                                            ],
                                            "id": 229,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "2146:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                "typeString": "tuple(uint256,address[] memory)"
                                            }
                                        },
                                        "functionReturnParameters": 211,
                                        "id": 230,
                                        "nodeType": "Return",
                                        "src": "2139:31:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 232,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [
                                {
                                    "arguments": null,
                                    "id": 205,
                                    "modifierName": {
                                        "argumentTypes": null,
                                        "id": 204,
                                        "name": "onlyOwner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 65,
                                        "src": "1975:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_modifier$__$",
                                            "typeString": "modifier ()"
                                        }
                                    },
                                    "nodeType": "ModifierInvocation",
                                    "src": "1975:9:0"
                                }
                            ],
                            "name": "draw",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 203,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1957:2:0"
                            },
                            "payable": true,
                            "returnParameters": {
                                "id": 211,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 207,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 232,
                                        "src": "1995:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 206,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1995:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 210,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 232,
                                        "src": "2001:9:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[]"
                                        },
                                        "typeName": {
                                            "baseType": {
                                                "id": 208,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2001:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 209,
                                            "length": null,
                                            "nodeType": "ArrayTypeName",
                                            "src": "2001:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                "typeString": "address[]"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1994:17:0"
                            },
                            "scope": 475,
                            "src": "1944:233:0",
                            "stateMutability": "payable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 257,
                                "nodeType": "Block",
                                "src": "2243:170:0",
                                "statements": [
                                    {
                                        "assignments": [
                                            241
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 241,
                                                "name": "winningNumber",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 258,
                                                "src": "2253:18:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 240,
                                                    "name": "uint",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2253:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 244,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 242,
                                                "name": "generateRandomNumber",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 391,
                                                "src": "2274:20:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view returns (uint256)"
                                                }
                                            },
                                            "id": 243,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2274:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2253:43:0"
                                    },
                                    {
                                        "assignments": [
                                            248
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 248,
                                                "name": "winners",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 258,
                                                "src": "2306:24:0",
                                                "stateVariable": false,
                                                "storageLocation": "memory",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[]"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 246,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2306:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 247,
                                                    "length": null,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "2306:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                        "typeString": "address[]"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 252,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 250,
                                                    "name": "winningNumber",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 241,
                                                    "src": "2350:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 249,
                                                "name": "distributePrizes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 371,
                                                "src": "2333:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "function (uint256) returns (address[] memory)"
                                                }
                                            },
                                            "id": 251,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2333:31:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2306:58:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "components": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 253,
                                                    "name": "winningNumber",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 241,
                                                    "src": "2383:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "id": 254,
                                                    "name": "winners",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 248,
                                                    "src": "2398:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                        "typeString": "address[] memory"
                                                    }
                                                }
                                            ],
                                            "id": 255,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "2382:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                "typeString": "tuple(uint256,address[] memory)"
                                            }
                                        },
                                        "functionReturnParameters": 239,
                                        "id": 256,
                                        "nodeType": "Return",
                                        "src": "2375:31:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 258,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [],
                            "name": "generateWinner",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 233,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "2206:2:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 239,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 235,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 258,
                                        "src": "2226:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 234,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2226:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 238,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 258,
                                        "src": "2232:9:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[]"
                                        },
                                        "typeName": {
                                            "baseType": {
                                                "id": 236,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2232:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 237,
                                            "length": null,
                                            "nodeType": "ArrayTypeName",
                                            "src": "2232:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                "typeString": "address[]"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2225:17:0"
                            },
                            "scope": 475,
                            "src": "2183:230:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "private"
                        },
                        {
                            "body": {
                                "id": 370,
                                "nodeType": "Block",
                                "src": "2493:787:0",
                                "statements": [
                                    {
                                        "assignments": [
                                            267
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 267,
                                                "name": "ticketType",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 371,
                                                "src": "2503:29:0",
                                                "stateVariable": false,
                                                "storageLocation": "storage",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                    "typeString": "struct VirtLotto_3.TicketType"
                                                },
                                                "typeName": {
                                                    "contractScope": null,
                                                    "id": 266,
                                                    "name": "TicketType",
                                                    "nodeType": "UserDefinedTypeName",
                                                    "referencedDeclaration": 17,
                                                    "src": "2503:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                        "typeString": "struct VirtLotto_3.TicketType"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 271,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 268,
                                                "name": "ticketTypes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 50,
                                                "src": "2535:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TicketType_$17_storage_$",
                                                    "typeString": "mapping(uint256 => struct VirtLotto_3.TicketType storage ref)"
                                                }
                                            },
                                            "id": 270,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 269,
                                                "name": "winningNumber",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 260,
                                                "src": "2547:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "2535:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_TicketType_$17_storage",
                                                "typeString": "struct VirtLotto_3.TicketType storage ref"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2503:58:0"
                                    },
                                    {
                                        "assignments": [
                                            275
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 275,
                                                "name": "winners",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 371,
                                                "src": "2571:24:0",
                                                "stateVariable": false,
                                                "storageLocation": "memory",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[]"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 273,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2571:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 274,
                                                    "length": null,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "2571:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                        "typeString": "address[]"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 282,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 279,
                                                        "name": "ticketType",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 267,
                                                        "src": "2612:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                            "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                        }
                                                    },
                                                    "id": 280,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "totalTickets",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 12,
                                                    "src": "2612:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 278,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "NewExpression",
                                                "src": "2598:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                                                    "typeString": "function (uint256) pure returns (address[] memory)"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 276,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2602:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 277,
                                                    "length": null,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "2602:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                        "typeString": "address[]"
                                                    }
                                                }
                                            },
                                            "id": 281,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2598:38:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2571:65:0"
                                    },
                                    {
                                        "body": {
                                            "id": 313,
                                            "nodeType": "Block",
                                            "src": "2698:147:0",
                                            "statements": [
                                                {
                                                    "assignments": [
                                                        295
                                                    ],
                                                    "declarations": [
                                                        {
                                                            "constant": false,
                                                            "id": 295,
                                                            "name": "winner",
                                                            "nodeType": "VariableDeclaration",
                                                            "scope": 371,
                                                            "src": "2712:14:0",
                                                            "stateVariable": false,
                                                            "storageLocation": "default",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "typeName": {
                                                                "id": 294,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2712:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "value": null,
                                                            "visibility": "internal"
                                                        }
                                                    ],
                                                    "id": 301,
                                                    "initialValue": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 296,
                                                                    "name": "ticketType",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 267,
                                                                    "src": "2729:10:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                                        "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                                    }
                                                                },
                                                                "id": 297,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "tickets",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 16,
                                                                "src": "2729:18:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Ticket_$8_storage_$",
                                                                    "typeString": "mapping(uint256 => struct VirtLotto_3.Ticket storage ref)"
                                                                }
                                                            },
                                                            "id": 299,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 298,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 284,
                                                                "src": "2748:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "2729:21:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Ticket_$8_storage",
                                                                "typeString": "struct VirtLotto_3.Ticket storage ref"
                                                            }
                                                        },
                                                        "id": 300,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "owner",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 3,
                                                        "src": "2729:27:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "VariableDeclarationStatement",
                                                    "src": "2712:44:0"
                                                },
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 306,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 302,
                                                                "name": "winners",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 275,
                                                                "src": "2770:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                    "typeString": "address[] memory"
                                                                }
                                                            },
                                                            "id": 304,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 303,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 284,
                                                                "src": "2778:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "nodeType": "IndexAccess",
                                                            "src": "2770:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 305,
                                                            "name": "winner",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 295,
                                                            "src": "2783:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "2770:19:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 307,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "2770:19:0"
                                                },
                                                {
                                                    "eventCall": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "id": 309,
                                                                "name": "winner",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 295,
                                                                "src": "2812:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "argumentTypes": null,
                                                                "id": 310,
                                                                "name": "winningNumber",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 260,
                                                                "src": "2820:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "id": 308,
                                                            "name": "Win",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 23,
                                                            "src": "2808:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                                "typeString": "function (address,uint256)"
                                                            }
                                                        },
                                                        "id": 311,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2808:26:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 312,
                                                    "nodeType": "EmitStatement",
                                                    "src": "2803:31:0"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 290,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 287,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 284,
                                                "src": "2664:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 288,
                                                    "name": "ticketType",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 267,
                                                    "src": "2668:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                        "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                    }
                                                },
                                                "id": 289,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "totalTickets",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 12,
                                                "src": "2668:23:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "2664:27:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 314,
                                        "initializationExpression": {
                                            "assignments": [
                                                284
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 284,
                                                    "name": "i",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 371,
                                                    "src": "2652:6:0",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 283,
                                                        "name": "uint",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2652:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "value": null,
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 286,
                                            "initialValue": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 285,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2661:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "2652:10:0"
                                        },
                                        "loopExpression": {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 292,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "++",
                                                "prefix": false,
                                                "src": "2693:3:0",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "id": 291,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 284,
                                                    "src": "2693:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 293,
                                            "nodeType": "ExpressionStatement",
                                            "src": "2693:3:0"
                                        },
                                        "nodeType": "ForStatement",
                                        "src": "2647:198:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 318,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 315,
                                                    "name": "winners",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 275,
                                                    "src": "2859:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                        "typeString": "address[] memory"
                                                    }
                                                },
                                                "id": 316,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "2859:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 317,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2876:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "2859:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": {
                                            "id": 366,
                                            "nodeType": "Block",
                                            "src": "3213:36:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "id": 363,
                                                            "name": "resetGame",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 474,
                                                            "src": "3227:9:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                                "typeString": "function ()"
                                                            }
                                                        },
                                                        "id": 364,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3227:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 365,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "3227:11:0"
                                                }
                                            ]
                                        },
                                        "id": 367,
                                        "nodeType": "IfStatement",
                                        "src": "2855:394:0",
                                        "trueBody": {
                                            "id": 362,
                                            "nodeType": "Block",
                                            "src": "2879:328:0",
                                            "statements": [
                                                {
                                                    "assignments": [
                                                        320
                                                    ],
                                                    "declarations": [
                                                        {
                                                            "constant": false,
                                                            "id": 320,
                                                            "name": "winnerEtherAmount",
                                                            "nodeType": "VariableDeclaration",
                                                            "scope": 371,
                                                            "src": "2893:22:0",
                                                            "stateVariable": false,
                                                            "storageLocation": "default",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "typeName": {
                                                                "id": 319,
                                                                "name": "uint",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2893:4:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "value": null,
                                                            "visibility": "internal"
                                                        }
                                                    ],
                                                    "id": 325,
                                                    "initialValue": {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 324,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "id": 321,
                                                            "name": "totalBet",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31,
                                                            "src": "2918:8:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "/",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 322,
                                                                "name": "winners",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 275,
                                                                "src": "2929:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                    "typeString": "address[] memory"
                                                                }
                                                            },
                                                            "id": 323,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "2929:14:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2918:25:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "VariableDeclarationStatement",
                                                    "src": "2893:50:0"
                                                },
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "id": 326,
                                                            "name": "resetGame",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 474,
                                                            "src": "2958:9:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                                "typeString": "function ()"
                                                            }
                                                        },
                                                        "id": 327,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2958:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 328,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "2958:11:0"
                                                },
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 331,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 329,
                                                            "name": "totalBet",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31,
                                                            "src": "2983:8:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 330,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "2994:1:0",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "2983:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 332,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "2983:12:0"
                                                },
                                                {
                                                    "body": {
                                                        "id": 360,
                                                        "nodeType": "Block",
                                                        "src": "3056:141:0",
                                                        "statements": [
                                                            {
                                                                "condition": {
                                                                    "argumentTypes": null,
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    "id": 350,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "leftExpression": {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 344,
                                                                            "name": "winners",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 275,
                                                                            "src": "3078:7:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                                "typeString": "address[] memory"
                                                                            }
                                                                        },
                                                                        "id": 346,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 345,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 284,
                                                                            "src": "3086:1:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "IndexAccess",
                                                                        "src": "3078:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    },
                                                                    "nodeType": "BinaryOperation",
                                                                    "operator": "!=",
                                                                    "rightExpression": {
                                                                        "argumentTypes": null,
                                                                        "arguments": [
                                                                            {
                                                                                "argumentTypes": null,
                                                                                "hexValue": "30",
                                                                                "id": 348,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "3100:1:0",
                                                                                "subdenomination": null,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                },
                                                                                "value": "0"
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                }
                                                                            ],
                                                                            "id": 347,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "3092:7:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                                "typeString": "type(address)"
                                                                            },
                                                                            "typeName": "address"
                                                                        },
                                                                        "id": 349,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "3092:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    },
                                                                    "src": "3078:24:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    }
                                                                },
                                                                "falseBody": null,
                                                                "id": 359,
                                                                "nodeType": "IfStatement",
                                                                "src": "3074:109:0",
                                                                "trueBody": {
                                                                    "id": 358,
                                                                    "nodeType": "Block",
                                                                    "src": "3104:79:0",
                                                                    "statements": [
                                                                        {
                                                                            "expression": {
                                                                                "argumentTypes": null,
                                                                                "arguments": [
                                                                                    {
                                                                                        "argumentTypes": null,
                                                                                        "id": 355,
                                                                                        "name": "winnerEtherAmount",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 320,
                                                                                        "src": "3146:17:0",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "expression": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    ],
                                                                                    "expression": {
                                                                                        "argumentTypes": null,
                                                                                        "baseExpression": {
                                                                                            "argumentTypes": null,
                                                                                            "id": 351,
                                                                                            "name": "winners",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 275,
                                                                                            "src": "3126:7:0",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                                                "typeString": "address[] memory"
                                                                                            }
                                                                                        },
                                                                                        "id": 353,
                                                                                        "indexExpression": {
                                                                                            "argumentTypes": null,
                                                                                            "id": 352,
                                                                                            "name": "i",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 284,
                                                                                            "src": "3134:1:0",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_uint256",
                                                                                                "typeString": "uint256"
                                                                                            }
                                                                                        },
                                                                                        "isConstant": false,
                                                                                        "isLValue": true,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "IndexAccess",
                                                                                        "src": "3126:10:0",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_address",
                                                                                            "typeString": "address"
                                                                                        }
                                                                                    },
                                                                                    "id": 354,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "memberName": "transfer",
                                                                                    "nodeType": "MemberAccess",
                                                                                    "referencedDeclaration": null,
                                                                                    "src": "3126:19:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                                                                        "typeString": "function (uint256)"
                                                                                    }
                                                                                },
                                                                                "id": 356,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "3126:38:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_tuple$__$",
                                                                                    "typeString": "tuple()"
                                                                                }
                                                                            },
                                                                            "id": 357,
                                                                            "nodeType": "ExpressionStatement",
                                                                            "src": "3126:38:0"
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "condition": {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 340,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "id": 337,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 284,
                                                            "src": "3022:1:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "<",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 338,
                                                                "name": "ticketType",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 267,
                                                                "src": "3026:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                                    "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                                }
                                                            },
                                                            "id": 339,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "totalTickets",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 12,
                                                            "src": "3026:23:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "3022:27:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "id": 361,
                                                    "initializationExpression": {
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 335,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftHandSide": {
                                                                "argumentTypes": null,
                                                                "id": 333,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 284,
                                                                "src": "3015:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "Assignment",
                                                            "operator": "=",
                                                            "rightHandSide": {
                                                                "argumentTypes": null,
                                                                "hexValue": "30",
                                                                "id": 334,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3019:1:0",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                },
                                                                "value": "0"
                                                            },
                                                            "src": "3015:5:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 336,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "3015:5:0"
                                                    },
                                                    "loopExpression": {
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 342,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "UnaryOperation",
                                                            "operator": "++",
                                                            "prefix": false,
                                                            "src": "3051:3:0",
                                                            "subExpression": {
                                                                "argumentTypes": null,
                                                                "id": 341,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 284,
                                                                "src": "3051:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 343,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "3051:3:0"
                                                    },
                                                    "nodeType": "ForStatement",
                                                    "src": "3010:187:0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 368,
                                            "name": "winners",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 275,
                                            "src": "3266:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "functionReturnParameters": 265,
                                        "id": 369,
                                        "nodeType": "Return",
                                        "src": "3259:14:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 371,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [],
                            "name": "distributePrizes",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 261,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 260,
                                        "name": "winningNumber",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 371,
                                        "src": "2445:18:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 259,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2445:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2444:20:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 265,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 264,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 371,
                                        "src": "2482:9:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[]"
                                        },
                                        "typeName": {
                                            "baseType": {
                                                "id": 262,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2482:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 263,
                                            "length": null,
                                            "nodeType": "ArrayTypeName",
                                            "src": "2482:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                "typeString": "address[]"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2481:11:0"
                            },
                            "scope": 475,
                            "src": "2419:861:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "private"
                        },
                        {
                            "body": {
                                "id": 390,
                                "nodeType": "Block",
                                "src": "3346:88:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 388,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "components": [
                                                    {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 385,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "arguments": [
                                                                {
                                                                    "argumentTypes": null,
                                                                    "arguments": [
                                                                        {
                                                                            "argumentTypes": null,
                                                                            "expression": {
                                                                                "argumentTypes": null,
                                                                                "id": 378,
                                                                                "name": "block",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 480,
                                                                                "src": "3379:5:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_block",
                                                                                    "typeString": "block"
                                                                                }
                                                                            },
                                                                            "id": 379,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "memberName": "timestamp",
                                                                            "nodeType": "MemberAccess",
                                                                            "referencedDeclaration": null,
                                                                            "src": "3379:15:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        {
                                                                            "argumentTypes": null,
                                                                            "expression": {
                                                                                "argumentTypes": null,
                                                                                "id": 380,
                                                                                "name": "block",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 480,
                                                                                "src": "3396:5:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_block",
                                                                                    "typeString": "block"
                                                                                }
                                                                            },
                                                                            "id": 381,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "memberName": "difficulty",
                                                                            "nodeType": "MemberAccess",
                                                                            "referencedDeclaration": null,
                                                                            "src": "3396:16:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        ],
                                                                        "id": 377,
                                                                        "name": "keccak256",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 484,
                                                                        "src": "3369:9:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                                                            "typeString": "function () pure returns (bytes32)"
                                                                        }
                                                                    },
                                                                    "id": 382,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3369:44:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                ],
                                                                "id": 376,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "3364:4:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": "uint"
                                                            },
                                                            "id": 383,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3364:50:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "%",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "id": 384,
                                                            "name": "range",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 43,
                                                            "src": "3417:5:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "3364:58:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 386,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "3363:60:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "31",
                                                "id": 387,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3426:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "3363:64:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 375,
                                        "id": 389,
                                        "nodeType": "Return",
                                        "src": "3356:71:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 391,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": true,
                            "modifiers": [],
                            "name": "generateRandomNumber",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 372,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "3315:2:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 375,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 374,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 391,
                                        "src": "3340:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 373,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3340:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "3339:6:0"
                            },
                            "scope": 475,
                            "src": "3286:148:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "private"
                        },
                        {
                            "body": {
                                "id": 422,
                                "nodeType": "Block",
                                "src": "3506:175:0",
                                "statements": [
                                    {
                                        "body": {
                                            "id": 418,
                                            "nodeType": "Block",
                                            "src": "3558:94:0",
                                            "statements": [
                                                {
                                                    "condition": {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 413,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 409,
                                                                "name": "players",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 46,
                                                                "src": "3576:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                    "typeString": "address[] storage ref"
                                                                }
                                                            },
                                                            "id": 411,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 410,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 399,
                                                                "src": "3584:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "3576:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "id": 412,
                                                            "name": "player",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 393,
                                                            "src": "3590:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "3576:20:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "falseBody": null,
                                                    "id": 417,
                                                    "nodeType": "IfStatement",
                                                    "src": "3572:70:0",
                                                    "trueBody": {
                                                        "id": 416,
                                                        "nodeType": "Block",
                                                        "src": "3598:44:0",
                                                        "statements": [
                                                            {
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "hexValue": "74727565",
                                                                    "id": 414,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "bool",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3623:4:0",
                                                                    "subdenomination": null,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    },
                                                                    "value": "true"
                                                                },
                                                                "functionReturnParameters": 397,
                                                                "id": 415,
                                                                "nodeType": "Return",
                                                                "src": "3616:11:0"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 405,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 402,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 399,
                                                "src": "3533:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 403,
                                                    "name": "players",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 46,
                                                    "src": "3537:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 404,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3537:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3533:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 419,
                                        "initializationExpression": {
                                            "assignments": [
                                                399
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 399,
                                                    "name": "i",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 423,
                                                    "src": "3521:6:0",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 398,
                                                        "name": "uint",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3521:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "value": null,
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 401,
                                            "initialValue": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 400,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3530:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "3521:10:0"
                                        },
                                        "loopExpression": {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 407,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "++",
                                                "prefix": false,
                                                "src": "3553:3:0",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "id": 406,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 399,
                                                    "src": "3553:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 408,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3553:3:0"
                                        },
                                        "nodeType": "ForStatement",
                                        "src": "3516:136:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "hexValue": "66616c7365",
                                            "id": 420,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3669:5:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "functionReturnParameters": 397,
                                        "id": 421,
                                        "nodeType": "Return",
                                        "src": "3662:12:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 423,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": true,
                            "modifiers": [],
                            "name": "playerExists",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 394,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 393,
                                        "name": "player",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 423,
                                        "src": "3462:14:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 392,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3462:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "3461:16:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 397,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 396,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 423,
                                        "src": "3500:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 395,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3500:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "3499:6:0"
                            },
                            "scope": 475,
                            "src": "3440:241:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "private"
                        },
                        {
                            "body": {
                                "id": 473,
                                "nodeType": "Block",
                                "src": "3716:260:0",
                                "statements": [
                                    {
                                        "body": {
                                            "id": 441,
                                            "nodeType": "Block",
                                            "src": "3760:46:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 439,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "UnaryOperation",
                                                        "operator": "delete",
                                                        "prefix": true,
                                                        "src": "3774:21:0",
                                                        "subExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 436,
                                                                "name": "ticketTypes",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 50,
                                                                "src": "3781:11:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TicketType_$17_storage_$",
                                                                    "typeString": "mapping(uint256 => struct VirtLotto_3.TicketType storage ref)"
                                                                }
                                                            },
                                                            "id": 438,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 437,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 427,
                                                                "src": "3793:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "nodeType": "IndexAccess",
                                                            "src": "3781:14:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_TicketType_$17_storage",
                                                                "typeString": "struct VirtLotto_3.TicketType storage ref"
                                                            }
                                                        },
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 440,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "3774:21:0"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 432,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 430,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 427,
                                                "src": "3743:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<=",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "id": 431,
                                                "name": "range",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 43,
                                                "src": "3748:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3743:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 442,
                                        "initializationExpression": {
                                            "assignments": [
                                                427
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 427,
                                                    "name": "i",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 474,
                                                    "src": "3731:6:0",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 426,
                                                        "name": "uint",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3731:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "value": null,
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 429,
                                            "initialValue": {
                                                "argumentTypes": null,
                                                "hexValue": "31",
                                                "id": 428,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3740:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "3731:10:0"
                                        },
                                        "loopExpression": {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 434,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "++",
                                                "prefix": false,
                                                "src": "3755:3:0",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "id": 433,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 427,
                                                    "src": "3755:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 435,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3755:3:0"
                                        },
                                        "nodeType": "ForStatement",
                                        "src": "3726:80:0"
                                    },
                                    {
                                        "body": {
                                            "id": 461,
                                            "nodeType": "Block",
                                            "src": "3853:62:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 459,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "UnaryOperation",
                                                        "operator": "delete",
                                                        "prefix": true,
                                                        "src": "3867:37:0",
                                                        "subExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 454,
                                                                "name": "playerTicketsCount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 54,
                                                                "src": "3874:18:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                    "typeString": "mapping(address => uint256)"
                                                                }
                                                            },
                                                            "id": 458,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 455,
                                                                    "name": "players",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 46,
                                                                    "src": "3893:7:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                        "typeString": "address[] storage ref"
                                                                    }
                                                                },
                                                                "id": 457,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 456,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 427,
                                                                    "src": "3901:1:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "3893:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "nodeType": "IndexAccess",
                                                            "src": "3874:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 460,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "3867:37:0"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 450,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 447,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 427,
                                                "src": "3828:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 448,
                                                    "name": "players",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 46,
                                                    "src": "3832:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 449,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3832:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3828:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 462,
                                        "initializationExpression": {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 445,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "argumentTypes": null,
                                                    "id": 443,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 427,
                                                    "src": "3821:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 444,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3825:1:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3821:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 446,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3821:5:0"
                                        },
                                        "loopExpression": {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 452,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "++",
                                                "prefix": false,
                                                "src": "3848:3:0",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "id": 451,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 427,
                                                    "src": "3848:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 453,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3848:3:0"
                                        },
                                        "nodeType": "ForStatement",
                                        "src": "3816:99:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 467,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 463,
                                                    "name": "players",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 46,
                                                    "src": "3925:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 465,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3925:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 466,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3942:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3925:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 468,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3925:18:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 471,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 469,
                                                "name": "numberOfBets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34,
                                                "src": "3953:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 470,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3968:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3953:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 472,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3953:16:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 474,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [],
                            "name": "resetGame",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 424,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "3705:2:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 425,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "3716:0:0"
                            },
                            "scope": 475,
                            "src": "3687:289:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "private"
                        }
                    ],
                    "scope": 476,
                    "src": "26:3952:0"
                }
            ],
            "src": "0:3979:0"
        },
        "legacyAST": {
            "absolutePath": "/Users/tecsynt_den/bootstrap-js/manual/firebase/folder_4_truffle/contracts/Lotto.sol",
            "exportedSymbols": {
                "VirtLotto_3": [
                    475
                ]
            },
            "id": 476,
            "nodeType": "SourceUnit",
            "nodes": [
                {
                    "id": 1,
                    "literals": [
                        "solidity",
                        "^",
                        "0.4",
                        ".20"
                    ],
                    "nodeType": "PragmaDirective",
                    "src": "0:24:0"
                },
                {
                    "baseContracts": [],
                    "contractDependencies": [],
                    "contractKind": "contract",
                    "documentation": null,
                    "fullyImplemented": true,
                    "id": 475,
                    "linearizedBaseContracts": [
                        475
                    ],
                    "name": "VirtLotto_3",
                    "nodeType": "ContractDefinition",
                    "nodes": [
                        {
                            "canonicalName": "VirtLotto_3.Ticket",
                            "id": 8,
                            "members": [
                                {
                                    "constant": false,
                                    "id": 3,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8,
                                    "src": "77:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "77:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 5,
                                    "name": "amount",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8,
                                    "src": "100:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 4,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "100:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7,
                                    "name": "number",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8,
                                    "src": "121:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 6,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "121:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "name": "Ticket",
                            "nodeType": "StructDefinition",
                            "scope": 475,
                            "src": "53:86:0",
                            "visibility": "public"
                        },
                        {
                            "canonicalName": "VirtLotto_3.TicketType",
                            "id": 17,
                            "members": [
                                {
                                    "constant": false,
                                    "id": 10,
                                    "name": "number",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17,
                                    "src": "173:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "173:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12,
                                    "name": "totalTickets",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17,
                                    "src": "194:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "194:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16,
                                    "name": "tickets",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17,
                                    "src": "221:31:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Ticket_$8_storage_$",
                                        "typeString": "mapping(uint256 => struct VirtLotto_3.Ticket)"
                                    },
                                    "typeName": {
                                        "id": 15,
                                        "keyType": {
                                            "id": 13,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "229:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Mapping",
                                        "src": "221:23:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Ticket_$8_storage_$",
                                            "typeString": "mapping(uint256 => struct VirtLotto_3.Ticket)"
                                        },
                                        "valueType": {
                                            "contractScope": null,
                                            "id": 14,
                                            "name": "Ticket",
                                            "nodeType": "UserDefinedTypeName",
                                            "referencedDeclaration": 8,
                                            "src": "237:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Ticket_$8_storage_ptr",
                                                "typeString": "struct VirtLotto_3.Ticket"
                                            }
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "name": "TicketType",
                            "nodeType": "StructDefinition",
                            "scope": 475,
                            "src": "145:114:0",
                            "visibility": "public"
                        },
                        {
                            "anonymous": false,
                            "documentation": null,
                            "id": 23,
                            "name": "Win",
                            "nodeType": "EventDefinition",
                            "parameters": {
                                "id": 22,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 19,
                                        "indexed": false,
                                        "name": "winner",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 23,
                                        "src": "284:14:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 18,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "284:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 21,
                                        "indexed": false,
                                        "name": "winningNumber",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 23,
                                        "src": "308:18:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 20,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "308:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "274:58:0"
                            },
                            "src": "265:68:0"
                        },
                        {
                            "constant": false,
                            "id": 25,
                            "name": "owner",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "339:13:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            },
                            "typeName": {
                                "id": 24,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "339:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "value": null,
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 28,
                            "name": "minimumBet",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "358:28:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 26,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "358:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "313030",
                                "id": 27,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "376:10:0",
                                "subdenomination": "finney",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_100000000000000000_by_1",
                                    "typeString": "int_const 100000000000000000"
                                },
                                "value": "100"
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 31,
                            "name": "totalBet",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "392:24:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 29,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "392:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 30,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "415:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                },
                                "value": "0"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 34,
                            "name": "numberOfBets",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "422:28:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 32,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "422:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 33,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "449:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                },
                                "value": "0"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 37,
                            "name": "maxAmountOfBets",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "456:31:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 35,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "456:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "35",
                                "id": 36,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "486:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_5_by_1",
                                    "typeString": "int_const 5"
                                },
                                "value": "5"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": true,
                            "id": 40,
                            "name": "maxAmountOfTickets",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "493:43:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 38,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "493:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "34",
                                "id": 39,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "535:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_4_by_1",
                                    "typeString": "int_const 4"
                                },
                                "value": "4"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": true,
                            "id": 43,
                            "name": "range",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "542:31:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 41,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "542:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "3130",
                                "id": 42,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "571:2:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                },
                                "value": "10"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 46,
                            "name": "players",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "579:17:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[]"
                            },
                            "typeName": {
                                "baseType": {
                                    "id": 44,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "579:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "id": 45,
                                "length": null,
                                "nodeType": "ArrayTypeName",
                                "src": "579:9:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                    "typeString": "address[]"
                                }
                            },
                            "value": null,
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 50,
                            "name": "ticketTypes",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "602:46:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TicketType_$17_storage_$",
                                "typeString": "mapping(uint256 => struct VirtLotto_3.TicketType)"
                            },
                            "typeName": {
                                "id": 49,
                                "keyType": {
                                    "id": 47,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "610:4:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "602:27:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TicketType_$17_storage_$",
                                    "typeString": "mapping(uint256 => struct VirtLotto_3.TicketType)"
                                },
                                "valueType": {
                                    "contractScope": null,
                                    "id": 48,
                                    "name": "TicketType",
                                    "nodeType": "UserDefinedTypeName",
                                    "referencedDeclaration": 17,
                                    "src": "618:10:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                        "typeString": "struct VirtLotto_3.TicketType"
                                    }
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 54,
                            "name": "playerTicketsCount",
                            "nodeType": "VariableDeclaration",
                            "scope": 475,
                            "src": "654:50:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "typeName": {
                                "id": 53,
                                "keyType": {
                                    "id": 51,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "662:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "654:24:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                },
                                "valueType": {
                                    "id": 52,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "673:4:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 64,
                                "nodeType": "Block",
                                "src": "730:56:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 60,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 57,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 490,
                                                            "src": "748:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 58,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "748:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 59,
                                                        "name": "owner",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 25,
                                                        "src": "762:5:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "748:19:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                ],
                                                "id": 56,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    493,
                                                    494
                                                ],
                                                "referencedDeclaration": 493,
                                                "src": "740:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                    "typeString": "function (bool) pure"
                                                }
                                            },
                                            "id": 61,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "740:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 62,
                                        "nodeType": "ExpressionStatement",
                                        "src": "740:28:0"
                                    },
                                    {
                                        "id": 63,
                                        "nodeType": "PlaceholderStatement",
                                        "src": "778:1:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 65,
                            "name": "onlyOwner",
                            "nodeType": "ModifierDefinition",
                            "parameters": {
                                "id": 55,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "730:0:0"
                            },
                            "src": "711:75:0",
                            "visibility": "internal"
                        },
                        {
                            "body": {
                                "id": 95,
                                "nodeType": "Block",
                                "src": "859:210:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 75,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 72,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25,
                                                "src": "869:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 73,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 490,
                                                    "src": "877:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 74,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "877:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "869:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 76,
                                        "nodeType": "ExpressionStatement",
                                        "src": "869:18:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 79,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 77,
                                                "name": "_minimumBet",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67,
                                                "src": "902:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 78,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "916:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "902:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 85,
                                        "nodeType": "IfStatement",
                                        "src": "898:70:0",
                                        "trueBody": {
                                            "id": 84,
                                            "nodeType": "Block",
                                            "src": "919:49:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 82,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 80,
                                                            "name": "minimumBet",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 28,
                                                            "src": "933:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 81,
                                                            "name": "_minimumBet",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 67,
                                                            "src": "946:11:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "933:24:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 83,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "933:24:0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 88,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 86,
                                                "name": "_maxAmountOfBets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 69,
                                                "src": "982:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 87,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1001:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "982:20:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 94,
                                        "nodeType": "IfStatement",
                                        "src": "978:85:0",
                                        "trueBody": {
                                            "id": 93,
                                            "nodeType": "Block",
                                            "src": "1004:59:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 91,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 89,
                                                            "name": "maxAmountOfBets",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 37,
                                                            "src": "1018:15:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 90,
                                                            "name": "_maxAmountOfBets",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 69,
                                                            "src": "1036:16:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "1018:34:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 92,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "1018:34:0"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 96,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [],
                            "name": "VirtLotto",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 70,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 67,
                                        "name": "_minimumBet",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 96,
                                        "src": "811:16:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 66,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "811:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 69,
                                        "name": "_maxAmountOfBets",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 96,
                                        "src": "829:21:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 68,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "829:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "810:41:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 71,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "859:0:0"
                            },
                            "scope": 475,
                            "src": "792:277:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 187,
                                "nodeType": "Block",
                                "src": "1123:678:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 108,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 104,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "id": 102,
                                                            "name": "number",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 98,
                                                            "src": "1141:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">=",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "hexValue": "31",
                                                            "id": 103,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "1151:1:0",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                "typeString": "int_const 1"
                                                            },
                                                            "value": "1"
                                                        },
                                                        "src": "1141:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "&&",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 107,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "id": 105,
                                                            "name": "number",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 98,
                                                            "src": "1156:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "<=",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "id": 106,
                                                            "name": "range",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 43,
                                                            "src": "1166:5:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "1156:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "1141:30:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                ],
                                                "id": 101,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    493,
                                                    494
                                                ],
                                                "referencedDeclaration": 493,
                                                "src": "1133:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                    "typeString": "function (bool) pure"
                                                }
                                            },
                                            "id": 109,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1133:39:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 110,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1133:39:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 115,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 112,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 490,
                                                            "src": "1190:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 113,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1190:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">=",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 114,
                                                        "name": "minimumBet",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 28,
                                                        "src": "1203:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1190:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                ],
                                                "id": 111,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    493,
                                                    494
                                                ],
                                                "referencedDeclaration": 493,
                                                "src": "1182:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                    "typeString": "function (bool) pure"
                                                }
                                            },
                                            "id": 116,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1182:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 117,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1182:32:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 120,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 490,
                                                                "src": "1240:3:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 121,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "1240:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        ],
                                                        "id": 119,
                                                        "name": "canPlay",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 202,
                                                        "src": "1232:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                                            "typeString": "function (address) view returns (bool)"
                                                        }
                                                    },
                                                    "id": 122,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1232:19:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                ],
                                                "id": 118,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    493,
                                                    494
                                                ],
                                                "referencedDeclaration": 493,
                                                "src": "1224:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                    "typeString": "function (bool) pure"
                                                }
                                            },
                                            "id": 123,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1224:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 124,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1224:28:0"
                                    },
                                    {
                                        "assignments": [
                                            126
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 126,
                                                "name": "ticketType",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 188,
                                                "src": "1263:29:0",
                                                "stateVariable": false,
                                                "storageLocation": "storage",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                    "typeString": "struct VirtLotto_3.TicketType"
                                                },
                                                "typeName": {
                                                    "contractScope": null,
                                                    "id": 125,
                                                    "name": "TicketType",
                                                    "nodeType": "UserDefinedTypeName",
                                                    "referencedDeclaration": 17,
                                                    "src": "1263:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                        "typeString": "struct VirtLotto_3.TicketType"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 130,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 127,
                                                "name": "ticketTypes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 50,
                                                "src": "1295:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TicketType_$17_storage_$",
                                                    "typeString": "mapping(uint256 => struct VirtLotto_3.TicketType storage ref)"
                                                }
                                            },
                                            "id": 129,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 128,
                                                "name": "number",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 98,
                                                "src": "1307:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "1295:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_TicketType_$17_storage",
                                                "typeString": "struct VirtLotto_3.TicketType storage ref"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "1263:51:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 144,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 131,
                                                        "name": "ticketType",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 126,
                                                        "src": "1325:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                            "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                        }
                                                    },
                                                    "id": 135,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "tickets",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 16,
                                                    "src": "1325:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Ticket_$8_storage_$",
                                                        "typeString": "mapping(uint256 => struct VirtLotto_3.Ticket storage ref)"
                                                    }
                                                },
                                                "id": 136,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 133,
                                                        "name": "ticketType",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 126,
                                                        "src": "1344:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                            "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                        }
                                                    },
                                                    "id": 134,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "totalTickets",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 12,
                                                    "src": "1344:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "IndexAccess",
                                                "src": "1325:43:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Ticket_$8_storage",
                                                    "typeString": "struct VirtLotto_3.Ticket storage ref"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 138,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 490,
                                                            "src": "1399:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 139,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1399:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 140,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 490,
                                                            "src": "1431:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 141,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1431:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 142,
                                                        "name": "number",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 98,
                                                        "src": "1462:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 137,
                                                    "name": "Ticket",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8,
                                                    "src": "1371:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_Ticket_$8_storage_ptr_$",
                                                        "typeString": "type(struct VirtLotto_3.Ticket storage pointer)"
                                                    }
                                                },
                                                "id": 143,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "names": [
                                                    "owner",
                                                    "amount",
                                                    "number"
                                                ],
                                                "nodeType": "FunctionCall",
                                                "src": "1371:112:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Ticket_$8_memory",
                                                    "typeString": "struct VirtLotto_3.Ticket memory"
                                                }
                                            },
                                            "src": "1325:158:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Ticket_$8_storage",
                                                "typeString": "struct VirtLotto_3.Ticket storage ref"
                                            }
                                        },
                                        "id": 145,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1325:158:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 149,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1493:25:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 146,
                                                    "name": "ticketType",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 126,
                                                    "src": "1493:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                        "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                    }
                                                },
                                                "id": 148,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "memberName": "totalTickets",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 12,
                                                "src": "1493:23:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 150,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1493:25:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 155,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1528:32:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 151,
                                                    "name": "playerTicketsCount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 54,
                                                    "src": "1528:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 154,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 152,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 490,
                                                        "src": "1547:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 153,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1547:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "IndexAccess",
                                                "src": "1528:30:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 156,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1528:32:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "id": 161,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "!",
                                            "prefix": true,
                                            "src": "1575:25:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 158,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 490,
                                                            "src": "1589:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 159,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1589:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "id": 157,
                                                    "name": "playerExists",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 423,
                                                    "src": "1576:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                                        "typeString": "function (address) view returns (bool)"
                                                    }
                                                },
                                                "id": 160,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1576:24:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 170,
                                        "nodeType": "IfStatement",
                                        "src": "1571:80:0",
                                        "trueBody": {
                                            "id": 169,
                                            "nodeType": "Block",
                                            "src": "1602:49:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 165,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 490,
                                                                    "src": "1629:3:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 166,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": null,
                                                                "src": "1629:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 162,
                                                                "name": "players",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 46,
                                                                "src": "1616:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                    "typeString": "address[] storage ref"
                                                                }
                                                            },
                                                            "id": 164,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "push",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "1616:12:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) returns (uint256)"
                                                            }
                                                        },
                                                        "id": 167,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1616:24:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 168,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "1616:24:0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 174,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 171,
                                                "name": "totalBet",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31,
                                                "src": "1661:8:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "+=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 172,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 490,
                                                    "src": "1673:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 173,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "1673:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "1661:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 175,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1661:21:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 177,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1692:14:0",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 176,
                                                "name": "numberOfBets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34,
                                                "src": "1692:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 178,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1692:14:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 181,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 179,
                                                "name": "numberOfBets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34,
                                                "src": "1721:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">=",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "id": 180,
                                                "name": "maxAmountOfBets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37,
                                                "src": "1737:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "1721:31:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 186,
                                        "nodeType": "IfStatement",
                                        "src": "1717:78:0",
                                        "trueBody": {
                                            "id": 185,
                                            "nodeType": "Block",
                                            "src": "1754:41:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "id": 182,
                                                            "name": "generateWinner",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 258,
                                                            "src": "1768:14:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                                "typeString": "function () returns (uint256,address[] memory)"
                                                            }
                                                        },
                                                        "id": 183,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1768:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                            "typeString": "tuple(uint256,address[] memory)"
                                                        }
                                                    },
                                                    "id": 184,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "1768:16:0"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 188,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [],
                            "name": "pickNumber",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 99,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 98,
                                        "name": "number",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 188,
                                        "src": "1095:11:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 97,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1095:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1094:13:0"
                            },
                            "payable": true,
                            "returnParameters": {
                                "id": 100,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1123:0:0"
                            },
                            "scope": 475,
                            "src": "1075:726:0",
                            "stateMutability": "payable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 201,
                                "nodeType": "Block",
                                "src": "1867:71:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 199,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 195,
                                                    "name": "playerTicketsCount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 54,
                                                    "src": "1884:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 197,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 196,
                                                    "name": "player",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 190,
                                                    "src": "1903:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1884:26:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "id": 198,
                                                "name": "maxAmountOfTickets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 40,
                                                "src": "1913:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "1884:47:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "functionReturnParameters": 194,
                                        "id": 200,
                                        "nodeType": "Return",
                                        "src": "1877:54:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 202,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": true,
                            "modifiers": [],
                            "name": "canPlay",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 191,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 190,
                                        "name": "player",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 202,
                                        "src": "1824:14:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 189,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1824:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1823:16:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 194,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 193,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 202,
                                        "src": "1861:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 192,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1861:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1860:6:0"
                            },
                            "scope": 475,
                            "src": "1807:131:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 231,
                                "nodeType": "Block",
                                "src": "2012:165:0",
                                "statements": [
                                    {
                                        "assignments": [],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 213,
                                                "name": "winningNumber",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 232,
                                                "src": "2022:18:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 212,
                                                    "name": "uint",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2022:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 214,
                                        "initialValue": null,
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2022:18:0"
                                    },
                                    {
                                        "assignments": [],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 218,
                                                "name": "winners",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 232,
                                                "src": "2050:24:0",
                                                "stateVariable": false,
                                                "storageLocation": "memory",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[]"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 216,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2050:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 217,
                                                    "length": null,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "2050:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                        "typeString": "address[]"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 219,
                                        "initialValue": null,
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2050:24:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 225,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "components": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 220,
                                                        "name": "winningNumber",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 213,
                                                        "src": "2086:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 221,
                                                        "name": "winners",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 218,
                                                        "src": "2101:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                            "typeString": "address[] memory"
                                                        }
                                                    }
                                                ],
                                                "id": 222,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "TupleExpression",
                                                "src": "2085:24:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "tuple(uint256,address[] memory)"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 223,
                                                    "name": "generateWinner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 258,
                                                    "src": "2112:14:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                        "typeString": "function () returns (uint256,address[] memory)"
                                                    }
                                                },
                                                "id": 224,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2112:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "tuple(uint256,address[] memory)"
                                                }
                                            },
                                            "src": "2085:43:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 226,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2085:43:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "components": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 227,
                                                    "name": "winningNumber",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 213,
                                                    "src": "2147:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "id": 228,
                                                    "name": "winners",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 218,
                                                    "src": "2162:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                        "typeString": "address[] memory"
                                                    }
                                                }
                                            ],
                                            "id": 229,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "2146:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                "typeString": "tuple(uint256,address[] memory)"
                                            }
                                        },
                                        "functionReturnParameters": 211,
                                        "id": 230,
                                        "nodeType": "Return",
                                        "src": "2139:31:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 232,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [
                                {
                                    "arguments": null,
                                    "id": 205,
                                    "modifierName": {
                                        "argumentTypes": null,
                                        "id": 204,
                                        "name": "onlyOwner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 65,
                                        "src": "1975:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_modifier$__$",
                                            "typeString": "modifier ()"
                                        }
                                    },
                                    "nodeType": "ModifierInvocation",
                                    "src": "1975:9:0"
                                }
                            ],
                            "name": "draw",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 203,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1957:2:0"
                            },
                            "payable": true,
                            "returnParameters": {
                                "id": 211,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 207,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 232,
                                        "src": "1995:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 206,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1995:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 210,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 232,
                                        "src": "2001:9:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[]"
                                        },
                                        "typeName": {
                                            "baseType": {
                                                "id": 208,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2001:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 209,
                                            "length": null,
                                            "nodeType": "ArrayTypeName",
                                            "src": "2001:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                "typeString": "address[]"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1994:17:0"
                            },
                            "scope": 475,
                            "src": "1944:233:0",
                            "stateMutability": "payable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 257,
                                "nodeType": "Block",
                                "src": "2243:170:0",
                                "statements": [
                                    {
                                        "assignments": [
                                            241
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 241,
                                                "name": "winningNumber",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 258,
                                                "src": "2253:18:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 240,
                                                    "name": "uint",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2253:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 244,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 242,
                                                "name": "generateRandomNumber",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 391,
                                                "src": "2274:20:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view returns (uint256)"
                                                }
                                            },
                                            "id": 243,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2274:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2253:43:0"
                                    },
                                    {
                                        "assignments": [
                                            248
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 248,
                                                "name": "winners",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 258,
                                                "src": "2306:24:0",
                                                "stateVariable": false,
                                                "storageLocation": "memory",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[]"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 246,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2306:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 247,
                                                    "length": null,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "2306:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                        "typeString": "address[]"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 252,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 250,
                                                    "name": "winningNumber",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 241,
                                                    "src": "2350:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 249,
                                                "name": "distributePrizes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 371,
                                                "src": "2333:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "function (uint256) returns (address[] memory)"
                                                }
                                            },
                                            "id": 251,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2333:31:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2306:58:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "components": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 253,
                                                    "name": "winningNumber",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 241,
                                                    "src": "2383:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "id": 254,
                                                    "name": "winners",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 248,
                                                    "src": "2398:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                        "typeString": "address[] memory"
                                                    }
                                                }
                                            ],
                                            "id": 255,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "2382:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_memory_ptr_$",
                                                "typeString": "tuple(uint256,address[] memory)"
                                            }
                                        },
                                        "functionReturnParameters": 239,
                                        "id": 256,
                                        "nodeType": "Return",
                                        "src": "2375:31:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 258,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [],
                            "name": "generateWinner",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 233,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "2206:2:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 239,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 235,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 258,
                                        "src": "2226:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 234,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2226:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 238,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 258,
                                        "src": "2232:9:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[]"
                                        },
                                        "typeName": {
                                            "baseType": {
                                                "id": 236,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2232:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 237,
                                            "length": null,
                                            "nodeType": "ArrayTypeName",
                                            "src": "2232:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                "typeString": "address[]"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2225:17:0"
                            },
                            "scope": 475,
                            "src": "2183:230:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "private"
                        },
                        {
                            "body": {
                                "id": 370,
                                "nodeType": "Block",
                                "src": "2493:787:0",
                                "statements": [
                                    {
                                        "assignments": [
                                            267
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 267,
                                                "name": "ticketType",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 371,
                                                "src": "2503:29:0",
                                                "stateVariable": false,
                                                "storageLocation": "storage",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                    "typeString": "struct VirtLotto_3.TicketType"
                                                },
                                                "typeName": {
                                                    "contractScope": null,
                                                    "id": 266,
                                                    "name": "TicketType",
                                                    "nodeType": "UserDefinedTypeName",
                                                    "referencedDeclaration": 17,
                                                    "src": "2503:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                        "typeString": "struct VirtLotto_3.TicketType"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 271,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 268,
                                                "name": "ticketTypes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 50,
                                                "src": "2535:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TicketType_$17_storage_$",
                                                    "typeString": "mapping(uint256 => struct VirtLotto_3.TicketType storage ref)"
                                                }
                                            },
                                            "id": 270,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 269,
                                                "name": "winningNumber",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 260,
                                                "src": "2547:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "2535:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_TicketType_$17_storage",
                                                "typeString": "struct VirtLotto_3.TicketType storage ref"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2503:58:0"
                                    },
                                    {
                                        "assignments": [
                                            275
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 275,
                                                "name": "winners",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 371,
                                                "src": "2571:24:0",
                                                "stateVariable": false,
                                                "storageLocation": "memory",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[]"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 273,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2571:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 274,
                                                    "length": null,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "2571:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                        "typeString": "address[]"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 282,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 279,
                                                        "name": "ticketType",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 267,
                                                        "src": "2612:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                            "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                        }
                                                    },
                                                    "id": 280,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "totalTickets",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 12,
                                                    "src": "2612:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 278,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "NewExpression",
                                                "src": "2598:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                                                    "typeString": "function (uint256) pure returns (address[] memory)"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 276,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2602:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 277,
                                                    "length": null,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "2602:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                        "typeString": "address[]"
                                                    }
                                                }
                                            },
                                            "id": 281,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2598:38:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2571:65:0"
                                    },
                                    {
                                        "body": {
                                            "id": 313,
                                            "nodeType": "Block",
                                            "src": "2698:147:0",
                                            "statements": [
                                                {
                                                    "assignments": [
                                                        295
                                                    ],
                                                    "declarations": [
                                                        {
                                                            "constant": false,
                                                            "id": 295,
                                                            "name": "winner",
                                                            "nodeType": "VariableDeclaration",
                                                            "scope": 371,
                                                            "src": "2712:14:0",
                                                            "stateVariable": false,
                                                            "storageLocation": "default",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "typeName": {
                                                                "id": 294,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2712:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "value": null,
                                                            "visibility": "internal"
                                                        }
                                                    ],
                                                    "id": 301,
                                                    "initialValue": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 296,
                                                                    "name": "ticketType",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 267,
                                                                    "src": "2729:10:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                                        "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                                    }
                                                                },
                                                                "id": 297,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "tickets",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 16,
                                                                "src": "2729:18:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Ticket_$8_storage_$",
                                                                    "typeString": "mapping(uint256 => struct VirtLotto_3.Ticket storage ref)"
                                                                }
                                                            },
                                                            "id": 299,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 298,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 284,
                                                                "src": "2748:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "2729:21:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Ticket_$8_storage",
                                                                "typeString": "struct VirtLotto_3.Ticket storage ref"
                                                            }
                                                        },
                                                        "id": 300,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "owner",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 3,
                                                        "src": "2729:27:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "VariableDeclarationStatement",
                                                    "src": "2712:44:0"
                                                },
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 306,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 302,
                                                                "name": "winners",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 275,
                                                                "src": "2770:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                    "typeString": "address[] memory"
                                                                }
                                                            },
                                                            "id": 304,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 303,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 284,
                                                                "src": "2778:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "nodeType": "IndexAccess",
                                                            "src": "2770:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 305,
                                                            "name": "winner",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 295,
                                                            "src": "2783:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "2770:19:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 307,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "2770:19:0"
                                                },
                                                {
                                                    "eventCall": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "id": 309,
                                                                "name": "winner",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 295,
                                                                "src": "2812:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "argumentTypes": null,
                                                                "id": 310,
                                                                "name": "winningNumber",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 260,
                                                                "src": "2820:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "id": 308,
                                                            "name": "Win",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 23,
                                                            "src": "2808:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                                "typeString": "function (address,uint256)"
                                                            }
                                                        },
                                                        "id": 311,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2808:26:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 312,
                                                    "nodeType": "EmitStatement",
                                                    "src": "2803:31:0"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 290,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 287,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 284,
                                                "src": "2664:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 288,
                                                    "name": "ticketType",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 267,
                                                    "src": "2668:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                        "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                    }
                                                },
                                                "id": 289,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "totalTickets",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 12,
                                                "src": "2668:23:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "2664:27:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 314,
                                        "initializationExpression": {
                                            "assignments": [
                                                284
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 284,
                                                    "name": "i",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 371,
                                                    "src": "2652:6:0",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 283,
                                                        "name": "uint",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2652:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "value": null,
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 286,
                                            "initialValue": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 285,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2661:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "2652:10:0"
                                        },
                                        "loopExpression": {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 292,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "++",
                                                "prefix": false,
                                                "src": "2693:3:0",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "id": 291,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 284,
                                                    "src": "2693:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 293,
                                            "nodeType": "ExpressionStatement",
                                            "src": "2693:3:0"
                                        },
                                        "nodeType": "ForStatement",
                                        "src": "2647:198:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 318,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 315,
                                                    "name": "winners",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 275,
                                                    "src": "2859:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                        "typeString": "address[] memory"
                                                    }
                                                },
                                                "id": 316,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "2859:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 317,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2876:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "2859:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": {
                                            "id": 366,
                                            "nodeType": "Block",
                                            "src": "3213:36:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "id": 363,
                                                            "name": "resetGame",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 474,
                                                            "src": "3227:9:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                                "typeString": "function ()"
                                                            }
                                                        },
                                                        "id": 364,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3227:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 365,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "3227:11:0"
                                                }
                                            ]
                                        },
                                        "id": 367,
                                        "nodeType": "IfStatement",
                                        "src": "2855:394:0",
                                        "trueBody": {
                                            "id": 362,
                                            "nodeType": "Block",
                                            "src": "2879:328:0",
                                            "statements": [
                                                {
                                                    "assignments": [
                                                        320
                                                    ],
                                                    "declarations": [
                                                        {
                                                            "constant": false,
                                                            "id": 320,
                                                            "name": "winnerEtherAmount",
                                                            "nodeType": "VariableDeclaration",
                                                            "scope": 371,
                                                            "src": "2893:22:0",
                                                            "stateVariable": false,
                                                            "storageLocation": "default",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "typeName": {
                                                                "id": 319,
                                                                "name": "uint",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2893:4:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "value": null,
                                                            "visibility": "internal"
                                                        }
                                                    ],
                                                    "id": 325,
                                                    "initialValue": {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 324,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "id": 321,
                                                            "name": "totalBet",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31,
                                                            "src": "2918:8:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "/",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 322,
                                                                "name": "winners",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 275,
                                                                "src": "2929:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                    "typeString": "address[] memory"
                                                                }
                                                            },
                                                            "id": 323,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "2929:14:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2918:25:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "VariableDeclarationStatement",
                                                    "src": "2893:50:0"
                                                },
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "id": 326,
                                                            "name": "resetGame",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 474,
                                                            "src": "2958:9:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                                "typeString": "function ()"
                                                            }
                                                        },
                                                        "id": 327,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2958:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 328,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "2958:11:0"
                                                },
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 331,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 329,
                                                            "name": "totalBet",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31,
                                                            "src": "2983:8:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 330,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "2994:1:0",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "2983:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 332,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "2983:12:0"
                                                },
                                                {
                                                    "body": {
                                                        "id": 360,
                                                        "nodeType": "Block",
                                                        "src": "3056:141:0",
                                                        "statements": [
                                                            {
                                                                "condition": {
                                                                    "argumentTypes": null,
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    "id": 350,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "leftExpression": {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 344,
                                                                            "name": "winners",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 275,
                                                                            "src": "3078:7:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                                "typeString": "address[] memory"
                                                                            }
                                                                        },
                                                                        "id": 346,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 345,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 284,
                                                                            "src": "3086:1:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "IndexAccess",
                                                                        "src": "3078:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    },
                                                                    "nodeType": "BinaryOperation",
                                                                    "operator": "!=",
                                                                    "rightExpression": {
                                                                        "argumentTypes": null,
                                                                        "arguments": [
                                                                            {
                                                                                "argumentTypes": null,
                                                                                "hexValue": "30",
                                                                                "id": 348,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "3100:1:0",
                                                                                "subdenomination": null,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                },
                                                                                "value": "0"
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                }
                                                                            ],
                                                                            "id": 347,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "3092:7:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                                "typeString": "type(address)"
                                                                            },
                                                                            "typeName": "address"
                                                                        },
                                                                        "id": 349,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "3092:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    },
                                                                    "src": "3078:24:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    }
                                                                },
                                                                "falseBody": null,
                                                                "id": 359,
                                                                "nodeType": "IfStatement",
                                                                "src": "3074:109:0",
                                                                "trueBody": {
                                                                    "id": 358,
                                                                    "nodeType": "Block",
                                                                    "src": "3104:79:0",
                                                                    "statements": [
                                                                        {
                                                                            "expression": {
                                                                                "argumentTypes": null,
                                                                                "arguments": [
                                                                                    {
                                                                                        "argumentTypes": null,
                                                                                        "id": 355,
                                                                                        "name": "winnerEtherAmount",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 320,
                                                                                        "src": "3146:17:0",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "expression": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    ],
                                                                                    "expression": {
                                                                                        "argumentTypes": null,
                                                                                        "baseExpression": {
                                                                                            "argumentTypes": null,
                                                                                            "id": 351,
                                                                                            "name": "winners",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 275,
                                                                                            "src": "3126:7:0",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                                                "typeString": "address[] memory"
                                                                                            }
                                                                                        },
                                                                                        "id": 353,
                                                                                        "indexExpression": {
                                                                                            "argumentTypes": null,
                                                                                            "id": 352,
                                                                                            "name": "i",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 284,
                                                                                            "src": "3134:1:0",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_uint256",
                                                                                                "typeString": "uint256"
                                                                                            }
                                                                                        },
                                                                                        "isConstant": false,
                                                                                        "isLValue": true,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "IndexAccess",
                                                                                        "src": "3126:10:0",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_address",
                                                                                            "typeString": "address"
                                                                                        }
                                                                                    },
                                                                                    "id": 354,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "memberName": "transfer",
                                                                                    "nodeType": "MemberAccess",
                                                                                    "referencedDeclaration": null,
                                                                                    "src": "3126:19:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                                                                        "typeString": "function (uint256)"
                                                                                    }
                                                                                },
                                                                                "id": 356,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "3126:38:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_tuple$__$",
                                                                                    "typeString": "tuple()"
                                                                                }
                                                                            },
                                                                            "id": 357,
                                                                            "nodeType": "ExpressionStatement",
                                                                            "src": "3126:38:0"
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "condition": {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 340,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "id": 337,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 284,
                                                            "src": "3022:1:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "<",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 338,
                                                                "name": "ticketType",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 267,
                                                                "src": "3026:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_TicketType_$17_storage_ptr",
                                                                    "typeString": "struct VirtLotto_3.TicketType storage pointer"
                                                                }
                                                            },
                                                            "id": 339,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "totalTickets",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 12,
                                                            "src": "3026:23:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "3022:27:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "id": 361,
                                                    "initializationExpression": {
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 335,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftHandSide": {
                                                                "argumentTypes": null,
                                                                "id": 333,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 284,
                                                                "src": "3015:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "Assignment",
                                                            "operator": "=",
                                                            "rightHandSide": {
                                                                "argumentTypes": null,
                                                                "hexValue": "30",
                                                                "id": 334,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3019:1:0",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                },
                                                                "value": "0"
                                                            },
                                                            "src": "3015:5:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 336,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "3015:5:0"
                                                    },
                                                    "loopExpression": {
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 342,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "UnaryOperation",
                                                            "operator": "++",
                                                            "prefix": false,
                                                            "src": "3051:3:0",
                                                            "subExpression": {
                                                                "argumentTypes": null,
                                                                "id": 341,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 284,
                                                                "src": "3051:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 343,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "3051:3:0"
                                                    },
                                                    "nodeType": "ForStatement",
                                                    "src": "3010:187:0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 368,
                                            "name": "winners",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 275,
                                            "src": "3266:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "functionReturnParameters": 265,
                                        "id": 369,
                                        "nodeType": "Return",
                                        "src": "3259:14:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 371,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [],
                            "name": "distributePrizes",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 261,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 260,
                                        "name": "winningNumber",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 371,
                                        "src": "2445:18:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 259,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2445:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2444:20:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 265,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 264,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 371,
                                        "src": "2482:9:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[]"
                                        },
                                        "typeName": {
                                            "baseType": {
                                                "id": 262,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2482:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 263,
                                            "length": null,
                                            "nodeType": "ArrayTypeName",
                                            "src": "2482:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                "typeString": "address[]"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2481:11:0"
                            },
                            "scope": 475,
                            "src": "2419:861:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "private"
                        },
                        {
                            "body": {
                                "id": 390,
                                "nodeType": "Block",
                                "src": "3346:88:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 388,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "components": [
                                                    {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 385,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "arguments": [
                                                                {
                                                                    "argumentTypes": null,
                                                                    "arguments": [
                                                                        {
                                                                            "argumentTypes": null,
                                                                            "expression": {
                                                                                "argumentTypes": null,
                                                                                "id": 378,
                                                                                "name": "block",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 480,
                                                                                "src": "3379:5:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_block",
                                                                                    "typeString": "block"
                                                                                }
                                                                            },
                                                                            "id": 379,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "memberName": "timestamp",
                                                                            "nodeType": "MemberAccess",
                                                                            "referencedDeclaration": null,
                                                                            "src": "3379:15:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        {
                                                                            "argumentTypes": null,
                                                                            "expression": {
                                                                                "argumentTypes": null,
                                                                                "id": 380,
                                                                                "name": "block",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 480,
                                                                                "src": "3396:5:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_block",
                                                                                    "typeString": "block"
                                                                                }
                                                                            },
                                                                            "id": 381,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "memberName": "difficulty",
                                                                            "nodeType": "MemberAccess",
                                                                            "referencedDeclaration": null,
                                                                            "src": "3396:16:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        ],
                                                                        "id": 377,
                                                                        "name": "keccak256",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 484,
                                                                        "src": "3369:9:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                                                            "typeString": "function () pure returns (bytes32)"
                                                                        }
                                                                    },
                                                                    "id": 382,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3369:44:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                ],
                                                                "id": 376,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "3364:4:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": "uint"
                                                            },
                                                            "id": 383,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3364:50:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "%",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "id": 384,
                                                            "name": "range",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 43,
                                                            "src": "3417:5:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "3364:58:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 386,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "3363:60:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "31",
                                                "id": 387,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3426:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "3363:64:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 375,
                                        "id": 389,
                                        "nodeType": "Return",
                                        "src": "3356:71:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 391,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": true,
                            "modifiers": [],
                            "name": "generateRandomNumber",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 372,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "3315:2:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 375,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 374,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 391,
                                        "src": "3340:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 373,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3340:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "3339:6:0"
                            },
                            "scope": 475,
                            "src": "3286:148:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "private"
                        },
                        {
                            "body": {
                                "id": 422,
                                "nodeType": "Block",
                                "src": "3506:175:0",
                                "statements": [
                                    {
                                        "body": {
                                            "id": 418,
                                            "nodeType": "Block",
                                            "src": "3558:94:0",
                                            "statements": [
                                                {
                                                    "condition": {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 413,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 409,
                                                                "name": "players",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 46,
                                                                "src": "3576:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                    "typeString": "address[] storage ref"
                                                                }
                                                            },
                                                            "id": 411,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 410,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 399,
                                                                "src": "3584:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "3576:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "id": 412,
                                                            "name": "player",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 393,
                                                            "src": "3590:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "3576:20:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "falseBody": null,
                                                    "id": 417,
                                                    "nodeType": "IfStatement",
                                                    "src": "3572:70:0",
                                                    "trueBody": {
                                                        "id": 416,
                                                        "nodeType": "Block",
                                                        "src": "3598:44:0",
                                                        "statements": [
                                                            {
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "hexValue": "74727565",
                                                                    "id": 414,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "bool",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3623:4:0",
                                                                    "subdenomination": null,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    },
                                                                    "value": "true"
                                                                },
                                                                "functionReturnParameters": 397,
                                                                "id": 415,
                                                                "nodeType": "Return",
                                                                "src": "3616:11:0"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 405,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 402,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 399,
                                                "src": "3533:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 403,
                                                    "name": "players",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 46,
                                                    "src": "3537:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 404,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3537:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3533:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 419,
                                        "initializationExpression": {
                                            "assignments": [
                                                399
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 399,
                                                    "name": "i",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 423,
                                                    "src": "3521:6:0",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 398,
                                                        "name": "uint",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3521:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "value": null,
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 401,
                                            "initialValue": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 400,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3530:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "3521:10:0"
                                        },
                                        "loopExpression": {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 407,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "++",
                                                "prefix": false,
                                                "src": "3553:3:0",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "id": 406,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 399,
                                                    "src": "3553:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 408,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3553:3:0"
                                        },
                                        "nodeType": "ForStatement",
                                        "src": "3516:136:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "hexValue": "66616c7365",
                                            "id": 420,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3669:5:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "functionReturnParameters": 397,
                                        "id": 421,
                                        "nodeType": "Return",
                                        "src": "3662:12:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 423,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": true,
                            "modifiers": [],
                            "name": "playerExists",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 394,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 393,
                                        "name": "player",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 423,
                                        "src": "3462:14:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 392,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3462:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "3461:16:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 397,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 396,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 423,
                                        "src": "3500:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 395,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3500:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "3499:6:0"
                            },
                            "scope": 475,
                            "src": "3440:241:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "private"
                        },
                        {
                            "body": {
                                "id": 473,
                                "nodeType": "Block",
                                "src": "3716:260:0",
                                "statements": [
                                    {
                                        "body": {
                                            "id": 441,
                                            "nodeType": "Block",
                                            "src": "3760:46:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 439,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "UnaryOperation",
                                                        "operator": "delete",
                                                        "prefix": true,
                                                        "src": "3774:21:0",
                                                        "subExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 436,
                                                                "name": "ticketTypes",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 50,
                                                                "src": "3781:11:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TicketType_$17_storage_$",
                                                                    "typeString": "mapping(uint256 => struct VirtLotto_3.TicketType storage ref)"
                                                                }
                                                            },
                                                            "id": 438,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 437,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 427,
                                                                "src": "3793:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "nodeType": "IndexAccess",
                                                            "src": "3781:14:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_TicketType_$17_storage",
                                                                "typeString": "struct VirtLotto_3.TicketType storage ref"
                                                            }
                                                        },
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 440,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "3774:21:0"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 432,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 430,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 427,
                                                "src": "3743:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<=",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "id": 431,
                                                "name": "range",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 43,
                                                "src": "3748:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3743:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 442,
                                        "initializationExpression": {
                                            "assignments": [
                                                427
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 427,
                                                    "name": "i",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 474,
                                                    "src": "3731:6:0",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 426,
                                                        "name": "uint",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3731:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "value": null,
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 429,
                                            "initialValue": {
                                                "argumentTypes": null,
                                                "hexValue": "31",
                                                "id": 428,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3740:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "3731:10:0"
                                        },
                                        "loopExpression": {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 434,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "++",
                                                "prefix": false,
                                                "src": "3755:3:0",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "id": 433,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 427,
                                                    "src": "3755:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 435,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3755:3:0"
                                        },
                                        "nodeType": "ForStatement",
                                        "src": "3726:80:0"
                                    },
                                    {
                                        "body": {
                                            "id": 461,
                                            "nodeType": "Block",
                                            "src": "3853:62:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 459,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "UnaryOperation",
                                                        "operator": "delete",
                                                        "prefix": true,
                                                        "src": "3867:37:0",
                                                        "subExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 454,
                                                                "name": "playerTicketsCount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 54,
                                                                "src": "3874:18:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                    "typeString": "mapping(address => uint256)"
                                                                }
                                                            },
                                                            "id": 458,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 455,
                                                                    "name": "players",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 46,
                                                                    "src": "3893:7:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                        "typeString": "address[] storage ref"
                                                                    }
                                                                },
                                                                "id": 457,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 456,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 427,
                                                                    "src": "3901:1:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "3893:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "nodeType": "IndexAccess",
                                                            "src": "3874:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 460,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "3867:37:0"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 450,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 447,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 427,
                                                "src": "3828:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 448,
                                                    "name": "players",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 46,
                                                    "src": "3832:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 449,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3832:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3828:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 462,
                                        "initializationExpression": {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 445,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "argumentTypes": null,
                                                    "id": 443,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 427,
                                                    "src": "3821:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 444,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3825:1:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3821:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 446,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3821:5:0"
                                        },
                                        "loopExpression": {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 452,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "++",
                                                "prefix": false,
                                                "src": "3848:3:0",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "id": 451,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 427,
                                                    "src": "3848:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 453,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3848:3:0"
                                        },
                                        "nodeType": "ForStatement",
                                        "src": "3816:99:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 467,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 463,
                                                    "name": "players",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 46,
                                                    "src": "3925:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 465,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3925:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 466,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3942:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3925:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 468,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3925:18:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 471,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 469,
                                                "name": "numberOfBets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34,
                                                "src": "3953:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 470,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3968:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3953:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 472,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3953:16:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 474,
                            "implemented": true,
                            "isConstructor": false,
                            "isDeclaredConst": false,
                            "modifiers": [],
                            "name": "resetGame",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 424,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "3705:2:0"
                            },
                            "payable": false,
                            "returnParameters": {
                                "id": 425,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "3716:0:0"
                            },
                            "scope": 475,
                            "src": "3687:289:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "private"
                        }
                    ],
                    "scope": 476,
                    "src": "26:3952:0"
                }
            ],
            "src": "0:3979:0"
        },
        "compiler": {
            "name": "solc",
            "version": "0.4.24+commit.e67f0147.Emscripten.clang"
        },
        "networks": {},
        "schemaVersion": "2.0.0",
        "updatedAt": "2018-06-11T14:29:31.300Z"
    }

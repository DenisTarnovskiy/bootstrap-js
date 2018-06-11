import  "/html/test_5.html";
import  "./config";
import Web3 from "web3";

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

LotoContract = web3.eth.contract(contractAbi).at(contractAddress);

var totalBet = LotoContract.totalbet();

document.getElementById('outBets').value = totalBet;


//import Web3 from "web3";


// Web3.eth.defaultAccount = Web3.eth.accounts[0];
var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var selectedNumber = $("#selectedNumber");
var totalPrize = $("#totalPrize");
var winNumber = $("#winNumber");
var winner = $("#winAddress");
var bet = $("#bet");
var clear = $("#clear");
var selectNumber = $("#selectTicket");
var inputBetAmount = $("#inputBetAmount");

bet.on('click' , function () {
    DoBet();
    ShowSelectedNumber();
    ShowTotalPrize();
    ShowWinNumber();
    ShowWinnerAddress();
    SelectNumber();
    window.alert('alert');


});

clear.on('click' , function () {
    Clear()
    window.alert('clean form');
});

// selectedNumber = Loto.selectedNumber()

//
// function DoBet(){
//     inputBetAmount.val("2");
//     Loto.PickNumber();
//
// }
function ShowSelectedNumber() {
    selectedNumber.text(Loto.selectedNumber());

}
function ShowTotalPrize() {
    totalPrize.text(Loto.getCurrentTotalBet());

}
function ShowWinNumber() {
    winNumber.text(Loto.winNumber());

}
function ShowWinnerAddress() {
    winner.text(Loto.winnerAddress());

}
function SelectNumber() {
    console.log(selectNumber.val());
    Loto.pickNumber(selectNumber.val());
}

function Clear() {
    inputBetAmount.val("0");
    selectedNumber.text("0");
    totalPrize.text("0");
    winNumber.text("0");
    winner.text("0");
    selectNumber.val("1");
    Loto.kill();

}




var Loto =LotoContract.at('0x4f6719066b6f161580476cd1ab64a9bc690a86ef');

    var LotoContract = web3.eth.contract([
        {"constant": true, "inputs": [{"name": "", "type": "uint256"}], "name": "lottoNumbers", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "maximumBetCall", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "uint256"}], "name": "betPool", "outputs": [{"name": "bettor", "type": "address"}, {"name": "selectedNumber", "type": "uint256"}, {"name": "value", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "uint256"}], "name": "resultTable", "outputs": [{"name": "winNumber", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "minimumSpend", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"}], "name": "currentTicketCount", "outputs": [{"name": "", "type": "int256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "uint256"}], "name": "winnerAddress", "outputs": [{"name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "result", "outputs": [{"name": "winNumber", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "maximumTicket", "outputs": [{"name": "", "type": "int256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "winNumber", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"inputs": [{"name": "_lottoNumbers", "type": "uint256[]"}, {"name": "_maximumBetCall", "type": "uint256"}, {"name": "_maximumTicket", "type": "int256"}, {"name": "_minimumSpend", "type": "uint256"}], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"constant": false, "inputs": [{"name": "selectedNumber", "type": "uint256"}], "name": "pickNumber", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": true, "inputs": [{"name": "bettor", "type": "address"}], "name": "checkValidNumberOfTicket", "outputs": [{"name": "", "type": "bool"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "spinAndDistributePrize", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": true, "inputs": [], "name": "getCurrentTotalBet", "outputs": [{"name": "totalBetAmmount", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getWinner", "outputs": [{"name": "_winnerAddress", "type": "address[]"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getWinNumber", "outputs": [{"name": "_winNumber", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "resetResult", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "kill", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}],);


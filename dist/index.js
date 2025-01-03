"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const provider = new ethers_1.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/L2WQTcjS6zJZkKWzL2eneaAuJ1-OrYbs");
// we only want the logs of the current block ...requiring information when some specific functions are called...or some specific events are triggered in blockchain...
function pollBlock(BlockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const logs = yield provider.getLogs({
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7", // usdt contract
            fromBlock: BlockNumber,
            toBlock: BlockNumber,
            topics: [(0, ethers_1.id)("Transfer(address,address,uint256)")] // By calling pollBlock(BlockNumber), retrieves all Transfer events from the USDT contract in a particular block.
        });
        console.log(logs);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const blockNumber = yield provider.getBlockNumber();
        pollBlock(blockNumber);
    });
}
main(); // execute the main function to log all transaction in latest hashed block in ethereum mainnet. 

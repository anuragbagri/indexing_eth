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
        return yield provider.getLogs({
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7", // usdt contract
            fromBlock: BlockNumber,
            toBlock: BlockNumber,
            topics: [(0, ethers_1.id)("Transfer(address,address,uint256)")] // By calling pollBlock(BlockNumber), retrieves all Transfer events from the USDT contract in a particular block.
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const blockNumber = yield provider.getBlockNumber();
        const blockLogs = pollBlock(blockNumber);
        console.log(blockLogs);
        //@ts-ignore
        /*
        const logData = blockLogs.map((log) => ({
         transactionHash: log.transactionHash,
         blockNumber: log.blockNumber,
         blockHash: log.blockHash,
         contractAddress: log.address,
         event: log.topics[0],
         senderAddress: `0x${log.topics[1].slice(26)}`, // Extract sender from topic
         receiverAddress: `0x${log.topics[2].slice(26)}`, // Extract receiver from topic
       }));
       
        try {
        const store = await prisma.BlockChainlog.createMany({
         data : logData
        })
       
        console.log(`${store.count} logs store in the database`)
       }
       
       catch(Error){
        console.log(`message : ${Error}`)}
        */
    });
}
main();

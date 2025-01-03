import { id, JsonRpcProvider, Transaction  } from "ethers";
import prisma from "./db";

const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/L2WQTcjS6zJZkKWzL2eneaAuJ1-OrYbs")

// we only want the logs of the current block ...requiring information when some specific functions are called...or some specific events are triggered in blockchain...
async function pollBlock( BlockNumber:number) {
   return await provider.getLogs({
    address : "0xdac17f958d2ee523a2206206994597c13d831ec7",  // usdt contract
    fromBlock : BlockNumber,
    toBlock : BlockNumber,
    topics : [id("Transfer(address,address,uint256)")]    // By calling pollBlock(BlockNumber), retrieves all Transfer events from the USDT contract in a particular block.
   })
}

async function main() {
 const blockNumber = await provider.getBlockNumber();
 const blockLogs : any = pollBlock(blockNumber);
 console.log(blockLogs) 
 //@ts-ignore
 
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

 finally {
   prisma.$disconnect();
 }
 
}
 

main(); 

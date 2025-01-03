import { id, JsonRpcProvider  } from "ethers";

const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/L2WQTcjS6zJZkKWzL2eneaAuJ1-OrYbs")

// we only want the logs of the current block ...requiring information when some specific functions are called...or some specific events are triggered in blockchain...
async function pollBlock( BlockNumber:number){
  const logs = await provider.getLogs({
    address : "0xdac17f958d2ee523a2206206994597c13d831ec7",  // usdt contract
    fromBlock : BlockNumber,
    toBlock : BlockNumber,
    topics : [id("Transfer(address,address,uint256)")]    // By calling pollBlock(BlockNumber), retrieves all Transfer events from the USDT contract in a particular block.
   })
   console.log(logs)
}

async function main() {
 const blockNumber = await provider.getBlockNumber();
 pollBlock(blockNumber);
}

main(); // execute the main function to log all transaction in latest hashed block in ethereum mainnet.

-- CreateTable
CREATE TABLE "BlockChainlog" (
    "id" SERIAL NOT NULL,
    "transactionHash" TEXT NOT NULL,
    "BlockNumber" INTEGER NOT NULL,
    "BlockHash" INTEGER NOT NULL,
    "contractAddress" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "SenderAddress" TEXT NOT NULL,
    "ReceiverAddress" TEXT NOT NULL,

    CONSTRAINT "BlockChainlog_pkey" PRIMARY KEY ("id")
);

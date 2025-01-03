# Ethereum Blockchain Indexing Interface

This project showcases a simple application that indexes data from the Ethereum blockchain. It specifically targets `Transfer` events and demonstrates the use of the `ethers` library to fetch and filter blockchain logs.

## Features

- Fetches logs from Ethereum blockchain.
- Targets specific events (e.g., `Transfer` events).
- Provides a basic example of blockchain data indexing.

## How It Works

- The `ethers` library is used to connect to an Ethereum node via Alchemy.
- Logs from a specific smart contract (e.g., USDT contract) are filtered for `Transfer` events.
- Indexed data includes sender, recipient, and value of the transfer, which is logged to the console.

## Key Technologies

- **Node.js**
- **ethers.js**
- **Alchemy (Ethereum Node Provider)**

## Running the Project

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd ethereum-indexing-interface
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm run dev
   ```

## Future Scope

- Adding real-time monitoring of blockchain events.
- Enhancing the application with a user-friendly frontend.
- Extending functionality to index more event types.

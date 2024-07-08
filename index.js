const bitcoin = require('bitcoinjs-lib');
const liquid = require('liquidjs-lib');

// Replace with your own private keys and addresses
const keyPairs = [
  bitcoin.ECPair.fromWIF('your-bitcoin-wif-private-key'),
  bitcoin.ECPair.fromWIF('another-bitcoin-wif-private-key')
];

const lbtcKeyPairs = [
  liquid.ECPair.fromWIF('your-liquid-wif-private-key'),
  liquid.ECPair.fromWIF('another-liquid-wif-private-key')
];

// Example function to create a CoinJoin transaction for Bitcoin
function createBitcoinCoinJoin(keyPairs) {
  const txb = new bitcoin.TransactionBuilder();

  // Add inputs (these should be UTXOs from the wallets involved in the CoinJoin)
  txb.addInput('transaction-id', 0); // replace with actual transaction ID and index
  txb.addInput('transaction-id', 1); // replace with actual transaction ID and index

  // Add outputs (these should be the target addresses for the CoinJoin)
  txb.addOutput('target-address-1', 50000); // replace with actual target address and amount
  txb.addOutput('target-address-2', 50000); // replace with actual target address and amount

  // Sign the inputs
  txb.sign(0, keyPairs[0]);
  txb.sign(1, keyPairs[1]);

  // Build the transaction
  const tx = txb.build();
  console.log('Bitcoin CoinJoin Transaction:', tx.toHex());
}

// Example function to create a CoinJoin transaction for L-BTC
function createLBTCCoinJoin(keyPairs) {
  const txb = new liquid.TransactionBuilder();

  // Add inputs (these should be UTXOs from the wallets involved in the CoinJoin)
  txb.addInput('transaction-id', 0); // replace with actual transaction ID and index
  txb.addInput('transaction-id', 1); // replace with actual transaction ID and index

  // Add outputs (these should be the target addresses for the CoinJoin)
  txb.addOutput('target-address-1', 50000); // replace with actual target address and amount
  txb.addOutput('target-address-2', 50000); // replace with actual target address and amount

  // Sign the inputs
  txb.sign(0, keyPairs[0]);
  txb.sign(1, keyPairs[1]);

  // Build the transaction
  const tx = txb.build();
  console.log('L-BTC CoinJoin Transaction:', tx.toHex());
}

// Create and log the CoinJoin transactions
createBitcoinCoinJoin(keyPairs);
createLBTCCoinJoin(lbtcKeyPairs);

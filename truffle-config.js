/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
 const dotenv = require('dotenv');
 dotenv.config();
 var privateKey = process.env.PRIVATEKEY;
 //console.log("privateKey",privateKey);
 var HDWalletProvider = require("@truffle/hdwallet-provider");
 var mnemonic = process.env.MNEMONIC;
 console.log("mnemonic",mnemonic);

//bsc testnet
 var bsctestnetthttpProvider = process.env.TESTNET_PROVIDER;
 console.log("bsctestnetthttpProvider",bsctestnetthttpProvider);

 //bsc mainnet
 var bscmainnethttpProvider = process.env.MAINNET_PROVIDER;
 console.log("bscmainnethttpProvider",bscmainnethttpProvider);
 var bscanApiKey =  process.env.BSCSCANAPIKEY
 console.log("bscanApiKey",bscanApiKey);

 //heco testnet
 var hecotestnethttpProvider = process.env.HECOTESTNET;
 console.log("hecotestnethttpProvider",hecotestnethttpProvider);

 //heco mainnet
 var hecomainnethttpProvider = process.env.HECOTESTNET;
 console.log("hecotestnethttpProvider",hecomainnethttpProvider);

 //ropsten
 var ropsten = process.env.ROPSTEN;
 console.log("ropsten",ropsten);

 //ethmainnet
 var ethmainnet = process.env.ETHMAINNET;
 console.log("ethmainnet",ethmainnet);


module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }

  
    bscmainnet: {
      provider: function () {
        //return new HDWalletProvider(mnemonic, "https://data-seed-prebsc-2-s2.binance.org:8545/"); 
        return new HDWalletProvider(privateKey, bscmainnethttpProvider); //bsc mainnet
      },
      network_id: 56 
      // production: true
    },


    bsctestnet: {
      provider: function () {
        //return new HDWalletProvider(mnemonic, "https://data-seed-prebsc-2-s2.binance.org:8545/"); 
        return new HDWalletProvider(privateKey, bsctestnetthttpProvider); //bsc testnet
      },
      network_id: 97 //test bsc
    },

    hecomainnet: {
      provider: function () {
        //return new HDWalletProvider(mnemonic, "https://data-seed-prebsc-2-s2.binance.org:8545/"); 
        return new HDWalletProvider(privateKey, hecomainnethttpProvider); 
      },
      network_id: 128 //heco mainnet 
    },

    hecotestnet: {
      provider: function () {
        //return new HDWalletProvider(mnemonic, "https://data-seed-prebsc-2-s2.binance.org:8545/"); 
        return new HDWalletProvider(privateKey, hecotestnethttpProvider); 
      },
      network_id: 256 //heco testnet  
    },

    ropsten: {
      provider: function () {
        //return new HDWalletProvider(mnemonic, "https://data-seed-prebsc-2-s2.binance.org:8545/");
        return new HDWalletProvider(privateKey, ropsten); 
      },
       network_id: 3 //ropsten
    },

    ethmainnet: {
      provider: function () {
        //return new HDWalletProvider(mnemonic, "https://data-seed-prebsc-2-s2.binance.org:8545/"); 
        return new HDWalletProvider(privateKey, ethmainnet); 
      },
      network_id: 1  
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  api_keys: {
    bscscan: bscanApiKey
   },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      //  evmVersion: "berlin"
      }
    }
  },
  plugins: ["truffle-plugin-verify"],
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};

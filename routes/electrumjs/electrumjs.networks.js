'use strict'
const bitcoin = require('bitcoinjs-lib');

let networks = exports;
Object.keys(bitcoin.networks).forEach((key) => {
  networks[key] = bitcoin.networks[key];
});

// https://github.com/Fair-Exchange/safecoin/blob/master/src/chainparams.cpp
networks.safecoin = {
  messagePrefix: '\x19Safecoin Signed Message:\n',
  bip32: {
    public: 0x0488b21f,
    private: 0x0488ade5,
  },
  pubKeyHash: 0x3d,
  scriptHash: 0x56,
  wif: 0xbd,
  dustThreshold: 1000,
  isZcash: true,
};

networks.xsg = {
  messagePrefix: '\x19Snowgem Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x05358394,
  },
  pubKeyHash: 0x1c28,
  scriptHash: 0x1c2D,
  wif: 0x80,
  dustThreshold: 1000,
  isZcash: true,
};

networks.btcz = {
  messagePrefix: '\x19BitcoinZ Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x1cb8,
  scriptHash: 0x1cbd,
  wif: 0x80,
  dustThreshold: 1000,
  isZcash: true,
};

// https://github.com/zencashio/zen/blob/master/src/chainparams.cpp#L118
networks.zen = { // new address type
  messagePrefix: '\x19Zencashio Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x2089,
  scriptHash: 0x2086,
  wif: 0x80,
  dustThreshold: 1000,
  isZcash: true,
};

networks.safe = networks.safecoin;
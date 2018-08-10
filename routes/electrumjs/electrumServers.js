let electrumServers = {
  safecoin: { // !estimatefee
    address: 'local.support',
    port: 10001,
    proto: 'tcp',
    txfee: 10000,
    abbr: 'SAFE',
    serverList: [
      'local.support:10001',
      'electrum.safc.cc:10001'
    ],
  },
  btcz: {
    address: 'local.support',
    port: 10002,
    proto: 'tcp',
    txfee: 10000,
    abbr: 'BTCZ',
    serverList: [
      'local.support:10002',
      'electrum.safc.cc:10002'
    ],
  },
};

module.exports = electrumServers;
let electrumServers = {
  safecoin: { // !estimatefee
    address: 'local.support',
    port: 10001,
    proto: 'tcp',
    txfee: 10000,
    abbr: 'SAFE',
    serverList: [
      'local.support:10001',
      '45.63.13.60:10001'
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
      '45.63.13.60:10002'
    ],
  },
};

module.exports = electrumServers;

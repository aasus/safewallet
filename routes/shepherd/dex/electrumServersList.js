// TODO: merge with spv mode

const electrumServersList = {
  "SAFE": [{"local.support":10001},{"45.63.13.60":10001}],
  "BTCZ": [{"electrum1.cipig.net": 10056},{"electrum2.cipig.net": 10056}],
  "XSG": [{"electrumsvr.snowgem.org": 50002},{"electrumsvr2.snowgem.org": 50002}],
  "ZEN": [{"local.support":10001},{"local.support":10001}] //TODO
  "JUMBLR": [{"electrum2.ipv6admin.com": 10004},{"electrum1.ipv6admin.com": 10004}],
  "SUPERNET": [{"electrum2.ipv6admin.com": 10005},{"electrum1.ipv6admin.com": 10005}]
};

module.exports = (shepherd) => {
  shepherd.electrumServersList = electrumServersList;
  return shepherd;
};
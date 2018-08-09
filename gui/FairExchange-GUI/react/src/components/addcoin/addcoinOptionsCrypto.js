import { translate } from '../../translate/translate';
import mainWindow from '../../util/mainWindow';
import config from '../../config';

const addCoinOptionsCrypto = () => {
  const availableSAFEModes = mainWindow.arch === 'x64' ? 'spv|native' : 'spv';

  let _coins = [{
    label: 'Safecoin (SAFE)',
    icon: 'SAFE',
    value: `SAFE|${availableSAFEModes}`,
    }, {
      label: 'BitcoinZ (BTCZ)',
      icon: 'BTCZ',
      value: `BTCZ|spv`,
    }];

  if (config.experimentalFeatures) {
    _coins.push(/* {
      label: 'Groestlcoin (GRS)',
      icon: 'GRS',
      value: `GRS|spv`,
    }, */ );
  }

  return _coins;
}

export default addCoinOptionsCrypto;

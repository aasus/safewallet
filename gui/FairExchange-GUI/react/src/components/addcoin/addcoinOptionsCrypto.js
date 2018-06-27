import { translate } from '../../translate/translate';
import mainWindow from '../../util/mainWindow';
import config from '../../config';

const addCoinOptionsCrypto = () => {
  const availableSAFEModes = mainWindow.arch === 'x64' ? 'spv|native' : 'spv';

  let _coins = [{
    label: 'Safecoin (SAFE)',
    icon: 'SAFE',
    value: `SAFE|${availableSAFEModes}`,
  }];

  if (config.experimentalFeatures) {
    _coins.push({
      label: 'SnowGem (XSG)',
      icon: 'XSG',
      value: `XSG|spv`,
    }, /*{
      label: 'ZenCash (ZEN)',
      icon: 'ZEN',
      value: `ZEN|spv`,
    },*/ {
      label: 'BitcoinZ (BTCZ)',
      icon: 'BTCZ',
      value: `BTCZ|spv`,
    }, {
      label: 'Commercium (CMM)',
      icon: 'CMM',
      value: `CMM|spv`,
    });
  }

  return _coins;
}

export default addCoinOptionsCrypto;

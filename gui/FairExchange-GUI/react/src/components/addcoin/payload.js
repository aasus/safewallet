// TODO: merge check functions
//			 move to nodejs
//			 cleanup

export function checkAC(coinVal) {
	if (/*coinVal === 'SUPERNET' ||
			coinVal === 'JUMBLR' ||*/
			coinVal === 'XSG' ||
			coinVal === 'BTCZ' ||
			coinVal === 'CMM')	{
		return true;
	} else {
		return false;
	}
}

export function startCurrencyAssetChain(confpath, coin, mode) {
	const assetChainPorts = window.require('electron').remote.getCurrentWindow().assetChainPorts;

	return assetChainPorts[coin];
}

export function startAssetChain(confpath, coin, mode, getSuppyOnly) {
	const assetChainPorts = window.require('electron').remote.getCurrentWindow().assetChainPorts;

	const acConfig = {
		SUPERNET: {
			supply: 816061,
		},
		JUMBLR: {
			supply: 999999,
		},
		XSG: {
			supply: 20998641,// TODO
		},
		BTCZ: {
			supply: 20998641,// TODO
		},
		CMM: {
			supply: 20998641,// TODO
		},
	};

	if (mode === '-1') {
		if (getSuppyOnly) {
			return acConfig[coin].supply;
		} else {
			return assetChainPorts[coin];
		}
	}
}

export function startCrypto(confpath, coin, mode) {
	const assetChainPorts = window.require('electron').remote.getCurrentWindow().assetChainPorts;

	coin = coin === 'SAFE' ? 'safecoind' : coin;
	return assetChainPorts[coin];
}
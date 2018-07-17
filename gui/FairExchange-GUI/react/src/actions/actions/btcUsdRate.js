import { BTC_USD_RATE } from '../storeType';
import { triggerToaster } from '../actionCreators';

export function btcUsdRate(){
    return dispatch => {
        return fetch('https://api.coinmarketcap.com/v2/ticker/1/', {
            method: 'GET',
        })
        .catch((error) => {
            console.log(error);
            dispatch(
                triggerToaster(
                  'btcUsdRate',
                  'Error',
                  'error'
                )
              );
        })
        .then(response => response.json())
        .then(json => {
            let _rate = json.data.quotes.USD.price;
            dispatch(btcUsdRateState(_rate));
        })
    }
}

function btcUsdRateState(rate) {
    return {
      type: BTC_USD_RATE,
      btcUsdRate: rate,
    }
  }
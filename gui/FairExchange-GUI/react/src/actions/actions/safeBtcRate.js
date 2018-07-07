import { SAFE_BTC_RATE } from '../storeType';
import { triggerToaster } from '../actionCreators';

export function safeBtcRate() {    
    return dispatch => {
      return fetch(`https://safe.trade/api/v2/tickers/safebtc`, {
        method: 'GET',
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          triggerToaster(
            'safeBtcRate',
            'Error',
            'error'
          )
        );
      })
      .then(response => response.json())
      .then(json => {
        let _rates = json.ticker;
        dispatch(safeBtcRateState(_rates));
      });
    }
  }

  function safeBtcRateState(rates) {
    return {
      type: SAFE_BTC_RATE,
      safeBtcRate: rates,
    }
  }
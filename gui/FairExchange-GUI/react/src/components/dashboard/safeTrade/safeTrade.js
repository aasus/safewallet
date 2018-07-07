import React from 'react';
import { connect } from 'react-redux';
import SafeTradeRender from './safeTrade.render';

import {
    safeTradePairList,  
    safeTradeTickerList
} from '../../../actions/actionCreators';

import Store from '../../../store';

const SAFE_TRADE_UPDATE_INTERVAL = 300000;

class SafeTrade extends React.Component {
    constructor(){
        super();
        this.safeTradeInterval = null;
    }

    componentWillMount(){
        Store.dispatch(safeTradePairList());
        Store.dispatch(safeTradeTickerList()); 
        this.safeTradeInterval = setInterval(() => {
            Store.dispatch(safeTradePairList());
            Store.dispatch(safeTradeTickerList());
        }, SAFE_TRADE_UPDATE_INTERVAL);              
    }

    componentWillUnmount(){
        if (this.safeTradeInterval){
            clearInterval(this.safeTradeInterval);
        }
    }

    render() {
        return SafeTradeRender.call(this);
    }    
}

const mapStateToProps = (state) => {
    return {
        pairs: state.SafeTrade.pairs,
        activePair: state.SafeTrade.activePair,
        tickers: state.SafeTrade.tickers,
    };
};

export default connect(mapStateToProps)(SafeTrade);

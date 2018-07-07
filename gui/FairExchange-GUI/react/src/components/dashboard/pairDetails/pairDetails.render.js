import React from 'react';

const PairDetailsRender = function() {
    return (
        <div className="container">
            <div className="row">
                    <div className="widget widget-shadow">
                    <div className="widget-content">
                        <div className="padding-20 padding-top-10">
                        <div className="clearfix cursor-default">
                            <div className="pull-left padding-vertical-10">
                            BUY :
                            </div>
                            <span
                            className="pull-right padding-top-10 font-size-22">
                            { this.props.tickers[this.props.activePair.id].ticker.buy + ' ' + this.getCurrency() }
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="widget widget-shadow">
                    <div className="widget-content">
                        <div className="padding-20 padding-top-10">
                        <div className="clearfix cursor-default">
                            <div className="pull-left padding-vertical-10">
                            SELL :
                            </div>
                            <span
                            className="pull-right padding-top-10 font-size-22">
                            { this.props.tickers[this.props.activePair.id].ticker.sell + ' ' + this.getCurrency() }
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="row">
                    <div className="widget widget-shadow">
                    <div className="widget-content">
                        <div className="padding-20 padding-top-10">
                        <div className="clearfix cursor-default">
                            <div className="pull-left padding-vertical-10">
                            LAST :
                            </div>
                            <span
                            className="pull-right padding-top-10 font-size-22">
                            { this.props.tickers[this.props.activePair.id].ticker.last + ' ' + this.getCurrency() }
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                

                <div className="col">
                    <div className="widget widget-shadow">
                    <div className="widget-content">
                        <div className="padding-20 padding-top-10">
                        <div className="clearfix cursor-default">
                            <div className="pull-left padding-vertical-10">
                            24HR HIGH :
                            </div>
                            <span
                            className="pull-right padding-top-10 font-size-22">
                            { this.props.tickers[this.props.activePair.id].ticker.high + ' ' + this.getCurrency() }
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="widget widget-shadow">
                    <div className="widget-content">
                        <div className="padding-20 padding-top-10">
                        <div className="clearfix cursor-default">
                            <div className="pull-left padding-vertical-10">
                            24HR LOW :
                            </div>
                            <span
                            className="pull-right padding-top-10 font-size-22">
                            { this.props.tickers[this.props.activePair.id].ticker.low + ' ' + this.getCurrency() }
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>

                <div className="col">
                    <div className="widget widget-shadow">
                    <div className="widget-content">
                        <div className="padding-20 padding-top-10">
                        <div className="clearfix cursor-default">
                            <div className="pull-left padding-vertical-10">
                            24HR VOLUME :
                            </div>
                            <span
                            className="pull-right padding-top-10 font-size-22">
                            { this.props.tickers[this.props.activePair.id].ticker.vol + ' ' + this.getVolumeCurrency() }
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            
    );
}

export default PairDetailsRender;
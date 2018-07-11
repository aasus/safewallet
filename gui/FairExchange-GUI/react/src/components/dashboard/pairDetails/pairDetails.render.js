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
                            <p className="text-success">BUY :</p>
                            </div>
                            <span
                            className="pull-right padding-top-10 font-size-22">
                            <p className="text-success">{ this.props.tickers[this.props.activePair.id].ticker.buy + ' ' + this.getCurrency() }</p>
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
                            <p className="text-danger">SELL :</p>
                            </div>
                            <span
                            className="pull-right padding-top-10 font-size-22">
                            <p className="text-danger">{ this.props.tickers[this.props.activePair.id].ticker.sell + ' ' + this.getCurrency() }</p>
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
                

                
                    <div className="widget widget-shadow">
                    <div className="widget-content">
                        <div className="padding-20 padding-top-10">
                        <div className="clearfix cursor-default">
                            <div className="pull-left padding-vertical-10">
                            <p className="text-success">24HR HIGH :</p>
                            </div>
                            <span
                            className="pull-right padding-top-10 font-size-22">
                            <p className="text-success">{ this.props.tickers[this.props.activePair.id].ticker.high + ' ' + this.getCurrency() }</p>
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
                            <p className="text-danger">24HR LOW :</p>
                            </div>
                            <span
                            className="pull-right padding-top-10 font-size-22">
                            <p className="text-danger">{ this.props.tickers[this.props.activePair.id].ticker.low + ' ' + this.getCurrency() }</p>
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
            
    );
}

export default PairDetailsRender;
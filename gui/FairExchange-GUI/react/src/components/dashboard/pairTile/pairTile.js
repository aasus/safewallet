import React from 'react';
import { connect } from 'react-redux';
import PairTileRender from './pairTile.render';


import PairTileItem from './pairTileItem';

class PairTile extends React.Component {
    constructor(){
        super();
        this.renderTiles = this.renderTiles.bind(this);
    }

    renderTiles(){
        let _pairs = this.props.pairs;
        if (_pairs){
            let items = [];
            _pairs.map(function(pair){
                    const _id = pair.id;
                    const _name = pair.name;
                    items.push({
                        _id,
                        _name
                    });
                }            
            );

            return (
                items.map((item, i) =>
                    <PairTileItem
                    key={ i }
                    i={ i }
                    item={ item } />)
            )
        }    
    }

    render() {
        return PairTileRender.call(this);
    }
}

const mapStateToProps = (state) => {
    return {
       pairs: state.SafeTrade.pairs,
    };
};
  
export default connect(mapStateToProps)(PairTile);
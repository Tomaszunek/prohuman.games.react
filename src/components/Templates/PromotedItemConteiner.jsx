import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../Templates/NewsItem.jsx';

export default class PromotedItemConteiner extends Component {    

    constructor(props) {
        super(props);
    }

    listItems(items) {
        return items.map((item, index) => {
            return <NewsItem key={index} item={item}/>;
        });
    }

    render() {
        return (           
            <div className="promoted-items">                               
                {this.listItems(this.props.promotedItems)}
            </div>
        );
    }
}

PromotedItemConteiner.propTypes = {
    promotedItems: PropTypes.array
};
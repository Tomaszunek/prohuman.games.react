import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../Templates/NewsItem.jsx';

export default class ItemConteiner extends Component {    

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
            <div className="items-cont">                               
                {this.listItems(this.props.items)}
            </div>
        );
    }
}

ItemConteiner.propTypes = {
    items: PropTypes.array
};
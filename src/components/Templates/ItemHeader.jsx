import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemHeader extends Component {

    constructor() {
        super();
    }

    listCategories(categories) {        
        return categories.map((category, index) => {
            const className = 'category ' + category.Category.type + ' ' + category.Category.class;
            return <p key={index} className ={className}>{category.Category.class.charAt(0)}</p>;
        });
    }

    render() {
        const { item } = this.props;
        return (           
            <div className="item-header">
                <div className="item-header-categories">
                    <div className="item-header-categories-cont">
                        { (item.CategoryTags.length ? this.listCategories(item.CategoryTags) : '')}
                    </div>                    
                </div>
                <div className="item-header-body">
                    
                </div>
                <p className="item-header-name">{item.name}</p>                          
            </div>
        );
    }
}

ItemHeader.propTypes = {
    item: PropTypes.object,
    categories: PropTypes.object
};

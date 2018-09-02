import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemHeader from '../Templates/ItemHeader.jsx';


export default class NewsItem extends Component {
    
    constructor(props) {
        super(props);
        //this.nextSlide = this.nextSlide.bind(this);
        this.state = { name:''};        
    }   

    render() {
        const { item, categories } = this.props;
        const style = {
            background: 'url('+ this.props.item.imagePath + ')',
            minHeight: '300px',
            backgroundSize: '100% 100%'
        };
        return (           
            <div className='news-item' style={style}>
                <ItemHeader item={item} categories={categories}/>
            </div>
        );
    }    
}

NewsItem.propTypes = {
    item: PropTypes.object,
    categories: PropTypes.object
};


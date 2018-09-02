import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemHeader from '../Templates/ItemHeader.jsx';


export default class Slide extends Component {

    constructor(props) {
        super(props);
        //this.nextSlide = this.nextSlide.bind(this);
    }   


    render() {
        const { slide, categories } = this.props;
        const style = {
            background: 'url('+ this.props.slide.imagePath + ')',
            minHeight: '850px',
            display: this.props.hide
        };
        return (
            <div className="image-slide" style={style}>
                <ItemHeader item={slide} categories={categories}/>
            </div>
        );
    }
}

Slide.propTypes = {
    slide: PropTypes.object,
    categories: PropTypes.object,
    hide: PropTypes.string
};

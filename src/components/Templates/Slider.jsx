import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide.jsx';

export default class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            translateValue: 0,
            slides: []
        };        
    }

    slideItems(slides) {
        return slides.map((slide, index) => {
            return <Slide key={index} slide={slide} hide={(index == this.state.currentImageIndex ? 'block' : 'none')}/>;
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.changeSlide(), 3000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    changeSlide() {
        let slideIndex = this.state.currentImageIndex;        
        this.setState({
            currentImageIndex: ((this.props.slides.length == slideIndex + 1) ? 0 : ++slideIndex)
        });
    }

    render() {
        return (           
            <div className="slider">                
                {this.slideItems(this.props.slides)}                                                 
            </div>
        );
    }
}

Slider.propTypes = {
    slides: PropTypes.array
};


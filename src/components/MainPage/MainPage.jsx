import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '../Templates/Slider.jsx';
import ItemConteiner from '../Templates/ItemConteiner.jsx';
import PromotedItemConteiner from '../Templates/PromotedItemConteiner.jsx';

export default class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slides: [],
            promotedItems: [],
            items: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        fetch('https://apiprohuman.herokuapp.com/api/mainpage/content')
            .then(response => response.json())
            .then(data => this.setState({ 
                slides: data.result.slides,
                promotedItems: data.result.promotedItems,
                items: data.result.items,
            }));
    }

    render() {
        const {slides, promotedItems, items} = this.state;
        return (            
            <section className="main-page">           
                <Slider  slides={slides}/>
                <PromotedItemConteiner promotedItems={promotedItems}/>
                <ItemConteiner items={items}/>
            </section>
        );
    }
}

MainPage.propTypes = {
    slides: PropTypes.object,
    promotedItems: PropTypes.object,
    items: PropTypes.object
};


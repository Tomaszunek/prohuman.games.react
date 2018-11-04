import React, { Component } from 'react';
import SearchContainer from '../Templates/SearchContainer.jsx';

export default class NewsPage extends Component {

    constructor() {
        super();

        this.state = {
            items: []
        };
    }

    render() {
        return (            
            <section>
                <SearchContainer typeSearch='news'/>
            </section>
        );
    }
}
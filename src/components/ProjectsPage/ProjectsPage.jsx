import React, { Component } from 'react';
import SearchContainer from '../Templates/SearchContainer.jsx';

export default class ProjectsPage extends Component {

    constructor() {
        super();

        this.state = {
            items: []
        };
    }

    render() {
        return (            
            <section>
                <SearchContainer typeSearch='projects'/>
            </section>
        );
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemConteiner from '../Templates/ItemConteiner.jsx';
import SearchBar from '../Templates/SearchBar.jsx';

export default class SearchContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }
    

    componentDidMount() {
        const { typeSearch } = this.props;
        fetch('https://apiprohuman.herokuapp.com/api/search-content')
            .then(response => response.json())
            .then(data => this.setState({
                items: data.result[typeSearch]
            }));
    }

    render() {
        const { items } = this.state;
        return (            
            <section>
                <SearchBar/>
                <ItemConteiner items={items}/>
            </section>
        );
    }
}

SearchContainer.propTypes = {
    typeSearch: PropTypes.string,
};
import React, { Component } from 'react';
import logo from '../logo.png';
import Navigation from './Navigation/Navigation.jsx';
import Footer from './Footer/Footer.jsx';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
           
            <div className='container'>
                <Navigation/>                
                <img className='logo' src={logo} />
                <h1 className='title'>React Starter</h1>
                <Footer/>
            </div>
        );
    }
}
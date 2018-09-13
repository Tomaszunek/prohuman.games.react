import React, { Component } from 'react';
import Navigation from './Navigation/Navigation.jsx';
import Footer from './Footer/Footer.jsx';
import MainPage from './MainPage/MainPage.jsx';
import AboutPage from './AboutPage/AboutPage.jsx';

import {
    BrowserRouter as Router,
    Route    
} from 'react-router-dom';


export default class App extends Component {

    constructor() {
        super();
    }    

    render() {
        return (
            <div>  
                <Navigation/>          
                <Router>
                    <div className="container">
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/about" component={AboutPage} />
                    </div>                    
                </Router>
                <Footer/>
            </div>
        );  
    }
}
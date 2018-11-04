import React, { Component } from 'react';
import Navigation from './Navigation/Navigation.jsx';
import Footer from './Footer/Footer.jsx';
//import RouteComponent from './RouteComponent.jsx';
import MainPage from './MainPage/MainPage.jsx';
import AboutPage from './AboutPage/AboutPage.jsx';
import NewsPage from './NewsPage/NewsPage.jsx';
import ShopPage from './ShopPage/ShopPage.jsx';
import AccountPage from './AccountPage/AccountPage.jsx';
import ProjectsPage from './ProjectsPage/ProjectsPage.jsx';
import Error from './Error/Error.jsx';
import SingleProduct from './SingleProduct/SingleProduct.jsx';
import SingleProject from './SingleProject/SingleProject.jsx';
import SingleNews from './SingleNews/SingleNews.jsx';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


export default class App extends Component {

    constructor() {
        super();        
    }    
    
    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <Switch>                   
                        <Route exact path='/' component={MainPage}/>
                        <Route path='/news' component={NewsPage}/>
                        <Route path='/about' component={AboutPage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route path='/account' component={AccountPage}/>
                        <Route path='/projects' component={ProjectsPage}/>
                        <Route path='/product/:id' component={SingleProduct}/>
                        <Route path='/project/:id' component={SingleProject}/>
                        <Route path='/news/:id' component={SingleNews}/>
                        <Route component={Error}/>
                    </Switch> 
                    <Footer/>
                </div>
            </Router>  
        );  
    }
}
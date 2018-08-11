// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
//import Navigation from './components/Navigation/Navigation.jsx';
//import Footer from './components/Footer/Footer.jsx';

// COMPONENTS

import App from './components/App.jsx';

// STYLES

import 'normalize.css';
import './styles/app.scss';

//import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(
//     <Navigation/>,
//     <Router history={hashHistory}>
//         <Route path="/" component={Navigation}/>
//         <Route path="/footer" component={Footer}/>
//     </Router>,
//     document.getElementById('app'),
//     <Footer/>
// );
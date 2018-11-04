import React, { Component } from 'react';
import { 
    NavLink    
} from 'react-router-dom';

export default class Footer extends Component {

    constructor() {
        super();
    }

    render() {
        return (           
            <footer>                             
                <div className="footer-link-cont">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/linkedin">LinkedIN</NavLink>
                    <NavLink to="/twitch">Twitch</NavLink>
                </div>
                <div className="footer-link-cont">
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About us</NavLink>
                    <NavLink to="/account">Account</NavLink>
                    <NavLink to="/youtube">Yoututbe</NavLink>
                    <NavLink to="/facebook">Facebook</NavLink>
                    <NavLink to="/pintrest">Pinterest</NavLink>
                </div>
            </footer>
        );
    }
}
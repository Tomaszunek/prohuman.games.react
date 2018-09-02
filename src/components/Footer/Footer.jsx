import React, { Component } from 'react';

export default class Footer extends Component {

    constructor() {
        super();
    }

    render() {
        return (           
            <footer>                             
                <div className="footer-link-cont">
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">Contact</a>
                    <a href="">News</a>
                    <a href="">LinkedIN</a>
                    <a href="">Twitch</a>
                </div>
                <div className="footer-link-cont">
                    <a href="">Projects</a>
                    <a href="">About us</a>
                    <a href="">Account</a>
                    <a href="">Yoututbe</a>
                    <a href="">Facebook</a>
                    <a href="">Pinterest</a>
                </div>
            </footer>
        );
    }
}
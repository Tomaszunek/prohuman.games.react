import React, { Component } from 'react';

export default class Navigation extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            height: 0,
            white_background: 'navigation'
        };        
    }    

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    
    handleScroll() { 
        this.setState({ 
            white_background: (window.pageYOffset > 80 ? 'navigation white_background' : 'navigation' ), 
            height: window.pageYOffset 
        });
    }
    
    render() {
        const style = {
            top: this.state.height
        };
        return (           
            <nav className={this.state.white_background} style={style}>                             
                <div className='navigation__logo'>
                    <a href="/">
                        ProHuman Games
                    </a>
                </div>
                <ul>                    
                    <li>
                        <a href="/news">News</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a className="navigation__shop" href="/shop">Shop</a>
                    </li>
                    <li>
                        <a href="/about">About us</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <div className="navigation__account">
                    <a href="/account">Account</a>
                </div>
                <div className="clearfix"></div>
            </nav>
            
        );
    }
}
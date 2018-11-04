import React, { Component } from 'react';
import { 
    NavLink    
} from 'react-router-dom';
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
                    <NavLink to="/">ProHuman Studio</NavLink>
                </div>
                <ul>                    
                    <li>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink className="navigation__shop" to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="navigation__account">
                    <NavLink to="/account">Account</NavLink>
                </div>
                <div className="clearfix"></div>
            </nav>               
        );
    }
}
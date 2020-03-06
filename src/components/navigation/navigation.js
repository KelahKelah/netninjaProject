import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navar-header">
                        <a className="navbar-brand" href="">Todo</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/contact">Contact </NavLink></li>
                        <li><NavLink to="/contact">Logout </NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navigation;
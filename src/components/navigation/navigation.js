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
                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search Todo" />
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/contact">Contact Us </NavLink></li>
                        <li><NavLink to="/logout">Logout </NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navigation;
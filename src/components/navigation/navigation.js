import React from 'react';
import {Link, NavLink } from 'react-router-dom'

const Navigation = () => {
    return(
        <div>
            <nav>
                <div>
                    <a href="">Todo</a>
                    <ul className="">
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
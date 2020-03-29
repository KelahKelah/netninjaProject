import React from 'react';
import './navigation.css'
import {Link, NavLink } from 'react-router-dom';
import { FaAccusoft, FaSistrix, FaAngleDown, FaAngleUp } from 'react-icons/fa';


const Navigation = () => {
    return(
        <nav className='my-4 nav-wrapper d-flex'>
            <div className="d-flex" >
                <i><FaAccusoft style={{fontSize: '1.5em', color: '#c2c2a3'}}/></i>  
                <p>Toodoo</p>
            </div>
            <form style={{margin:'0px 10px 0px 200px'}} className="ml-5 d-flex"> 
                     <div style={{width: '562px', border:'solid #e6e6e6 1px', height: '32px', padding: '0 5px'}} type="text" role="Search">Search</div>    
                     <div style={{cursor: 'pointer', borderRadius: '0 2px 2px 0', margin: '0', color: '#ccc', border:'solid #e6e6e6 1px', backgroundColor: '#f8f8f8', width: '65px', height: '32px'}}><FaSistrix /></div>
            </form>
            <ul className={'d-flex ml-5'} style={{width:'40%' }}>
                <p><Link to="/" className='ml-5 text-dark'>Home</Link></p><span><FaAngleDown /></span>
                <p><NavLink to="/contact" className='ml-5 text-dark'>Contact Us </NavLink></p>
                <p><NavLink to="/hooks" className='ml-5 text-dark'>Sign Up</NavLink></p>            
                <p><NavLink to="/logout" className='ml-5 text-dark'>Logout </NavLink></p>
                <p><NavLink to="/login" className='ml-5 text-dark'>Login </NavLink></p>
            </ul>
        </nav>
    )
}
export default Navigation;
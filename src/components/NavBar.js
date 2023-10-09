import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <ul id='navbar-menu' className='navbar1'>
                <li style={{ color: 'white', fontSize: 30, paddingTop: 5 }}>DisasterMapAI</li>
            </ul>
            <ul id='navbar-menu' className='navbar2'>
                <li style={{ color: 'white', fontSize: 20 }}><Link to='/'>Home</Link></li>
                <li style={{ color: 'white', fontSize: 20 }}><Link to='/about'>About</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;
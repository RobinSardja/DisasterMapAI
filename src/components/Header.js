import React from 'react';
import NavBar from './NavBar';

export default function Header() {
    return (        
        <div className='app-header'>
            <div className='center'><h1>EmergenSAVE</h1></div>
            <NavBar />
        </div>
    )
}
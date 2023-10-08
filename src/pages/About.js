import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return(
        <div className='App'>
            <Header />
            <div className='grid-half'>
                <div>
                    <h1>What is EmergenSAVE?</h1>
                    <p>EmergenSAVE is a natural disaster response tool. EmergenSAVE maps natural disasters across the USA to warn civilians and authorities
                         of possible danger through live tracking and AI. EmergenSAVE uses AI to scour news sources for the latest information on natural disaster 
                         movement and tracking, and maps the area that may be affected.</p>
                </div>
                <img src="https://i.pinimg.com/originals/42/4a/d6/424ad6a3cf762c0c909bdd8385c9e5e6.jpg" alt="EmergenSAVE logo"></img>
                <p>Hello World!</p>
                <p>Hello World!</p>
            </div>

            <Footer />
        </div>
        
    );
};

export default About;
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
            <p style={{ color: 'white', fontSize: 30}}>Please look through this slideshow to learn more about DisasterMapAI!</p>
                <div>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ8Kj-UI4Km_cQVc7hPAUTO0rV4aXKKlDfvIAkar6I0vzdWmSd2d9rM2XBQPyd-sVvSajfi5qii_pot/embed?start=true&loop=true&delayms=15000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </div>

            <Footer />
        </div>
        
    );
};

export default About;
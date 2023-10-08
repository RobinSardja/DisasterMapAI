import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MapBox from '../components/MapBox';
import TextBox from '../components/TextBox';

const Home = () => {
    return (
        <div>
            <Header />
                <div>
                  <h1>Map of Natural Disasters in the US in 2023</h1>
                  <MapBox />
                  </div>
            <Footer />
        </div>
    );
};

export default Home;
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
                  <h1>Prepare, Respond, Recover</h1>
                  <MapBox />
                  </div>
            <Footer />
        </div>
    );
};

export default Home;
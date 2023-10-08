import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class TextBox extends React.Component{
    render() {
      return (
        <div>
          <p>Halloween-themed Pokémon are Pokémon that have creepy, spooky, or festive appearances or abilities that fit the Halloween mood. They include Ghost-type Pokémon, as well as some Dark and Psychic-type Pokémon. Some examples of Halloween-themed Pokémon are Gengar, Mismagius, Pumpkaboo, Mimikyu, and Polteageist. There are different ways to enjoy Halloween-themed Pokémon, such as building teams for battles or raids, collecting cards with special stamps, or decorating with statues and candy bowls.</p>
        </div>
      );
    };
};
  
class MapBox extends React.Component{
    render() {
      return (
        <div>
          <img src="https://wallpapercave.com/wp/wp2507263.png" alt="PokeHalloween!"></img>
        </div>
      );
    };
};

const Home = () => {
    return (
        <div>
            <Header />
            <div className="grid-container">
                <TextBox />
                <MapBox />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
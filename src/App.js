import React, {Component} from 'react';
import './App.css';

class TextBox extends React.Component{
  render() {
    return (
      <div>
        <p>Text here :D</p>
      </div>
    )
  }
}

class MapBox extends React.Component{
  render() {
    return (
      <div>
        <p>Image here :0</p>
        <a href="https://media.licdn.com/dms/image/D4D03AQEHfGQTbF6yyQ/profile-displayphoto-shrink_100_100/0/1665005596052?e=1701907200&v=beta&t=N4HM0TlTDBb-3Np32Kkf-Gv8LnTIE-BrDl-byS4bzWE">Click here</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
        <div className="grid-container">
          <TextBox />
          <MapBox />
        </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import GetWeather from './containers/getWeather';
import NavBar from './components/Navigation/NavBar'


function App() {
  return (
    <div data-spy="scroll" data-target="#scrollspy" data-offset="50" className="App" >
      <NavBar />
      <GetWeather />
    </div>
  );
}

export default App;

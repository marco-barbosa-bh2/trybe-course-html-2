import React from 'react';
import './App.css';
import Fetch from './Fetch';

function App() {
  return (
    <div className="App">
      <Fetch url={'https://dog.ceo/api/breeds/image/random'}/>
    </div>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';

const compromissos = ['acordar', 'escovar os dentes', 'tomar café da manhã'];

const task = (value) => {
  return (
    value.map(e =><li>{e}</li>)
  );
}

function App() {
   return task(compromissos); 
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;

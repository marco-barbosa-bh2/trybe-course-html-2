import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <Button />
      </div>
    </ Provider>
  );
}

export default App;

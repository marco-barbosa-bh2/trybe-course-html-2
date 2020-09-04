import  React, { useState } from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import ClickContext from './components/ClickContext';
import './App.css';

const App =  () => {
  const [clicks, setClicks] = useState(0);
  const updateClicks = () => setClicks((currentClicks) => currentClicks + 1);
  return (
    <ClickContext.Provider value={{clicks, updateClicks}}>
      <div>
        <Counter />
        <Button />
      </div> 
    </ClickContext.Provider>
  );
}

export default App;

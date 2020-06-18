import React, { useContext } from 'react';
import ClickContext from './ClickContext';

const Counter = () => {
  const value = useContext(ClickContext);
  return (
    <div>
      <h2>Contador de Clicks</h2>
      <span>Clicks: </span><span>{value.clicks}</span>
    </div>
  );
}

export default Counter;

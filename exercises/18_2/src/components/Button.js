import React, { useContext } from 'react';
import ClickContext from './ClickContext';

const Button = () => {
  const { updateClicks } = useContext(ClickContext);
  return (
    <div>
      <button onClick={() => updateClicks()}>Click</button>
    </div>
  );
}

export default Button;

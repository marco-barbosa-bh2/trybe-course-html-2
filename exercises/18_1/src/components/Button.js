import React from 'react';
import ClickContext from './ClickContext';

class Button extends React.Component {
  render() {
    const { updateClicks } = this.context;
    return (
      <div>
        <button onClick={() => updateClicks()}>Click</button>
      </div>
    );
  };
}

Button.contextType = ClickContext;

export default Button;

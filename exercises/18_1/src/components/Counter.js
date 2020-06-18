import React from 'react';
import ClickContext from './ClickContext';

class Counter extends React.Component {
  render() {
    const value = this.context;
    return (
        <div>
          <h2>Contador de Clicks</h2>
          <span>Clicks: </span><span>{value.clicks}</span>
        </div>
    );
  };
}

Counter.contextType = ClickContext;

export default Counter;

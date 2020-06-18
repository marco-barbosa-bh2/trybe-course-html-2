import React from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import ClickContext from './components/ClickContext';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicks: 0,
    };
    this.updateClicks = this.updateClicks.bind(this);
  }

  updateClicks() {
    let actualClicks = this.state.clicks;
    actualClicks += 1;
    this.setState({
      clicks: actualClicks,
    });

  }

  render() {
    const clicks = this.state.clicks;
    return (
      <ClickContext.Provider value={{clicks, updateClicks: this.updateClicks}}>
        <div>
          <Counter />
          <Button />
        </div> 
      </ClickContext.Provider>
    );
  }
}

export default App;

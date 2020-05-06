import React, { Component } from 'react';
import './App.css';
import './DropDown.css'
import DropDown from './DropDown';

const content =
[
  {id: 1, item: 'a'},
  {id: 2, item: 'b'},
  {id: 3, item: 'c'},
  {id: 4, item: 'd'},
];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listItemClicked: content[0].item,
      isClicked: false,
    }
  }
  
  clickedState = (event) => {
    const value = event.target.innerText;
    this.setState((state) => ({ isClicked: !state.isClicked }));
    this.setState((state)=>({ listItemClicked: value}));
  };

  render() {
    return (
      <div className="App">
        <div>
        <DropDown list = {content}
        >
        Minha Lista de Tarefas
        </DropDown>
        </div>        
      </div>
    )
  }
}

export default App;

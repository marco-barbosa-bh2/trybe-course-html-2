import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  render() {
    const { listTodo } = this.props;
    return (
      <div className="App">
        <InputTodo />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listTodo: [...state.todosReducer.listToDo],
});


export default connect(mapStateToProps)(App);

App.propTypes = {
  listTodo: PropTypes.arrayOf(String).isRequired,
}

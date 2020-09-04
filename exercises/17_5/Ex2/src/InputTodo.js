import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as actions from './actions/index';
class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value })
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' })
    callback(value)
  }

  render() {
    const { textTodo } = this.state;
    const { addTodo } = this.props;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange= {(e) => this.changeTextTodo(e.target.value)}
        />
        <input id="btnAdd" type="button" value="Adicionar" onClick={() => this.addItem(textTodo,addTodo)} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (e) => dispatch(actions.addTodo(e)),
});

export default connect(null,mapDispatchToProps)(InputTodo);

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

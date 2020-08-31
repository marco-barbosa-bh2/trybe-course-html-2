import React from 'react';
import { connect } from 'react-redux';
import { countAction } from '../actions';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.countUp()}>Click</button>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  countUp: () => dispatch(countAction()), 
});


export default connect(null, mapDispatchToProps)(Button);

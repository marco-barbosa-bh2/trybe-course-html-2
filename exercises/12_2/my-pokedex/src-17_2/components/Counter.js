import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>Contador de Clicks</h2>
        <span>Clicks: </span><span>{this.props.countedClicks}</span>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  countedClicks: state.clickCounterReducer,
});

export default connect(mapStateToProps)(Counter);

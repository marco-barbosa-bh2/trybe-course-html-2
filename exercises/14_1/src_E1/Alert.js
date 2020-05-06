import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, children } = props;
  setTimeout(() => hideComponent(), props.children.timeSeconds*1000);
  return (
    <div className='Alert'>
      <h1>{props.children.title}</h1>
      <p>{props.children.content}</p>
    </div>
  )
}

Alert.propTypes = {
  hideComponent: PropTypes.func.isRequired,
  children: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      timeSeconds: PropTypes.number.isRequired
    }
  ).isRequired
    
};

export default Alert;

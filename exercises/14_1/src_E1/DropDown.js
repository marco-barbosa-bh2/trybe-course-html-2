import React from 'react';
import PropTypes from 'prop-types';

const DropDown = (props) => {
  const { content, listItemClicked, isCliked } = props;
  if(isCliked) return (<div>Boa!</div>);
  return (
    <div>
      <h1>{props.children.title}</h1>
      <div>
        <p>Item Clickado</p>
        <p>{listItemClicked}</p>
      </div>
      <select>
      {content.map((list) => <option key={list.id}>{list.item}</option>)}
      </select>
    </div>
  );
}

DropDown.protoTypes = {
  content: PropTypes.array.isRequired,
  children: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

export default DropDown;

import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.css'
import './App.css';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCliked: false,
      firstElement: props.list[0].item,
    }
    this.showList = this.showList.bind(this);
    this.selectElement = this.selectElement.bind(this);
  }

  showList() {
    this.setState((state)=>(
      {
      isCliked:!state.isCliked
      }
    ))
  }

  selectElement(event) {
    const selected = event.target.innerText;
    this.setState((state)=>(
      {
      firstElement: selected
      }
    ))
  }

  render() {
    const { list, children } = this.props;
    return (
      <div>
        <div>
          <span>{children}</span>
        </div>
        <div className="Drop drop-button" onClick={this.showList}>
          {this.state.firstElement}
        </div>
        {
          this.state.isCliked &&
          <div className="DropList drop-button" onClick={this.selectElement}>
          {list.map((item) => <p key={item.id}>{item.item}</p>)}
          </div>
        }
      </div>
    );
  }
}

DropDown.protoTypes = {
  list: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default DropDown;

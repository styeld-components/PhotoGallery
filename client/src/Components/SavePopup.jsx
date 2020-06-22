/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/SavePopup.css';

class SavePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onCloseHandler = this.onCloseHandler.bind(this);
  }

  onCloseHandler() {
    this.props.closePopup();
  }

  render() {
    return (
      <div className="save-popup">
        <div className="save-popup-inner">
          <button onClick={this.onCloseHandler}>close</button>
        </div>
      </div>
    );
  }
}

export default SavePopup;

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
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {

  }

  render() {
    return (
      <div className='save-popup'>
        <div className='save-popup-inner'>

        </div>
      </div>
    );
  }
}

export default SavePopup;

/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/SharePopup.css';

class SharePopup extends React.Component {
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
      <div  className='share-popup'>
        <div className='share-popup-inner'>
          <button>close</button>
        </div>
      </div>
    );
  }
}

export default SharePopup;

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import SVG from 'react-inlinesvg';
import CloseForm from './airbnb-close-form.svg';
import '../styles/SavePopup.css';

class SavePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: '',
      createValid: false,
    };
    this.onCloseHandler = this.onCloseHandler.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.onClickDetailHandler = this.onClickDetailHandler.bind(this);
  }

  onCloseHandler() {
    this.props.closePopup();
  }

  onInputChangeHandler(e) {
    this.setState({ listName: e.target.value, createValid: true });

    if (e.target.value.length === 0) {
      this.setState({ createValid: false });
    }
  }

  onClickDetailHandler() {
    this.props.backToGalleryDetail();
  }

  render() {
    const cursorClasses = this.state.createValid ? 'saveToList-create-btn allowed-cursor' : 'saveToList-create-btn not-allowed-cursor';

    return (
      <div className="save-popup">
        <div className="popup-outter" onClick={this.onClickDetailHandler}></div>
        <div className="save-popup-inner">
          <div className="close-form-btn-wrapper">
            <button className="close-form-btn" onClick={this.onCloseHandler}><SVG src={CloseForm} /></button>
          </div>
          <div className="saveToList-stl">
            Save to a list
          </div>
          <div className="saveToList-name">
            Name
          </div>
          <div className="saveToList-input-wrapper">
            <input className="saveToList-input" name="name" placeholder="Ex: Summer vacation" type="text" value={this.state.listName} onChange={this.onInputChangeHandler} />
          </div>
          <div className="saveToList-btn-wrapper">
            <button className={cursorClasses}>
              Create
            </button>
            <button className="saveToList-cancel-btn" onClick={this.onCloseHandler}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SavePopup;

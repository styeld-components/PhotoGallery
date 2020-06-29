/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */

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
    this.createListHandler = this.createListHandler.bind(this);
  }

  onCloseHandler() {
    const { closePopup } = this.props;
    closePopup();
  }

  onInputChangeHandler(e) {
    this.setState({ listName: e.target.value, createValid: true });

    if (e.target.value.length === 0) {
      this.setState({ createValid: false });
    }
  }

  onClickDetailHandler() {
    const { backToGalleryDetail } = this.props;
    backToGalleryDetail();
  }

  createListHandler() {
    const { listName } = this.state;
    const { saveToList } = this.props;
    saveToList(listName);
    this.setState({ listName: '' });
  }

  render() {
    const { createValid, listName } = this.state;
    const cursorClasses = createValid ? 'saveToList-create-btn allowed-cursor' : 'saveToList-create-btn not-allowed-cursor';

    return (
      <div className="save-popup">
        <div className="save-popup-outter" onClick={this.onClickDetailHandler}></div>
        <div className="save-popup-inner">
          <div className="close-form-btn-wrapper">
            <button className="close-form-btn" type="submit" onClick={this.onCloseHandler}><SVG src={CloseForm} /></button>
          </div>
          <div className="saveToList-stl">
            Save to a list
          </div>
          <div className="saveToList-name">
            Name
          </div>
          <div className="saveToList-input-wrapper">
            <input className="saveToList-input" name="name" placeholder="Ex: Summer vacation" type="text" value={listName} onChange={this.onInputChangeHandler} />
          </div>
          <div className="saveToList-btn-wrapper">
            <button className={cursorClasses} type="submit" onClick={this.createListHandler}>
              Create
            </button>
            <button className="saveToList-cancel-btn" type="submit" onClick={this.onCloseHandler}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SavePopup;

/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SharePopup from './SharePopup.jsx';
import SavePopup from './SavePopup.jsx';
import '../styles/GalleryDetail.css';

class GalleryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPhotoIdx: 0,
      showSharePopup: false,
      showSavePopup: false,
    };
    this.closeClickHandler = this.closeClickHandler.bind(this);
    this.nextClickHandler = this.nextClickHandler.bind(this);
    this.prevClickHandler = this.prevClickHandler.bind(this);
    this.shareClickHandler = this.shareClickHandler.bind(this);
    this.saveClickHandler = this.saveClickHandler.bind(this);
  }

  shareClickHandler() {
    this.setState({ showSharePopup: !this.state.showSharePopup });
  }

  saveClickHandler() {
    this.setState({ showSavePopup: !this.state.showSavePopup });
  }

  closeClickHandler() {
    this.props.onExitDetail();
  }

  nextClickHandler() {
    this.setState({ currPhotoIdx: this.state.currPhotoIdx + 1 });
  }

  prevClickHandler() {
    this.setState({ currPhotoIdx: this.state.currPhotoIdx - 1 });
  }

  render() {
    // let currPhotoIdx = 1;
    // let currImage = this.props.photos.room_photos[4].imageUrl;
    let prevBtn;
    let nextBtn;
    if (this.state.currPhotoIdx === 0) {
      prevBtn = null;
    } else {
      prevBtn = <button className="prevBtn" onClick={this.prevClickHandler}>prev</button>;
    }

    if (this.state.currPhotoIdx === this.props.photos.room_photos.length - 1) {
      nextBtn = null;
    } else {
      nextBtn = <button className="nextBtn" onClick={this.nextClickHandler}>next</button>;
    }

    let popUp;
    if (this.state.showSavePopup) {
      popUp = <SavePopup closePopup={this.saveClickHandler} />;
    } else if (this.state.showSharePopup) {
      popUp = <SharePopup closePopup={this.shareClickHandler} />;
    } else {
      popUp = null;
    }

    return (
      <div>
        {popUp}
        <div className="detail-top-row">
          <button className="closeBtn" onClick={this.closeClickHandler}>Close</button>
          <span className="idxInfo">
            {this.state.currPhotoIdx + 1}
            {' / '}
            {this.props.photos.room_photos.length}
          </span>
          <button className="saveListBtn" onClick={this.saveClickHandler}>Save Icon</button>
          <button className="shareBtn" onClick={this.shareClickHandler}>Share Icon</button>
        </div>
          <div>
              {prevBtn}

              <img className="detailImg" src={this.props.photos.room_photos[this.state.currPhotoIdx].imageUrl} />

              {nextBtn}
              </div>
      </div>
    );
  }
}

export default GalleryDetail;

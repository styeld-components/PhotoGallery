/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SharePopup from './SharePopup.jsx';
import SavePopup from './SavePopup.jsx';
import SVG from 'react-inlinesvg';
import Close from './airbnb-close.svg';
import Save from './airbnb-save.svg';
import Share from './airbnb-share.svg';
import Next from './airbnb-next.svg';
import Prev from './airbnb-prev.svg';
import '../styles/GalleryDetail.css';

class GalleryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPhotoIdx: this.props.clickedPhotoIdx || 0,
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
    console.log('clicked!')
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
      prevBtn = <button className="prevBtn" onClick={this.prevClickHandler}><SVG src={Prev} className="svg-prev" /></button>;
    }

    if (this.state.currPhotoIdx === this.props.photos.room_photos.length - 1) {
      nextBtn = null;
    } else {
      nextBtn = <button className="nextBtn" onClick={this.nextClickHandler}><SVG src={Next} /></button>;
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
          <button className="closeBtn" onClick={this.closeClickHandler}><SVG src={Close} />Close</button>
          <span className="idxInfo">
            {this.state.currPhotoIdx + 1}
            {' / '}
            {this.props.photos.room_photos.length}
          </span>
          <button className="saveListBtn" onClick={this.saveClickHandler}><SVG src={Save} /></button>
          <button className="shareBtn" onClick={this.shareClickHandler}><SVG src={Share} /></button>
        </div>
        <div className="detail-bottom-wrapper">
          <div className="prevBtn-wrapper">
            {prevBtn}
          </div>
          <img className="detailImg" src={this.props.photos.room_photos[this.state.currPhotoIdx].imageUrl} />
          <div className="nextBtn-wrapper">
            {nextBtn}
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryDetail;

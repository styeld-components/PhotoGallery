/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SVG from 'react-inlinesvg';
import SavePopup from './SavePopup.jsx';
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
      showSavePopup: false,
      fadeLoaded: false,
    };
    this.closeClickHandler = this.closeClickHandler.bind(this);
    this.nextClickHandler = this.nextClickHandler.bind(this);
    this.prevClickHandler = this.prevClickHandler.bind(this);
    this.shareClickHandler = this.shareClickHandler.bind(this);
    this.saveClickHandler = this.saveClickHandler.bind(this);
    this.backToGalleryDetail = this.backToGalleryDetail.bind(this);
  }

  shareClickHandler() {
    this.props.sharePopupHandler();
  }

  saveClickHandler() {
    this.setState({ showSavePopup: !this.state.showSavePopup });
  }

  closeClickHandler() {
    console.log('clicked!');
    this.props.onExitDetail();
  }

  nextClickHandler() {
    this.setState({ currPhotoIdx: this.state.currPhotoIdx + 1, fadeLoaded: !this.state.fadeLoaded });
  }

  prevClickHandler() {
    this.setState({ currPhotoIdx: this.state.currPhotoIdx - 1, fadeLoaded: !this.state.fadeLoaded });
  }

  backToGalleryDetail() {
    this.setState({
      showSavePopup: false,
    });
  }

  render() {
    console.log('clickedPhotodtail: ', this.props.clickedPhotoIdx)
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
      popUp = <SavePopup closePopup={this.saveClickHandler} backToGalleryDetail={this.backToGalleryDetail} />;
    } else {
      popUp = null;
    }

    const fadeClasses = this.state.fadeLoaded ? 'detailImg loaded1' : 'detailImg loaded2';

    return (
      <div className="galleryDetail-container">
        <div className="detail-top-row">
          <button className="closeBtn" onClick={this.closeClickHandler}>
            <SVG src={Close} />
            Close
          </button>
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
          <img className={fadeClasses} src={this.props.photos.room_photos[this.state.currPhotoIdx].imageUrl} />
          <div className="nextBtn-wrapper">
            {nextBtn}
          </div>
        </div>
        {popUp}
      </div>
    );
  }
}

export default GalleryDetail;

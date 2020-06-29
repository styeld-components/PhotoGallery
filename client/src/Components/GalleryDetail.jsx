/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
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
    const { sharePopupHandler } = this.props;
    sharePopupHandler();
  }

  saveClickHandler() {
    const { showSavePopup } = this.state;
    this.setState({ showSavePopup: !showSavePopup });
  }

  closeClickHandler() {
    const { onExitDetail } = this.props;
    onExitDetail();
  }

  nextClickHandler() {
    const { currPhotoIdx, fadeLoaded } = this.state;
    this.props.getCurrPhotoIdx(currPhotoIdx);
    this.setState({ currPhotoIdx: currPhotoIdx + 1, fadeLoaded: !fadeLoaded });
  }

  prevClickHandler() {
    const { currPhotoIdx, fadeLoaded } = this.state;
    this.setState({ currPhotoIdx: currPhotoIdx - 1, fadeLoaded: !fadeLoaded });
  }

  backToGalleryDetail() {
    this.setState({
      showSavePopup: false,
    });
  }

  render() {
    const { currPhotoIdx, showSavePopup, fadeLoaded } = this.state;
    const { photos, saveToList } = this.props;
    let prevBtn;
    let nextBtn;
    if (currPhotoIdx === 0) {
      prevBtn = null;
    } else {
      prevBtn = <button className="prevBtn" type="submit" onClick={this.prevClickHandler}><SVG src={Prev} className="svg-prev" /></button>;
    }

    if (currPhotoIdx === photos.room_photos.length - 1) {
      nextBtn = null;
    } else {
      nextBtn = <button className="nextBtn" type="submit" onClick={this.nextClickHandler}><SVG src={Next} /></button>;
    }

    let popUp;
    if (showSavePopup) {
      popUp = <SavePopup closePopup={this.saveClickHandler} backToGalleryDetail={this.backToGalleryDetail} saveToList={saveToList} />;
    } else {
      popUp = null;
    }

    const fadeClasses = fadeLoaded ? 'detailImg loaded1' : 'detailImg loaded2';

    return (
      <div className="galleryDetail-container">
        <div className="detail-top-row">
          <button className="closeBtn" type="submit" onClick={this.closeClickHandler}>
            <SVG src={Close} />
            Close
          </button>
          <span className="idxInfo">
            {currPhotoIdx + 1}
            {' / '}
            {photos.room_photos.length}
          </span>
          <button className="saveListBtn" type="submit" onClick={this.saveClickHandler}><SVG src={Save} /></button>
          <button className="shareBtn" type="submit" onClick={this.shareClickHandler}><SVG src={Share} /></button>
        </div>
        <div className="detail-bottom-wrapper">
          <div className="prevBtn-wrapper">
            {prevBtn}
          </div>
          <img className={fadeClasses} src={photos.room_photos[currPhotoIdx].imageUrl} />
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

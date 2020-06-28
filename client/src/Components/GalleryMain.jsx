/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../styles/GalleryMain.css';

class GalleryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.photoClickHandlerA = this.photoClickHandlerA.bind(this);
    this.photoClickHandlerB = this.photoClickHandlerB.bind(this);
    this.photoClickHandlerC = this.photoClickHandlerC.bind(this);
    this.photoClickHandlerD = this.photoClickHandlerD.bind(this);
    this.photoClickHandlerE = this.photoClickHandlerE.bind(this);
  }

  onClickHandler() {
    this.props.onShowAll();
  }

  photoClickHandlerA() {
    this.props.getClickedPhotoIdx(0);
  }

  photoClickHandlerB() {
    this.props.getClickedPhotoIdx(1);
  }

  photoClickHandlerC() {
    this.props.getClickedPhotoIdx(2);
  }

  photoClickHandlerD() {
    this.props.getClickedPhotoIdx(3);
  }

  photoClickHandlerE() {
    this.props.getClickedPhotoIdx(4);
  }

  render() {
    return (
      <div className="container">
        <div className="gallery-container w-2 h-2">
          <div className="gallery-item">
            <div className="image">
              <img onClick={this.photoClickHandlerA} src={this.props.photos.room_photos[0].imageUrl} />
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img onClick={this.photoClickHandlerB} src={this.props.photos.room_photos[1].imageUrl} />
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img onClick={this.photoClickHandlerC} src={this.props.photos.room_photos[2].imageUrl} />
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img onClick={this.photoClickHandlerD} src={this.props.photos.room_photos[3].imageUrl} />
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img onClick={this.photoClickHandlerE} src={this.props.photos.room_photos[4].imageUrl} />
              <button className="showAllBtn" type="submit" onClick={this.onClickHandler}>
                Show all photos
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryMain;

/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import GalleryDetail from './GalleryDetail.jsx';
import '../styles/GalleryMain.css';

class GalleryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoAClicked: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.photoClickHandlerA = this.photoClickHandlerA.bind(this);
  }

  onClickHandler() {
    this.props.onShowAll();
  }

  photoClickHandlerA() {
    this.setState({ photoAClicked: !this.state.photoAClicked });
  }

  render() {
    if (this.state.photoAClicked) {
      return <GalleryDetail clickedPhotoIdx={0} photos={this.props.photos} onExitDetail={this.props.onExitDetail} />;
    }
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
              <img src={this.props.photos.room_photos[1].imageUrl} />
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img src={this.props.photos.room_photos[2].imageUrl} />
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img src={this.props.photos.room_photos[3].imageUrl} />
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img src={this.props.photos.room_photos[4].imageUrl} />
            </div>
            <button className="showAllBtn" onClick={this.onClickHandler}>
              Show all photos
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryMain;

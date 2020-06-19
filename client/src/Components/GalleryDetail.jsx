import React from 'react';
import '../styles/GalleryDetail.css';

class GalleryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPhotoIdx: 0,
    };
    this.closeClickHandler = this.closeClickHandler.bind(this);
    this.nextClickHandler = this.nextClickHandler.bind(this);
  }

  closeClickHandler() {
    this.props.onExitDetail();
  }

  nextClickHandler() {
    this.setState({ currPhotoIdx: this.state.currPhotoIdx + 1 });
  }

  render() {
    // let currPhotoIdx = 1;
    // let currImage = this.props.photos.room_photos[4].imageUrl;

    return (
      <div>
        <button className="closeBtn" onClick={this.closeClickHandler}>Close</button>
    <span>{this.state.currPhotoIdx + 1 + ' / ' + this.props.photos.room_photos.length}</span>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img src={this.props.photos.room_photos[this.state.currPhotoIdx].imageUrl} />
              <button onClick={this.nextClickHandler}>next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryDetail;
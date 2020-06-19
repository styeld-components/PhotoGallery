import React from 'react';
import '../styles/GalleryDetail.css';

class GalleryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.onExitDetail();
  }

  render() {
    return (
      <div>
        <button className="closeBtn" onClick={this.onClickHandler}>Close</button>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              {/* <img src={this.props.photos.room_photos[4].imageUrl} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryDetail;
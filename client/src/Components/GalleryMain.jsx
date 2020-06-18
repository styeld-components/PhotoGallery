import React from 'react';

class GalleryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="gallery-container">
          <div className="image">
            <img src={this.props.photos.room_photos[0].imageUrl} />
          </div>
        </div>
        <div className="gallery-container">
          <div className="image">
            <img src={this.props.photos.room_photos[1].imageUrl} />
          </div>
        </div>
        <div className="gallery-container">
          <div className="image">
            <img src={this.props.photos.room_photos[2].imageUrl} />
          </div>
        </div>
        <div className="gallery-container">
          <div className="image">
            <img src={this.props.photos.room_photos[3].imageUrl} />
          </div>
        </div>
        <div className="gallery-container">
          <div className="image">
            <img src={this.props.photos.room_photos[4].imageUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryMain;
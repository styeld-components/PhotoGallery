import React from 'react';
// import '../../dist/style.css'
import '../styles/GalleryMain.css';

class GalleryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <div className="gallery-container w-2 h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={this.props.photos.room_photos[0].imageUrl} />
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
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryMain;
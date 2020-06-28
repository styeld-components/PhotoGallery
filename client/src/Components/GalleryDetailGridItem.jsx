import React from 'react';
import '../styles/GalleryDetailGridItem.css';

class GalleryDetailGridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="gallerydetailgrid-sub-container">
        <div className="gallerydetailgrid-item">
          <div className="gallerydetailgrid-image">
            <img src={this.props.photo.imageUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryDetailGridItem;

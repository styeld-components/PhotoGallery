import React from 'react';
import '../styles/GalleryDetailGridItem.css';

class GalleryDetailGridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.imageClickHandler = this.imageClickHandler.bind(this);
  }

  imageClickHandler() {
    this.props.getClickedPhotoIdxfromGrid(this.props.photoIdx);
  }

  render() {
    return (
      <div className="gallerydetailgrid-sub-container">
        <div className="gallerydetailgrid-item">
          <div className="gallerydetailgrid-image">
            <img onClick={this.imageClickHandler} src={this.props.photo.imageUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryDetailGridItem;

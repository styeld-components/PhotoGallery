import React from 'react';
import GalleryDetailGridItem from './GalleryDetailGridItem.jsx';
import SVG from 'react-inlinesvg';
import Prev from './airbnb-prev-detail.svg';
import '../styles/GalleryDetailGrid.css';

class GalleryDetailGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onPrevClick = this.onPrevClick.bind(this);
  }

  onPrevClick() {
    this.props.onExitDetail();
  }

  render() {
    console.log(this.props.photos)
    return (
      <div>
        <div>
          <button className="gallerydetailgrid-back-btn" onClick={this.onPrevClick}><SVG src={Prev} /></button>
        </div>
        <div className="gallerydetailgrid-container">
          {this.props.photos.room_photos.map((item, index) => <GalleryDetailGridItem photo={item} key={index} />)}
        </div>
      </div>
    );
  }
}

export default GalleryDetailGrid;

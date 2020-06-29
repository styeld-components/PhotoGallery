/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import '../styles/GalleryMainGrid.css';

class GalleryMainGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { photos } = this.props;
    return (
      <div>
        <img src={photos.room_photos[0].imageUrl} />
      </div>
    );
  }
}

export default GalleryMainGrid;

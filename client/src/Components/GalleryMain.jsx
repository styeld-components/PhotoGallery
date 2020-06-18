import React from 'react';

class GalleryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="gallery-container">
        <div className="image">
          <img src={this.props.photo.imageUrl} />
        </div>
      </div>
    )
  }
}

export default GalleryMain;
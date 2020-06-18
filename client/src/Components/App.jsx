import React from 'react';
import $ from 'jquery';
import GalleryMain from './GalleryMain.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      view: 'main'
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/0/photogallery',
      success: (data) => {
        console.log(data);
        this.setState({photos: data});
      },
      error: (err) => {
        console.log('err on ajax get: ', err);
      }
    })
  }

  renderView() {
    const {view} = this.state;

    //get only six photos
    const mainPhoto = [];
    const list = this.state.photos;
    console.log(list)
    if(list.length !== 0) {
      for(let i = 0; i < 6; i++) {
        mainPhoto.push(list[0].room_photos[i]);
      }
      if (view === 'main') {
        return mainPhoto.map((photo, index) => <GalleryMain photo={photo} key={index} /> )
      }
    }
  }


  render() {
    return (
      <div className="container">
        {this.renderView()}
      </div>
    )
  }
}

export default App;
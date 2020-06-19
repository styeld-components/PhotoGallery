import React from 'react';
import $ from 'jquery';
import GalleryMain from './GalleryMain.jsx';
import GalleryDetail from './GalleryDetail.jsx';
// import '../styles/GalleryMain.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      view: 'main',
    };
    this.onShowAll = this.onShowAll.bind(this);
    this.onExitDetail = this.onExitDetail.bind(this)
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/0/photogallery',
      success: (data) => {
        console.log(data);
        this.setState({ photos: data });
      },
      error: (err) => {
        console.log('err on ajax get: ', err);
      },
    });
  }

  onShowAll() {
    this.setState({ view: 'showAll' });
  }

  onExitDetail() {
    this.setState({ view: 'main' });
  }

  renderView() {
    const { view } = this.state;

    //get only six photos
    const mainPhoto = [];
    const list = this.state.photos;
    if (list.length !== 0) {
      for (let i = 0; i < 5; i += 1) {
        mainPhoto.push(list[0].room_photos[i]);
      }
      if (view === 'main') {
        return <GalleryMain photos={this.state.photos[0]} onShowAll={this.onShowAll} />;
      } else if (view === 'showAll') {
        return <GalleryDetail photos={this.state.photos[0]} onExitDetail={this.onExitDetail}/>
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;
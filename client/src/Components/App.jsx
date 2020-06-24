/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-else-return */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import $ from 'jquery';
import GalleryMain from './GalleryMain.jsx';
import GalleryDetail from './GalleryDetail.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      view: 'main',
    };
    this.renderView = this.renderView.bind(this);
    this.onShowAll = this.onShowAll.bind(this);
    this.onExitDetail = this.onExitDetail.bind(this);
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
    console.log('app close')
    this.setState({ view: 'main' });
  }

  renderView() {
    const { view } = this.state;
    const mainPhoto = [];
    const list = this.state.photos;
    if (list.length !== 0) {
      for (let i = 0; i < 5; i += 1) {
        mainPhoto.push(list[0].room_photos[i]);
      }
      if (view === 'main') {
        console.log('main!!');
        return <GalleryMain photos={this.state.photos[0]} onShowAll={this.onShowAll} onExitDetail={this.onExitDetail} />;
      } else if (view === 'showAll') {
        return <GalleryDetail photos={this.state.photos[0]} onExitDetail={this.onExitDetail} />;
      } else {
        return null;
      }
    }
    return null;
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

/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-else-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import $ from 'jquery';
import GalleryMain from './GalleryMain.jsx';
import GalleryDetail from './GalleryDetail.jsx';
import SharePopupInner from './SharePopupInner.jsx';
import GalleryDetailGrid from './GalleryDetailGrid.jsx';
import GalleryMainGrid from './GalleryMainGrid.jsx';
import styles from '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      view: 'main',
      showSharePopup: false,
      clickedPhotoIdx: -1,
      detailView: 'non-grid',
      mainView: 'main',
    };
    this.renderView = this.renderView.bind(this);
    this.onShowAll = this.onShowAll.bind(this);
    this.onExitDetail = this.onExitDetail.bind(this);
    this.saveToList = this.saveToList.bind(this);
    this.sharePopupHandler = this.sharePopupHandler.bind(this);
    this.backToGalleryDetail = this.backToGalleryDetail.bind(this);
    this.onClickDetailHandler = this.onClickDetailHandler.bind(this);
    this.getClickedPhotoIdx = this.getClickedPhotoIdx.bind(this);
    this.getClickedPhotoIdxfromGrid = this.getClickedPhotoIdxfromGrid.bind(this);
    this.changeViewOnWindowSize = this.changeViewOnWindowSize.bind(this);
    this.changeMainViewOnWindowSize = this.changeMainViewOnWindowSize.bind(this);
    this.showDetailGrid = this.showDetailGrid.bind(this);
    this.likeStatusUpdate = this.likeStatusUpdate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.changeViewOnWindowSize);
    window.addEventListener('resize', this.changeMainViewOnWindowSize);
    $.ajax({
      method: 'GET',
      url: '/api/2/photogallery',
      success: (data) => {
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
    this.setState({
      view: 'main',
      clickedPhotoIdx: -1,
    });
  }

  onClickDetailHandler() {
    this.setState({
      showSharePopup: false,
    });
  }

  getClickedPhotoIdx(index) {
    this.setState({ clickedPhotoIdx: index });
  }

  getClickedPhotoIdxfromGrid(index) {
    this.setState({ clickedPhotoIdx: index });
  }

  changeViewOnWindowSize() {
    if (window.innerWidth > 1000) {
      this.setState({ detailView: 'non-grid' });
    } else {
      this.setState({ detailView: 'grid' });
    }
  }

  changeMainViewOnWindowSize() {
    if (window.innerWidth > 750) {
      this.setState({ mainView: 'main' });
    } else {
      this.setState({ mainView: 'main-grid' });
    }
  }

  showDetailGrid() {
    this.setState({ view: 'showAll', detailView: 'grid' });
  }

  backToGalleryDetail() {
    this.setState({
      showSharePopup: false,
      view: 'showAll',
    });
  }

  sharePopupHandler() {
    const { showSharePopup } = this.state;
    this.setState({
      showSharePopup: !showSharePopup,
    });
  }

  saveToList(listname, save) {
    $.ajax({
      method: 'POST',
      url: '/api/2/photogallery',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        name: listname,
        saved: save,
      }),
      success: () => {
        console.log('successfully save to a list ajax');
        $.ajax({
          method: 'GET',
          url: '/api/2/photogallery',
          success: (data) => {
            this.setState({ photos: data });
          },
          error: (err) => {
            console.log('err on ajax get: ', err);
          },
        });
      },
      error: (err) => {
        console.log('err on ajax save to list post: ', err);
      },
    });
  }

  likeStatusUpdate(listId, listname, likedStatus) {
    $.ajax({
      method: 'PUT',
      url: '/api/2/photogallery',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        id: listId,
        name: listname,
        saved: likedStatus,
      }),
      success: () => {
        console.log('successfully updated save list ajax');
        $.ajax({
          method: 'GET',
          url: '/api/2/photogallery',
          success: (data) => {
            this.setState({ photos: data });
          },
          error: (err) => {
            console.log('err on ajax get: ', err);
          },
        });
      },
      error: (err) => {
        console.log('err on ajax update save list: ', err);
      },
    });
  }

  renderView() {
    const {
      photos, view, clickedPhotoIdx, detailView, mainView,
    } = this.state;
    const mainPhoto = [];
    const list = photos;

    if (list.length !== 0) {
      for (let i = 0; i < 5; i += 1) {
        mainPhoto.push(list[0].room_photos[i]);
      }
      if (clickedPhotoIdx >= 0) {
        return <GalleryDetail photos={photos[0]} onExitDetail={this.onExitDetail} sharePopupHandler={this.sharePopupHandler} clickedPhotoIdx={clickedPhotoIdx} saveToList={this.saveToList} likeStatusUpdate={this.likeStatusUpdate} />;
      } if (view === 'main') {
        if (mainView === 'main') {
          return <GalleryMain photos={photos[0]} onShowAll={this.onShowAll} onExitDetail={this.onExitDetail} sharePopupHandler={this.sharePopupHandler} getClickedPhotoIdx={this.getClickedPhotoIdx} />;
        } else {
          return <GalleryMainGrid photos={photos[0]} showDetailGrid={this.showDetailGrid} numPhotos={photos[0].room_photos.length} />;
        }
      } if (view === 'showAll') {
        if (detailView === 'grid') {
          return <GalleryDetailGrid photos={photos[0]} onExitDetail={this.onExitDetail} getClickedPhotoIdxfromGrid={this.getClickedPhotoIdxfromGrid} />;
        }
        return <GalleryDetail photos={photos[0]} onExitDetail={this.onExitDetail} sharePopupHandler={this.sharePopupHandler} saveToList={this.saveToList} likeStatusUpdate={this.likeStatusUpdate} />;
      }
    }
    return null;
  }

  render() {
    const { showSharePopup } = this.state;
    const sharePopupBackground = showSharePopup ? styles.showShareBackground : styles.noShareBackground;
    return (
      <div>
        {this.renderView()}
        <div className={sharePopupBackground} onClick={this.onClickDetailHandler}></div>
        {showSharePopup ? <SharePopupInner backToGalleryDetail={this.backToGalleryDetail} /> : null}
      </div>
    );
  }
}

export default App;

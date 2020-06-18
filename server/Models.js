const Gallery = require('../database/Gallery.js');

function getPhotos(roomId, callback) {
  Gallery.find(callback);
}
const Gallery = require('../database/Gallery.js');

function getPhotos(roomId, callback) {
  console.log('reached model')
  Gallery.find({"room_id": 0}, callback);
}

module.exports = {
  getPhotos
}
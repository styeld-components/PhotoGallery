const Gallery = require('../database/Gallery.js');

function getPhotos(roomId, callback) {
  console.log('reached model')
  Gallery.find({"room_id": roomId}, callback);
}

module.exports = {
  getPhotos
}
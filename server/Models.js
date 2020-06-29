/* eslint-disable quote-props */
const Gallery = require('../database/Gallery.js');

function getPhotos(roomId, callback) {
  Gallery.find({ 'room_id': roomId }, callback);
}

function postSaveToList(roomId, listname, callback) {
  Gallery.update({ room_id: roomId },
    {
      $set: {
        'save_status.name': listname,
        'save_status.saved': true,
      },
    }, callback);
}

module.exports = {
  getPhotos, postSaveToList,
};

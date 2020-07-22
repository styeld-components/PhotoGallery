/* eslint-disable quote-props */
const Gallery = require('../db_postgres/index.js'); // Postgres
// const Gallery = require('../database/Gallery.js'); // MongoDB

function getPhotos(roomId, callback) {
  const q = `SELECT * FROM photos WHERE room_id = ${roomId}`;
  Gallery.query(q, callback);
}

function postSaveToList(roomId, listName, savedStatus, callback) {
  const q = `INSERT INTO favorites (isFavorite) VALUES (${savedStatus}) WHERE roomId = ${roomId}`;
  Gallery.query(q, callback);
}

function updateSaveToList(roomId, id, listName, savedStatus, callback) {
  const q = `UPDATE favorites SET isFavorite = ${savedStatus} WHERE roomId = ${roomId}`;
  Gallery.query(q, callback);
}

// function getPhotos(roomId, callback) {
//   Gallery.find({ 'room_id': roomId }, callback);
// }

// function postSaveToList(roomId, listName, savedStatus, callback) {
//   Gallery.update({ room_id: roomId },
//     {
//       $push: {
//         save_status: {
//           name: listName,
//           saved: savedStatus,
//         },
//       },
//     }, callback);
// }

// function updateSaveToList(roomId, id, listName, savedStatus, callback) {
//   Gallery.update({ room_id: roomId, 'save_status._id': id },
//     {
//       $set: {
//         'save_status.$.name': listName,
//         'save_status.$.saved': savedStatus,
//       },
//     }, callback);
// }

module.exports = {
  getPhotos, postSaveToList, updateSaveToList,
};

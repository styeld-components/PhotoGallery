const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const gallerySchema = new mongoose.Schema({
  user_id: Number,
  room_id: Number,
  room_photos: [{imageUrl: String, description: String}],
  save_status: {
    name: String,
    saved: Boolean
  }
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;

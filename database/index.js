/* eslint-disable import/newline-after-import */
/* eslint-disable no-multiple-empty-lines */

const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/photoGallery';

const db = mongoose.connect(mongoUri);

module.exports = db;

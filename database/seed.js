const db  = require('./index.js');
const Gallery = require('./Gallery.js');

const sampleGallery = [
{
   user_id: 0,
   room_id: 0,
   room_photos: [{imageUrl: 'https://a0.muscache.com/im/pictures/1234059/492861b7_original.jpg?im_w=960', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1233896/19a1babc_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1233936/9ae20d4f_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1234088/c727cc06_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1233957/c2501ff1_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1234056/174bb9d7_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1233881/e927214f_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1234036/20b11759_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1233907/6dcbb8ff_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1233920/1c3f4878_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1233963/51ec9f0b_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1233969/e1c5f8ef_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1234016/8266e232_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1234023/e407d748_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/1234040/e580eae7_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/973797/2f2b5770_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/973851/f6277bb2_original.jpg?im_w=1920', description: ''}, {imageUrl: 'https://a0.muscache.com/im/pictures/973804/664134cc_original.jpg?im_w=1920', description: 'Prayer bench on trail to Treehouse'}, {imageUrl: 'https://a0.muscache.com/im/pictures/973815/cfe8a489_original.jpg?im_w=1920', description: 'Leaning trees at end of trail'}, {imageUrl: 'https://a0.muscache.com/im/pictures/1233980/2d2440b3_original.jpg?im_w=1920', description: ''}],
   save_status: {
     name: null,
     saved: false
   }
}
];

const insertSampleGalleries = function() {
  Gallery.create(sampleGallery)
    .then(() => db.disconnect());
};

insertSampleGalleries();
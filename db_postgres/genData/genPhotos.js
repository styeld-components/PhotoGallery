/* eslint-disable no-multi-spaces */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

const getRandomId = (min, max) => {
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomIndex;
};

let counter = 0;        // genPhotos1.csv  : 0 - 1999999
// let counter = 2000000;  // genPhotos2.csv  : 2000000 - 3999999
// let counter = 4000000;  // genPhotos3.csv  : 4000000 - 5999999
// let counter = 6000000;  // genPhotos4.csv  : 6000000 - 7999999
// let counter = 8000000;  // genPhotos5.csv  : 8000000 - 9999999
// let counter = 10000000; // genPhotos6.csv  : 10000000 - 11999999
// let counter = 12000000; // genPhotos7.csv  : 12000000 - 13999999
// let counter = 14000000; // genPhotos8.csv  : 14000000 - 15999999
// let counter = 16000000; // genPhotos9.csv  : 16000000 - 17999999
// let counter = 18000000; // genPhotos10.csv : 18000000 - 19999999
// let counter = 20000000; // genPhotos11.csv : 20000000 - 21999999
// let counter = 22000000; // genPhotos12.csv : 22000000 - 23999999
// let counter = 24000000; // genPhotos13.csv : 24000000 - 25999999
// let counter = 26000000; // genPhotos14.csv : 26000000 - 27999999
// let counter = 28000000; // genPhotos15.csv : 28000000 - 29999999
// let counter = 30000000; // genPhotos16.csv : 30000000 - 31999999
// let counter = 32000000; // genPhotos17.csv : 32000000 - 33999999
// let counter = 34000000; // genPhotos18.csv : 34000000 - 35999999
// let counter = 36000000; // genPhotos19.csv : 36000000 - 37999999
// let counter = 38000000; // genPhotos20.csv : 38000000 - 39999999
// let counter = 40000000; // genPhotos21.csv : 40000000 - 41999999
// let counter = 42000000; // genPhotos22.csv : 42000000 - 43999999
// let counter = 44000000; // genPhotos23.csv : 44000000 - 45999999
// let counter = 46000000; // genPhotos24.csv : 46000000 - 47999999
// let counter = 48000000; // genPhotos25.csv : 48000000 - 49999999

const genData = () => {
  writer.pipe(fs.createWriteStream('genPhotos1.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos2.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos3.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos4.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos5.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos6.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos7.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos8.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos9.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos10.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos11.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos12.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos13.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos14.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos15.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos16.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos17.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos18.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos19.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos20.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos21.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos22.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos23.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos24.csv'));
  // writer.pipe(fs.createWriteStream('genPhotos25.csv'));

  // for (let i = 0; i < 20; i++) {
  //   const fakeRoomId = getRandomId(0, 19);

  for (let i = 0; i < 2000000; i++) {
    const fakeRoomId = getRandomId(0, 9999999);
    writer.write({
      id: counter++,
      image_name: faker.commerce.productName(),
      decription: faker.lorem.sentences(),
      image_src: faker.image.imageUrl(),
      room_id: fakeRoomId,
    });

    console.log('i: ', i);
  }
  writer.end();
  console.log('completed generating photos!');
};

genData();

/* eslint-disable arrow-body-style */
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

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  .toISOString()
  .slice(0, 10);
};

// let counter = 0;        // genPhotosByRoom1.csv  : 0 - 1999999
// let counter = 2000000;  // genPhotosByRoom2.csv  : 2000000 - 3999999
// let counter = 4000000;  // genPhotosByRoom3.csv  : 4000000 - 5999999
// let counter = 6000000;  // genPhotosByRoom4.csv  : 6000000 - 7999999
// let counter = 8000000;  // genPhotosByRoom5.csv  : 8000000 - 9999999
// let counter = 10000000; // genPhotosByRoom6.csv  : 10000000 - 11999999
// let counter = 12000000; // genPhotosByRoom7.csv  : 12000000 - 13999999
// let counter = 14000000; // genPhotosByRoom8.csv  : 14000000 - 15999999
// let counter = 16000000; // genPhotosByRoom9.csv  : 16000000 - 17999999
// let counter = 18000000; // genPhotosByRoom10.csv : 18000000 - 19999999
// let counter = 20000000; // genPhotosByRoom11.csv : 20000000 - 21999999
// let counter = 22000000; // genPhotosByRoom12.csv : 22000000 - 23999999
// let counter = 24000000; // genPhotosByRoom13.csv : 24000000 - 25999999
// let counter = 26000000; // genPhotosByRoom14.csv : 26000000 - 27999999
// let counter = 28000000; // genPhotosByRoom15.csv : 28000000 - 29999999
// let counter = 30000000; // genPhotosByRoom16.csv : 30000000 - 31999999
// let counter = 32000000; // genPhotosByRoom17.csv : 32000000 - 33999999
// let counter = 34000000; // genPhotosByRoom18.csv : 34000000 - 35999999
// let counter = 36000000; // genPhotosByRoom19.csv : 36000000 - 37999999
// let counter = 38000000; // genPhotosByRoom20.csv : 38000000 - 39999999
// let counter = 40000000; // genPhotosByRoom21.csv : 40000000 - 41999999
// let counter = 42000000; // genPhotosByRoom22.csv : 42000000 - 43999999
// let counter = 44000000; // genPhotosByRoom23.csv : 44000000 - 45999999
// let counter = 46000000; // genPhotosByRoom24.csv : 46000000 - 47999999
let counter = 48000000; // genPhotosByRoom25.csv : 48000000 - 49999999

const genData = () => {
  // writer.pipe(fs.createWriteStream('genPhotosByRoom1.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom2.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom3.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom4.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom5.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom6.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom7.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom8.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom9.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom10.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom11.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom12.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom13.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom14.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom15.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom16.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom17.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom18.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom19.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom20.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom21.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom22.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom23.csv'));
  // writer.pipe(fs.createWriteStream('genPhotosByRoom24.csv'));
  writer.pipe(fs.createWriteStream('genPhotosByRoom25.csv'));

  // for (let i = 0; i < 20; i++) {
  //   const fakeRoomId = getRandomId(0, 19);
  //   const fakeDate = randomDate(new Date(1910, 0, 1), new Date(2020, 0, 1));

  for (let i = 0; i < 2000000; i++) {
    const fakeRoomId = getRandomId(0, 9999999);
    const fakeDate = randomDate(new Date(1910, 0, 1), new Date(2020, 0, 1));

    writer.write({
      id: counter++,
      image_name: faker.commerce.productName(),
      decription: faker.lorem.sentences(),
      image_src: faker.image.imageUrl(),
      room_id: fakeRoomId,
      createdAt: fakeDate,
    });

    console.log('i: ', i);
  }
  writer.end();
  console.log('completed generating photos_by_room!');
};

genData();

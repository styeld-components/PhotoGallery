/* eslint-disable no-multi-spaces */
/* eslint-disable space-unary-ops */
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

let counter = 0;        // genFavorites1.csv  : 0 - 2999999
// let counter = 3000000;  // genFavorites2.csv  : 3000000 - 5999999
// let counter = 6000000;  // genFavorites3.csv  : 6000000 - 8999999
// let counter = 9000000;  // genFavorites4.csv  : 9000000 - 11999999
// let counter = 12000000; // genFavorites5.csv  : 12000000 - 14999999
// let counter = 15000000; // genFavorites6.csv  : 15000000 - 17999999
// let counter = 18000000; // genFavorites7.csv  : 18000000 - 20999999
// let counter = 21000000; // genFavorites8.csv  : 21000000 - 23999999
// let counter = 24000000; // genFavorites9.csv  : 24000000 - 26999999
// let counter = 27000000; // genFavorites10.csv : 27000000 - 29999999

const genData = () => {
  writer.pipe(fs.createWriteStream('genFavorites1.csv'));
  // writer.pipe(fs.createWriteStream('genFavorites2.csv'));
  // writer.pipe(fs.createWriteStream('genFavorites3.csv'));
  // writer.pipe(fs.createWriteStream('genFavorites4.csv'));
  // writer.pipe(fs.createWriteStream('genFavorites5.csv'));
  // writer.pipe(fs.createWriteStream('genFavorites6.csv'));
  // writer.pipe(fs.createWriteStream('genFavorites7.csv'));
  // writer.pipe(fs.createWriteStream('genFavorites8.csv'));
  // writer.pipe(fs.createWriteStream('genFavorites9.csv'));
  // writer.pipe(fs.createWriteStream('genFavorites10.csv'));

  for (let i = 0; i < 3000000; i++) {
    const fakeRoomId = getRandomId(0, 9999999);
    const fakeUserId = getRandomId(0, 9999999);
    writer.write({
      id: counter++,
      isFavorite: faker.random.boolean(),
      room_id: fakeRoomId,
      user_id: fakeUserId,
    });

    console.log('i: ', i);
  }
  writer.end();
  console.log('completed generating favorites!');
};

genData();

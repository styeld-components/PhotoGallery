/* eslint-disable arrow-body-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

/*
CREATE TABLE IF NOT EXISTS sdc_photogallery.favorites_by_user (
  id UUID,
  IsSaved boolean,
  room_id INT,
  user_id INT,
  createdAt TIMESTAMP,
  PRIMARY KEY (user_id, createdAt)
) WITH CLUSTERING ORDER BY (createdAt DESC);
*/

const getRandomId = (min, max) => {
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomIndex;
};

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  .toISOString()
  .slice(0, 10);
};

let counter = 0;        // genFavoritesByUser1.csv  : 0 - 2999999
// let counter = 3000000;  // genFavoritesByUser2.csv  : 3000000 - 5999999
// let counter = 6000000;  // genFavoritesByUser3.csv  : 6000000 - 8999999
// let counter = 9000000;  // genFavoritesByUser4.csv  : 9000000 - 11999999
// let counter = 12000000; // genFavoritesByUser5.csv  : 12000000 - 14999999
// let counter = 15000000; // genFavoritesByUser6.csv  : 15000000 - 17999999
// let counter = 18000000; // genFavoritesByUser7.csv  : 18000000 - 20999999
// let counter = 21000000; // genFavoritesByUser8.csv  : 21000000 - 23999999
// let counter = 24000000; // genFavoritesByUser9.csv  : 24000000 - 26999999
// let counter = 27000000; // genFavoritesByUser10.csv : 27000000 - 29999999

const genData = () => {
  writer.pipe(fs.createWriteStream('genFavoritesByUser1.csv'));
  // writer.pipe(fs.createWriteStream('genFavoritesByUser2.csv'));
  // writer.pipe(fs.createWriteStream('genFavoritesByUser3.csv'));
  // writer.pipe(fs.createWriteStream('genFavoritesByUser4.csv'));
  // writer.pipe(fs.createWriteStream('genFavoritesByUser5.csv'));
  // writer.pipe(fs.createWriteStream('genFavoritesByUser6.csv'));
  // writer.pipe(fs.createWriteStream('genFavoritesByUser7.csv'));
  // writer.pipe(fs.createWriteStream('genFavoritesByUser8.csv'));
  // writer.pipe(fs.createWriteStream('genFavoritesByUser9.csv'));
  // writer.pipe(fs.createWriteStream('genFavoritesByUser10.csv'));

  // for (let i = 0; i < 20; i++) {
  //   const fakeRoomId = getRandomId(0, 19);
  //   const fakeUserId = getRandomId(0, 19);
  //   const fakeDate = randomDate(new Date(1910, 0, 1), new Date(2020, 0, 1));

  for (let i = 0; i < 3000000; i++) {
    const fakeRoomId = getRandomId(0, 9999999);
    const fakeUserId = getRandomId(0, 9999999);
    const fakeDate = randomDate(new Date(1910, 0, 1), new Date(2020, 0, 1));

    writer.write({
      id: counter++,
      isFavorite: faker.random.boolean(),
      room_id: fakeRoomId,
      user_id: fakeUserId,
      createdAt: fakeDate,
    });

    console.log('i: ', i);
  }
  writer.end();
  console.log('completed generating favorites_by_user!');
};

genData();

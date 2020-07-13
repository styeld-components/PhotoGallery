/* eslint-disable no-multi-spaces */
/* eslint-disable no-plusplus */
const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

let counter = 0;       // genRooms1.csv : 0 - 999999
// let counter = 1000000; // genRooms2.csv  : 1000000 - 1999999
// let counter = 2000000; // genRooms3.csv  : 2000000 - 2999999
// let counter = 3000000; // genRooms4.csv  : 3000000 - 3999999
// let counter = 4000000; // genRooms5.csv  : 4000000 - 4999999
// let counter = 5000000; // genRooms6.csv  : 5000000 - 5999999
// let counter = 6000000; // genRooms7.csv  : 6000000 - 6999999
// let counter = 7000000; // genRooms8.csv  : 7000000 - 7999999
// let counter = 8000000; // genRooms9.csv  : 8000000 - 8999999
// let counter = 9000000; // genRooms10.csv : 9000000 - 9999999

const genData = () => {
  writer.pipe(fs.createWriteStream('genRooms1.csv'));
  // writer.pipe(fs.createWriteStream('genRooms2.csv'));
  // writer.pipe(fs.createWriteStream('genRooms3.csv'));
  // writer.pipe(fs.createWriteStream('genRooms4.csv'));
  // writer.pipe(fs.createWriteStream('genRooms5.csv'));
  // writer.pipe(fs.createWriteStream('genRooms6.csv'));
  // writer.pipe(fs.createWriteStream('genRooms7.csv'));
  // writer.pipe(fs.createWriteStream('genRooms8.csv'));
  // writer.pipe(fs.createWriteStream('genRooms9.csv'));
  // writer.pipe(fs.createWriteStream('genRooms10.csv'));

  // for (let i = 0; i < 20; i++) {
  for (let i = 0; i < 1000000; i++) {
    writer.write({
      id: counter++,
      title: faker.commerce.productName(),
      decription: faker.lorem.sentences(),
      isSuperhost: faker.random.boolean(),
    });

    console.log('i: ', i);
  }
  writer.end();
  console.log('completed generating rooms!');
};

genData();

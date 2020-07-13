/* eslint-disable no-multi-spaces */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

let counter = 0;       // genUsers1.csv : 0 - 999999
// let counter = 1000000; // genUsers2.csv  : 1000000 - 1999999
// let counter = 2000000; // genUsers3.csv  : 2000000 - 2999999
// let counter = 3000000; // genUsers4.csv  : 3000000 - 3999999
// let counter = 4000000; // genUsers5.csv  : 4000000 - 4999999
// let counter = 5000000; // genUsers6.csv  : 5000000 - 5999999
// let counter = 6000000; // genUsers7.csv  : 6000000 - 6999999
// let counter = 7000000; // genUsers8.csv  : 7000000 - 7999999
// let counter = 8000000; // genUsers9.csv  : 8000000 - 8999999
// let counter = 9000000; // genUsers10.csv : 9000000 - 9999999

const genData = () => {
  writer.pipe(fs.createWriteStream('genUsers1.csv'));
  // writer.pipe(fs.createWriteStream('genUsers2.csv'));
  // writer.pipe(fs.createWriteStream('genUsers3.csv'));
  // writer.pipe(fs.createWriteStream('genUsers4.csv'));
  // writer.pipe(fs.createWriteStream('genUsers5.csv'));
  // writer.pipe(fs.createWriteStream('genUsers6.csv'));
  // writer.pipe(fs.createWriteStream('genUsers7.csv'));
  // writer.pipe(fs.createWriteStream('genUsers8.csv'));
  // writer.pipe(fs.createWriteStream('genUsers9.csv'));
  // writer.pipe(fs.createWriteStream('genUsers10.csv'));

  // for (let i = 0; i < 10; i++) {
  for (let i = 0; i < 1000000; i++) {
    writer.write({
      id: counter++,
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
    });

    console.log('i: ', i);
  }
  writer.end();
  console.log('completed generating users!');
};

genData();

const { Client } = require('pg');

const connectionString = 'postgresql://localhost/sdc_photogallery';

const client = new Client({
  connectionString,
});
client.connect();
console.log('postgres db connected!');

module.exports = client;

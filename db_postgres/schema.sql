/*  Execute this file from the command line by typing:
 *    \i schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS sdc_photogallery;

CREATE DATABASE sdc_photogallery;

\c sdc_photogallery;

CREATE TABLE users(
  id INTEGER PRIMARY KEY,
  username VARCHAR(100),
  password VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE rooms(
  id INTEGER PRIMARY KEY,
  title VARCHAR(100),
  description TEXT,
  isSuperhost BOOLEAN
);

CREATE TABLE favorites(
  id INTEGER PRIMARY KEY,
  IsSaved BOOLEAN,
  room_id INTEGER,
  user_id INTEGER,
  FOREIGN KEY (room_id)  REFERENCES rooms (id),
  FOREIGN KEY (user_id)  REFERENCES users (id)
);

CREATE TABLE photos(
  id INTEGER PRIMARY KEY,
  Image_name VARCHAR(100),
  description TEXT,
  image_src VARCHAR(225),
  room_id INTEGER,
  FOREIGN KEY (room_id)  REFERENCES rooms (id)
);

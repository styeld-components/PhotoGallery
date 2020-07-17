/*  Execute this file from the command line by typing:
 *    psql postrgres
 *    \i schema.sql
 *  to create the database and the tables.*/
\c postgres;

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
  isFavorite BOOLEAN,
  room_id INTEGER,
  user_id INTEGER,
  FOREIGN KEY (room_id)  REFERENCES rooms (id),
  FOREIGN KEY (user_id)  REFERENCES users (id)
);

CREATE TABLE photos(
  id INTEGER PRIMARY KEY,
  image_name VARCHAR(100),
  description TEXT,
  image_src VARCHAR(225),
  room_id INTEGER,
  FOREIGN KEY (room_id)  REFERENCES rooms (id)
);


-- COPY <table name> FROM '<absolute path>/hotels1.csv' DELIMITER ',' CSV HEADER;
-- users cvs files
COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers1.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers2.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers3.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers4.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers5.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers6.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers7.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers8.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers9.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers10.csv' DELIMITER ',' CSV HEADER;

-- rooms cvs files
COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms1.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms2.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms3.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms4.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms5.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms6.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms7.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms8.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms9.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms10.csv' DELIMITER ',' CSV HEADER;

-- favorites cvs files
COPY favorites FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genFavorites1.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genFavorites2.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genFavorites3.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genFavorites4.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genFavorites5.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genFavorites6.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genFavorites7.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genFavorites8.csv' DELIMITER ',' CSV HEADER;


-- photos cvs files
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos1.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos2.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos3.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos4.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos5.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos6.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos7.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos8.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos9.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos10.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos11.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos12.csv' DELIMITER ',' CSV HEADER;


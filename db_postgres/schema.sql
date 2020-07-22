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
  user_id INTEGER
  -- FOREIGN KEY (room_id)  REFERENCES rooms (id),
  -- FOREIGN KEY (user_id)  REFERENCES users (id)
);

CREATE TABLE photos(
  id INTEGER PRIMARY KEY,
  image_name VARCHAR(100),
  description TEXT,
  image_src VARCHAR(225),
  room_id INTEGER
  -- FOREIGN KEY (room_id)  REFERENCES rooms (id)
);


-- COPY <table name> FROM '<absolute path>/hotels1.csv' DELIMITER ',' CSV HEADER;
-- users cvs files
-- COPY users FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genUsers1.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/home/ec2-user/genUsers1.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/home/ec2-user/genUsers2.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/home/ec2-user/genUsers3.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/home/ec2-user/genUsers4.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/home/ec2-user/genUsers5.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/home/ec2-user/genUsers6.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/home/ec2-user/genUsers7.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/home/ec2-user/genUsers8.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/home/ec2-user/genUsers9.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/home/ec2-user/genUsers10.csv' DELIMITER ',' CSV HEADER;
VACUUM users;
-- rooms cvs files
-- COPY rooms FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genRooms1.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/home/ec2-user/genRooms1.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/home/ec2-user/genRooms2.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/home/ec2-user/genRooms3.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/home/ec2-user/genRooms4.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/home/ec2-user/genRooms5.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/home/ec2-user/genRooms6.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/home/ec2-user/genRooms7.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/home/ec2-user/genRooms8.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/home/ec2-user/genRooms9.csv' DELIMITER ',' CSV HEADER;
COPY rooms FROM '/home/ec2-user/genRooms10.csv' DELIMITER ',' CSV HEADER;
VACUUM rooms;
-- favorites cvs files
-- COPY favorites FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genFavorites1.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/home/ec2-user/genFavorites1.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/home/ec2-user/genFavorites2.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/home/ec2-user/genFavorites3.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/home/ec2-user/genFavorites4.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/home/ec2-user/genFavorites5.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/home/ec2-user/genFavorites6.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/home/ec2-user/genFavorites7.csv' DELIMITER ',' CSV HEADER;
COPY favorites FROM '/home/ec2-user/genFavorites8.csv' DELIMITER ',' CSV HEADER;
VACUUM favorites;

-- photos cvs files
-- COPY photos FROM '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_postgres/csv/genPhotos1.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos1.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos2.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos3.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos4.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos5.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos6.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos7.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos8.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos9.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos10.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos11.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/home/ec2-user/genPhotos12.csv' DELIMITER ',' CSV HEADER;
VACUUM photos;

-- add foreign key to existing tables
ALTER TABLE favorites ADD CONSTRAINT fk_rooms_favorites FOREIGN KEY (room_id) REFERENCES rooms (id);
ALTER TABLE favorites ADD CONSTRAINT fk_users_favorites FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE photos ADD CONSTRAINT fk_rooms_photos FOREIGN KEY (room_id) REFERENCES rooms (id);

-- create index
CREATE INDEX favorite_idx ON favorites(user_id);
CREATE INDEX photos_idx ON photos(room_id);
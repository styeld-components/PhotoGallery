/*  Execute this file from the command line by typing:
 *  cqlsh
 *  source '../schema.cql';
 *  source '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_cassandra/schema.cql';
 *  to create the database and the tables.*/

DROP KEYSPACE IF EXISTS sdc_photogallery;

CREATE KEYSPACE IF NOT EXISTS sdc_photogallery
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

USE sdc_photogallery;


CREATE TABLE IF NOT EXISTS sdc_photogallery.favorites_by_user (
  -- id UUID,
  id INT,
  isFavorite boolean,
  room_id INT,
  user_id INT,
  createdAt TIMESTAMP,
  PRIMARY KEY (user_id, createdAt)
) WITH CLUSTERING ORDER BY (createdAt DESC);


CREATE TABLE IF NOT EXISTS sdc_photogallery.photos_by_room (
  -- id UUID,
  id INT,
  image_name TEXT,
  description TEXT,
  image_src TEXT,
  room_id INT,
  createdAt TIMESTAMP,
  PRIMARY KEY (room_id, createdAt)
) WITH CLUSTERING ORDER BY (createdAt DESC);

-- COPY keypsace.tableName (col1,col2,col3.....) FROM 'file/file.csv' WITH DELIMITER=',' AND HEADER=TRUE;
-- genFavoritesByUser cvs files
COPY sdc_photogallery.favorites_by_user (id, isFavorite, room_id, user_id, createdAt) FROM './csv/genFavoritesByUser1.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.favorites_by_user (id, isFavorite, room_id, user_id, createdAt) FROM './csv/genFavoritesByUser2.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.favorites_by_user (id, isFavorite, room_id, user_id, createdAt) FROM './csv/genFavoritesByUser3.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.favorites_by_user (id, isFavorite, room_id, user_id, createdAt) FROM './csv/genFavoritesByUser4.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.favorites_by_user (id, isFavorite, room_id, user_id, createdAt) FROM './csv/genFavoritesByUser5.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.favorites_by_user (id, isFavorite, room_id, user_id, createdAt) FROM './csv/genFavoritesByUser6.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.favorites_by_user (id, isFavorite, room_id, user_id, createdAt) FROM './csv/genFavoritesByUser7.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.favorites_by_user (id, isFavorite, room_id, user_id, createdAt) FROM './csv/genFavoritesByUser8.csv' WITH DELIMITER = ',' AND HEADER = TRUE;


-- genPhotosByRoom cvs files
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom1.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom2.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom3.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom4.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom5.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom6.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom7.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom8.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom9.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom10.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom11.csv' WITH DELIMITER = ',' AND HEADER = TRUE;
COPY sdc_photogallery.photos_by_room (id, image_name, description, image_src, room_id, createdAt) FROM './csv/genPhotosByRoom12.csv' WITH DELIMITER = ',' AND HEADER = TRUE;

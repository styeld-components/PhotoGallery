/*  Execute this file from the command line by typing:
 *  source '/Users/johannlee/hrsf128/SDC/PhotoGallery/db_cassandra/schema.sql';
 *  to create the database and the tables.*/

DROP KEYSPACE IF EXISTS sdc_photogallery;

CREATE KEYSPACE IF NOT EXISTS sdc_photogallery
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

USE sdc_photogallery;


CREATE TABLE IF NOT EXISTS sdc_photogallery.favorites_by_user (
  id UUID,
  IsSaved boolean,
  room_id INT,
  user_id INT,
  createdAt TIMESTAMP,
  PRIMARY KEY (user_id, createdAt)
) WITH CLUSTERING ORDER BY (createdAt DESC);


CREATE TABLE IF NOT EXISTS photos_by_room (
  id UUID,
  image_name TEXT,
  description TEXT,
  image_src TEXT,
  room_id INT,
  createdAt TIMESTAMP,
  PRIMARY KEY (room_id, createdAt)
) WITH CLUSTERING ORDER BY (createdAt DESC);

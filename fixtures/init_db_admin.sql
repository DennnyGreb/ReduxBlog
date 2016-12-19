-- To use it:
-- 1. login into MySQL as root
--      mysql -u root -p
-- 2. run this script
--      source <path to the file>/init_db.sql
-- 3. grant all rights on this DB for your work user
--      CREATE USER '<user_name>'@'localhost' IDENTIFIED BY '<password>';
--      GRANT ALL ON CYCLINGADMINDB.* TO '<user_name>'@'localhost';

-- create db. CHARACTER SET!!!
DROP DATABASE IF EXISTS POSTS;
CREATE DATABASE IF NOT EXISTS POSTS CHARACTER SET utf8;

-- switch to ur db
USE POSTS;

-- table Post
DROP TABLE IF EXISTS POST;
CREATE TABLE IF NOT EXISTS `POST` (
  `id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
  `post_name` VARCHAR(255) NOT NULL,
  `post_img` VARCHAR(255),
  `post_sub` VARCHAR(255) NOT NULL,
  `post_desc` VARCHAR(2000) NOT NULL
);

SHOW TABLES;

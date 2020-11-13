DROP DATABASE IF EXISTS yelp;

CREATE DATABASE yelp;

USE yelp;

CREATE TABLE reviews (
  revID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  rating TINYINT NOT NULL,
  full_text VARCHAR(200) NOT NULL,
  userID INT NOT NULL,
  resID INT FOREIGN KEY REFERENCES restaurants(resID),
  reviewDate DATE,
  useful INT,
  helpful INT,
  cool INT,
  comment VARCHAR(100),
  commentFrom: VARCHAR(50),
  commentCreatedAt: DATE
);

CREATE TABLE restaurants (
  resID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  resName VARCHAR(50) NOT NULL,
  overallRating: DECIMAL(1,1) NOT NULL
);

CREATE TABLE photos (
  photoID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  revID INT NOT NULL FOREIGN KEY REFERENCES reviews(revID),
  imgPath VARCHAR(50) NOT NULL
);





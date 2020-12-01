DROP DATABASE IF EXISTS yelp_reviews;

CREATE DATABASE yelp_reviews;

USE yelp_reviews;

CREATE TABLE Restaurants (
  resID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  resName VARCHAR(50) NOT NULL,
  overallRating DECIMAL(2, 1) NOT NULL
);

CREATE TABLE Users (
  userID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(50) NOT NULL,
  friends INT,
  city VARCHAR(100),
  userState VARCHAR(20),
  reviews INT,
  photoCount INT,
  elite BOOLEAN,
  avatar VARCHAR(500)
);

CREATE TABLE Reviews (
  revID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  rating TINYINT NOT NULL,
  reviewText VARCHAR(5000) NOT NULL,
  userID INT,
  resID INT,
  reviewDate VARCHAR(50),
  useful INT DEFAULT 0,
  funny INT DEFAULT 0,
  cool INT DEFAULT 0,
  comment VARCHAR(2000),
  commentFrom VARCHAR(50),
  commentCreatedAt VARCHAR(50),
  numberPhotos INT,
  photo1 VARCHAR(500),
  photo2 VARCHAR(500),
  photo3 VARCHAR(500)
  -- FOREIGN KEY (userID) REFERENCES Users(userID),
  -- FOREIGN KEY (resID) REFERENCES Restaurants(resID)
);
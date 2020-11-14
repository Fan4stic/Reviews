DROP DATABASE IF EXISTS yelp;

CREATE DATABASE yelp;

USE yelp;

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
  elite BOOLEAN,
  avatar VARCHAR(100)
);

CREATE TABLE Reviews (
  revID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  rating TINYINT NOT NULL,
  reviewText VARCHAR(2000) NOT NULL,
  userID INT,
  resID INT,
  reviewDate VARCHAR(50),
  useful INT,
  helpful INT,
  cool INT,
  comment VARCHAR(1000),
  commentFrom VARCHAR(50),
  commentCreatedAt VARCHAR(50),
  FOREIGN KEY (userID) REFERENCES Users(userID),
  FOREIGN KEY (resID) REFERENCES Restaurants(resID)
);


CREATE TABLE Photos (
  photoID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  revID INT,
  imgPath VARCHAR(50) NOT NULL,
  FOREIGN KEY (revID) REFERENCES Reviews(revID)
);







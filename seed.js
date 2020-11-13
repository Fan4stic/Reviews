const faker = require('faker');
const connection = require('./db/index.js');
// const model = require('./db/model.js')

//create fake review objects. then take them and add them to mySQL.
let reviewsArray = [];

createEntries = (amount) => {
  for (i = 0; i <= amount; i++) {
    let reviewObj = {};
    reviewObj.rating = Math.floor(Math.random() * 6);
    reviewObj.overallRating = (Math.random() * 5);
    reviewObj.reviewText = faker.lorem.paragraphs(1);
    reviewObj.reviewDate = faker.date.past().toJSON().slice(0, 10);
    reviewObj.comment = faker.lorem.paragraph();
    reviewObj.commentFrom = faker.name.findName();
    reviewObj.commentCreatedAt = faker.date.past().toJSON().slice(0, 10);
    reviewObj.resName = faker.lorem.word();
    reviewObj.imgPath = 'https://loremflickr.com/320/240/food';
    reviewObj.elite = faker.random.boolean();
    reviewObj.userName = faker.name.findName();
    reviewObj.useful = Math.floor(Math.random() * 100);
    reviewObj.helpful = Math.floor(Math.random() * 100);
    reviewObj.cool = Math.floor(Math.random() * 100);
    reviewsArray.push(reviewObj);
  }
};


addEntries = (arrayOfReviews) => {
  //form post query to model for each
  for(k = 0; k < arrayOfReviews.length; k++) {

    let userQuery = `insert into Users values(0, '${arrayOfReviews[k].userName}', ${arrayOfReviews[k].elite});`;
    connection.query(userQuery, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('added user');
      }
    });

    let restQuery = `insert into Restaurants values (0, '${arrayOfReviews[k].resName}', ${arrayOfReviews[k].overallRating});`;
    connection.query(restQuery);


    let queryStr = `insert into Reviews (rating, reviewText, reviewDate, comment, commentFrom, commentCreatedAt, useful, helpful, cool) values (${arrayOfReviews[k].rating}, '${arrayOfReviews[k].reviewText}', '${arrayOfReviews[k].reviewDate}', '${arrayOfReviews[k].comment}', "${arrayOfReviews[k].commentFrom}", '${arrayOfReviews[k].commentCreatedAt}', '${arrayOfReviews[k].useful}', '${arrayOfReviews[k].helpful}', '${arrayOfReviews[k].cool}');`;
    connection.query(queryStr, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('added to db');
      }
    });

    let photoQuery = `insert into Photos (photoID, imgPath) values (0, '${arrayOfReviews[k].imgPath}')`;
    connection.query(photoQuery, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('added to photos');
      }
    });
  }
  connection.end();
};

createEntries(3);

//need promise?

addEntries(reviewsArray);



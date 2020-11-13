const faker = require('faker');
const connection = require('./db/index.js')
// const model = require('./db/model.js')

//create fake review objects. then take them and add them to mySQL.
let reviewsArray = []

createEntries = (amount) => {
  for (i = 0; i <= amount; i++) {
    let reviewObj = {};
    reviewObj.rating = Math.floor(Math.random() * 6);
    reviewObj.reviewText = faker.lorem.paragraphs();
    reviewDate = faker.date.past(3);
    reviewObj.comment = faker.lorem.paragraph();
    reviewObj.commentFrom = faker.name.findName();
    reviewObj.commentCreatedAt = faker.date.between(2020-01-01, 2020-11-11)
    reviewObj.resName = faker.lorem.word();
    reviewObj.imgPath = 'https://loremflickr.com/320/240/food';
    reviewsArray.push(reviewObj);
  }
};


addEntries = (arrayOfReviews) => {
  //form post query to model for each
  for(k = 0; k < arrayOfReviews.length; k++) {
    let queryStr = `insert into Reviews (rating, reviewText, reviewDate, comment, commentFrom, commentCreatedAt) values (${arrayOfReviews[k].rating}, '${arrayOfReviews[k].reviewText}', ${arrayOfReviews[k].reviewDate}, '${arrayOfReviews[k].comment}', '${arrayOfReviews[k].commentFrom}', ${arrayOfReviews[k].commentCreatedAt});`
    connection.query(queryStr, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('added to db')
      }
    })
  };
};

createEntries(3);

//need promise?

addEntries(reviewsArray);



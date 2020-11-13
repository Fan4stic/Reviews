const faker = require('faker');

//create fake review objects. then take them and add them to mySQL.
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
  }
};

createEntries(3);
const faker = require('faker');
const connection = require('./db/index.js');

let restaurantCount = 0;
let userCount = 0;
let reviewCount = 0;
let photoCount = 0;

createRestaurants = (amount) => {
  while (restaurantCount < amount) {
    let queryStr = `insert into Restaurants values (0, "${faker.lorem.word()}", ${Math.random() * 5})`;
    connection.asyncQuery(queryStr);
    restaurantCount++;
  }
};

createUsers = (amount) => {
  while (userCount < amount) {
    let queryStr = `insert into Users values (0, "${faker.name.findName()}", ${Math.floor(Math.random() * 500)}, "${faker.address.city()}", "${faker.address.state()}", ${Math.floor(Math.random() * 100)}, ${faker.random.boolean()}, "${faker.image.avatar()}")`;
    connection.asyncQuery(queryStr);
    userCount++;
  }
};

createReviews = (amount, users, restaurants) => {
  while (reviewCount < amount) {
    let queryStr = `insert into Reviews values(0, ${Math.floor(Math.random() * 6)}, "${faker.lorem.paragraphs(2)}", ${Math.floor(Math.random() * users)}, ${Math.floor(Math.random() * restaurants)}, "${faker.date.past().toJSON().slice(0, 10)}", ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, "${faker.lorem.paragraph()}", "${faker.name.findName()}", "${faker.date.recent().toJSON().slice(0, 10)}")`;
    connection.asyncQuery(queryStr);
    reviewCount++;
  }
};

createPhotos = (amount, reviews) => {
  while (photoCount < amount) {
    let queryStr = `insert into Photos values(0, ${Math.floor(Math.random() * reviews)}, "${faker.image.food()}")`;
    connection.asyncQuery(queryStr);
    photoCount++;
  }
};
//reviews and photos dont work because foreign keys... they dont exist before theyre created. async issues.


createRestaurants(20);
createUsers(20);
createReviews(40, 10, 10);
createPhotos(20, 10);


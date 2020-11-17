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
    let queryStr = `insert into Users values (0, "${faker.name.firstName()} ${faker.lorem.word(1).toUpperCase()}.", ${Math.floor(Math.random() * 500)}, "${faker.address.city()}", "${faker.address.state(1)}", ${Math.floor(Math.random() * 100)}, ${faker.random.boolean()}, "${faker.image.avatar()}")`;
    connection.asyncQuery(queryStr);
    userCount++;
  }
};

createReviews = (amount, users, restaurants) => {
  while (reviewCount < amount) {
    let queryStr = `insert into Reviews values(0, ${Math.floor(Math.random() * 6)}, "${faker.lorem.paragraphs(3)}", ${Math.floor(Math.random() * users)}, ${Math.floor(Math.random() * restaurants)}, "${faker.date.past().toJSON().slice(0, 10)}", ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, "${faker.lorem.paragraph()}", "${faker.name.findName()}", "${faker.date.recent().toJSON().slice(0, 10)}")`;
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

createRestaurants(100);
createUsers(100);
createReviews(10000, 100, 100);
createPhotos(1000, 10000);



// let addFKConstraints = (() => {
//   let querystr0 = 'set foriegn_key_checks=0';
//   let queryStr1 = 'alter table Reviews add constraint fk_userID foreign key (userID) references Users(userID)';
//   let queryStr2 = 'alter table Reviews add constraint fk_resID foreign key (resID) references Reviews(resID)';
//   let queryStr3 = 'alter table Photos add constraint fk_revID foreign key (revID) references Users(revID)';
//   connection.query(queryStr0);
//   connection.query(queryStr1);
//   connection.query(queryStr2);
//   connection.query(queryStr3);
// });









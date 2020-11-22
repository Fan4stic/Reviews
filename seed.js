const faker = require('faker');
const connection = require('./db/index.js');

let restaurantCount = 0;
let userCount = 0;
let reviewCount = 0;
let photoCount = 0;

createRestaurants = async (amount) => {
  while (restaurantCount < amount) {
    let queryStr = `insert into Restaurants values (0, "${faker.lorem.word()}", ${Math.random() * 5})`;
    await connection.asyncQuery(queryStr);
    restaurantCount++;
  }
};

createUsers = async (amount) => {
  while (userCount < amount) {
    let queryStr = `insert into Users values (0, "${faker.name.firstName()} ${faker.lorem.word(1).toUpperCase()}.", ${Math.floor(Math.random() * 500)}, "${faker.address.city()}", "${faker.address.stateAbbr()}", ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${faker.random.boolean()}, "${faker.image.avatar()}")`;
    await connection.asyncQuery(queryStr);
    userCount++;
  }
};

createReviews = async (amount, users, restaurants) => {
  while (reviewCount < amount) {
    let queryStr = `insert into Reviews values(0, ${Math.floor(Math.random() * 6)}, "${faker.lorem.paragraphs(3)}", ${Math.floor(Math.random() * users)}, ${Math.floor(Math.random() * restaurants)}, "${faker.date.past().toJSON().slice(0, 10)}", ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, "${faker.lorem.paragraph()}", "${faker.name.findName()}", "${faker.date.recent().toJSON().slice(0, 10)}")`;
    await connection.asyncQuery(queryStr);
    reviewCount++;
  }
};

createPhotos = async (amount, reviews) => {
  while (photoCount < amount) {
    let queryStr = `insert into Photos values(0, ${Math.floor(Math.random() * reviews)}, "${faker.image.food()}")`;
    await connection.asyncQuery(queryStr);
    photoCount++;
  }
};
//reviews and photos dont work because foreign keys... they dont exist before theyre created. async issues.

createRestaurants(100);
createUsers(100);
createReviews(10000, 100, 100);
createPhotos(100, 100);

connection.end();
//need to run these commands manually to add foreign keys back

// let addFKConstraints = (() => {
//   let queryStr0 = 'set foriegn_key_checks=0';
//   let queryStr1 = 'alter table Reviews add constraint fk_userID foreign key (userID) references Users(userID)';
//   let queryStr2 = 'alter table Reviews add constraint fk_resID foreign key (resID) references Restaurants(resID)';
//   let queryStr3 = 'alter table Photos add constraint fk_revID foreign key (revID) references Reviews(revID)';

//   connection.query(queryStr0, (er, res1) => {
//     if (er) {
//       console.log(er)
//     } else {
//       connection.query(queryStr1, (er, res2) => {
//         if (er) {
//           console.log(er)
//         } else {
//           connection.query(queryStr2, (er, res3) => {
//             if (er) {
//               console.log(er)
//             } else {
//               connection.query(queryStr3)
//     }
//   }
//   connection.query(queryStr1);
//   connection.query(queryStr2);
//   connection.query(queryStr3);
// });

// addFKConstraints();









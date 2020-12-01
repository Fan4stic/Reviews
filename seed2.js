const faker = require('faker');
const connection = require('./db/index.js');

let restaurantCount = 0;
let userCount = 0;
let reviewCount = 0;
let photoCount = 0;

const randInt = (n) => Math.floor(Math.random() * n);
//use 4 to determine how many photos

//there are 65 photos avaialble in this folder
const photoUrl = (n) => {
  return `https://s3-us-west-1.amazonaws.com/fec.yelp/food/LazyBear/` + randInt(n) + `.jpg`;
};
//there are 10 avatars
const avatarUrl = (n) => {
  return `https://s3-us-west-1.amazonaws.com/fec.yelp/avatars/avatars/` + randInt(n) + `.jpeg`;
};

createRestaurants = async (amount) => {
  try {
    while (restaurantCount < amount) {
      let queryStr = `insert into Restaurants values (0, "${faker.lorem.words(2)}", ${Math.random() * 5} )`;
      await connection.asyncQuery(queryStr);
      restaurantCount++;
    }
  } catch (err) {
    console.log(err)
  }
};


createUsers = async (amount) => {
  try {
    while (userCount < amount) {
      let queryStr = `insert into Users values (
        0, "${faker.name.firstName()} ${faker.lorem.word(1).toUpperCase()}.", ${Math.floor(Math.random() * 500)}, "${faker.address.city()}", "${faker.address.stateAbbr()}", ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${faker.random.boolean()}, "${avatarUrl(10)}" )`;
      await connection.asyncQuery(queryStr);
      userCount++;
    }
  } catch (err) {
    console.log(err)
  }
};

createReviews = async (amount, users, restaurants) => {
  try {
    while (reviewCount < amount) {
      let queryStr = `insert into Reviews values( 0, ${Math.floor(Math.random() * 6)}, "${faker.lorem.paragraphs(3)}", ${Math.floor(Math.random() * users)}, ${Math.floor(Math.random() * restaurants)}, "${faker.date.past().toJSON().slice(0, 10)}", ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, "${faker.lorem.paragraph()}", "${faker.name.findName()}", "${faker.date.recent().toJSON().slice(0, 10)}", ${randInt(4)}, "${photoUrl(65)}", "${photoUrl(65)}", "${photoUrl(65)}" )`;
      await connection.asyncQuery(queryStr);
      reviewCount++;
    }
  }  catch (err) {
    console.log(err)
  }
};

// createPhotos = async (amount, reviews) => {
//   try {
//     while (photoCount < amount) {
//       let queryStr = `insert into Photos values(0, ${Math.floor(Math.random() * reviews)}, "${faker.image.food()}")`;
//       await connection.asyncQuery(queryStr);
//       photoCount++;
//     }
//   } catch (err) {
//     console.log(err)
//   }
// };
//reviews and photos dont work because foreign keys... they dont exist before theyre created. async issues.
seedAll = async () => {
  try {
    await createRestaurants(100);
    await createUsers(100);
    await createReviews(20000, 100, 100);
  } catch (err) {
    console.log(err)
  }
};

seedAll();

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
const connection = require('./db/index.js');

let addFKConstraints = (() => {
  let queryStr1 = 'alter table Reviews add constraint fk_userID foreign key (userID) references Users(userID)';
  let queryStr2 = 'alter table Reviews add constraint fk_resID foreign key (resID) references Restaurants(resID)';
  let queryStr3 = 'alter table Photos add constraint fk_revID foreign key (revID) references Reviews(revID)';
  connection.query(queryStr1);
  connection.query(queryStr2);
  connection.query(queryStr3);
});

addFKConstraints();

// query strings work but function does not
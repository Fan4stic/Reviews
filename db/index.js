
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'yelp'

});

connection.connect();

connection.asyncQuery = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result)=> {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


module.exports = connection;





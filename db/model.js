const connection = require('./index.js');


module.exports = {
  post: (req, res) => {
    let queryStr = `insert into Reviews (rating, reviewText, reviewDate, comment, commentFrom, commentCreatedAt) values (${req.body.rating}, '${req.body.reviewText}', ${req.body.reviewDate}, '${req.body.comment}', '${req.body.commentFrom}', ${req.body.commentCreatedAt});`
    connection.query(queryStr, (err) => {
      if (err) {
        
      }

    });
  }
};
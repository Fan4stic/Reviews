const connection = require('./index.js');

module.exports = {
  get: async (req, res) => {
    let id = req.url.slice(17, -8);
    let queryStr = `select * from Restaurants inner join Reviews using (resID) inner join Users on Reviews.userID = Users.userID where resID = ${id} limit 500`
      try {
        const result = await connection.asyncQuery(queryStr);
        res.status(200).send(result)
      } catch (err) {
        res.sendStatus(404).end()
      }
  },
  post: async (req, res) => {
    let id = req.url.slice(17, -8);
    let queryStr = `insert into Reviews (rating, reviewText, userID, resID, reviewDate) values (${req.body.rating}, "${req.body.reviewText}", ${req.body.userID}, ${id}, "${req.body.reviewDate}")`;
    console.log(queryStr)
    try {
      const result = await connection.asyncQuery(queryStr);
      res.status(200).send("posted")
    } catch (err) {
      res.status(404).send(err)
    }
  }
};


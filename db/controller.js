const connection = require('./index.js');



module.exports = {
  get: async (req, res) => {
    let id = req.url.slice(17, -8);
    let queryStr = `select * from reviews where resID = ${id}`;
      try {
        const result = await connection.asyncQuery(queryStr);
        console.log(result);
        res.status(200).send(result)
      } catch (err) {
        res.sendStatus(404).end()
      }
  },
  post: async (req, res) => {
    let id = req.url.slice(17, -8);
    //send userID from req.body
    let queryStr = `insert into reviews (rating, reviewText, userID, resID, reviewDate) values (${req.body.rating}, "${req.body.reviewText}", ${req.body.userID}, ${id}, "${req.body.reviewDate}")`;
    console.log(queryStr)
    try {
      const result = await connection.asyncQuery(queryStr);
      console.log(result);
      res.status(200).send("posted")
    } catch (err) {
      res.status(404).send(err)
    }
  }
};


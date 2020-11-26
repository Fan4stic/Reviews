const connection = require('./index.js');

module.exports = {
  get: async (req, res) => {
    let id = req.url.slice(17, -8);

    //still dont know how i would get all the photos for a particular review if there were more than 1, has issue if multiple photos, it will send duplicate
    //grab review IDs, query photos for associated photos, attach them to proper review, send response
    // let queryStr = `select * from restaurants inner join reviews using (resID) inner join users on reviews.userID = users.userID inner join photos on reviews.revID = photos.revID where resID = ${id} limit 10`;
    let queryStr = `select * from Restaurants inner join Reviews using (resID) inner join Users on Reviews.userID = Users.userID where resID = ${id} limit 500`
      try {
        const result = await connection.asyncQuery(queryStr);
        // console.log(result);
        res.status(200).send(result)
      } catch (err) {
        res.sendStatus(404).end()
      }
  },
  post: async (req, res) => {
    let id = req.url.slice(17, -8);
    //send userID from req.body
    let queryStr = `insert into Reviews (rating, reviewText, userID, resID, reviewDate) values (${req.body.rating}, "${req.body.reviewText}", ${req.body.userID}, ${id}, "${req.body.reviewDate}")`;
    console.log(queryStr)
    try {
      const result = await connection.asyncQuery(queryStr);
      // console.log(result);
      res.status(200).send("posted")
    } catch (err) {
      res.status(404).send(err)
    }
  }
};


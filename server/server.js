const express = require('express');
const path = require('path');
const controller = require('../db/controller.js');
const model = require('../db/model.js');

const app = express();
const port = 3000;

app.use(express.json());
//app.use(express.static(__dirname))

app.post('api/restaurants/:id/reviews', controller.post);

app.get('/api/restaurants/:id/reviews', controller.get);

//app.



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
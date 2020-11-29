const express = require('express');
const path = require('path');
const controller = require('../db/controller.js');
const compression = require('compression');

const app = express();
const port = 3000;

app.use(express.json());
app.use(compression());

app.use(express.static(__dirname + '/../public'));

app.post('/api/restaurants/:id/reviews', controller.post);

app.get('/api/restaurants/:id/reviews', controller.get);


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


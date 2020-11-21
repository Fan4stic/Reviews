const express = require('express');
const path = require('path');
const controller = require('../db/controller.js');
const model = require('../db/model.js');

const app = express();
const port = 3000;

app.use(express.json());

//for some reason this isnt working with path
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/../public'));

app.post('/api/restaurants/:id/reviews', controller.post);

app.get('/api/restaurants/:id/reviews', controller.get);


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


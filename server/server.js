const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
//app.use(express.static(__dirname))


//app.get('/api/restaurants/:id/reviews', callback )

//app.



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
const express = require('express');
const app = express();
const port = 3004;
const Controllers = require('./Controllers.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.static('./client/dist'))

app.get('/api/:roomId/photogallery', (req, res) => {
  console.log('index touched')
  Controllers.getPhotos(req, res);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
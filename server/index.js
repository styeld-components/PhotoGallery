const express = require('express');
const app = express();
const port = 3004;
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.static('./client/dist'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
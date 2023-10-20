const express = require('express');
const bodyParser = require('body-parser');
const getItems = require('./routes/getItems-route.js');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-type, Accept, Authorization'
    ),
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});


app.use('/images', express.static('images'))

app.use('/api/get-items', getItems);

const PORT = process.env.PORT || 8080;
app.listen(5000);

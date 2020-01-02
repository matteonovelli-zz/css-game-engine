const path = require('path');
const express = require('express');
const app = express();
const port = 3300;

const data = require('./data/data.json');

app.use('/data', express.static(path.join(__dirname, '/data')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));
app.use('/styles', express.static(path.join(__dirname, '/styles')));
app.use('/favicon.ico', express.static(path.join(__dirname, 'favicon.ico')));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

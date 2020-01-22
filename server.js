const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 6789;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

const users = {
  'abc': {
    email: 'john@stamos.com',
    password: '1234'
  },
  'def': {
    email: 'user@example.com',
    password: '5678'
  }
};

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

// catchall
app.get('*', (req, res) => {
  res.render('protected');
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});

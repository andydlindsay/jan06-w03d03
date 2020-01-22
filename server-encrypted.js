const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const app = express();
const port = process.env.PORT || 6789;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
// app.use(cookieParser());
app.use(cookieSession({
  name: 'lecture',
  keys: ['secret']
  // secret: 'my secret string'
}));

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

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  for (const key in users) {
    const user = users[key];
    if (user.email === email) {
      // user was found
      if (user.password === password) {
        // log the user in
        // res.cookie('userId', key);
        req.session.userId = key;
        res.redirect('/');
      } else {
        // password did not match
        // redirect to the login page
      }
    } else {
      // user was not found
      // redirect to register page
    }
  }
  // user not found
  // redirect to register page
});

// catchall
app.get('*', (req, res) => {
  const user = users[req.session.userId];
  if (!user) {
    res.redirect('/register');
  }
  res.render('protected', { user });
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});

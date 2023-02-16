const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./src/routs/post');
const Login = require('./src/routs/login');
const Register = require('./src/routs/register');

const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/text-files', {
  useNewUrlParser: true,
});

app.use('/post', Post);
app.use('/login', Login);
app.use('/register', Register);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Post = require('./src/routs/post');
const Login = require('./src/routs/login');
const Register = require('./src/routs/register');
const Port = process.env.PORT || 3000

const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.MONGO_CONNECT_URL}`, {
  useNewUrlParser: true,
});

app.use('/post', Post);
app.use('/login', Login);
app.use('/register', Register);

app.listen(Port, () => {
  console.log(`Server started on port ${Port}`);
});

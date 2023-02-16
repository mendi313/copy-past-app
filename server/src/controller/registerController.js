const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

async function addUser(req, res) {
  const { username, email } = req.body;
  if (username && email) {
    const emailExsists = await User.findOne({
      email: email,
    });
    const userNameExsists = await User.findOne({
      username: username,
    });
    if (emailExsists) {
      return res.status(400).send('Email Alredy In Use');
    } else if (userNameExsists) {
      return res.status(400).send('Username Alredy In Use');
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        uuid: uuidv4(),
      });
      try {
        newUser.save().then((user) => {
          return res.json(user);
        });
      } catch (err) {
        return res.json(err);
      }
    }
  } else {
    return res.status(403);
  }
}

module.exports = { addUser };

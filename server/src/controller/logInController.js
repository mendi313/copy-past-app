const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

async function authUser(req, res) {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        if (user.username !== req.body.username) return res.status(400).send('Username Dosent Match');
        bcrypt.compare(req.body.password, user.password, (err, match) => {
          if (match) {
            return res.json(user);
          } else {
            return res.status(400).send('Password Dosent Match');
          }
        });
      } else {
        return res.status(400).send('Email Dosent Exsist');
      }
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
}

module.exports = { authUser };

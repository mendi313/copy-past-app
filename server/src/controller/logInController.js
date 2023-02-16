const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

async function authUser(req, res) {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, match) => {
          if (match) {
            return res.json(user);
          } else {
            return res.status(400).send('Password not Match');
          }
        });
      } else {
        return res.status(400).send('Email Dosent Exsist');
      }
    })
    .catch((err) => {
      return res.json(err);
    });
}

module.exports = { authUser };

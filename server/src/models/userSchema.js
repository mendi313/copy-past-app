const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true // `email` must be unique
  },
  username:String,
  password: String,
  uuid: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', usersSchema);

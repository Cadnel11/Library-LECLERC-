const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },

  password: {
    type: String,
    require: true
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true
});

const model = mongoose.model("User", userSchema);
module.exports = model
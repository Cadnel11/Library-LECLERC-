const mongoose = require("mongoose");
const { type } = require("os");
const { ref } = require("process");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  isbn: {
    type: String,
    unique: true
  },

  description: String,

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

const model = mongoose.model("Book", bookSchema);

module.exports = model
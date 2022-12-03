const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ISBN:{
    type:String,
    required:true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  PublishedDate: {
    type: String,
    required: true,
  },
  Publisher: {
    type: String,
    required:true,
  }
});

module.exports = mongoose.model("Book", bookSchema);
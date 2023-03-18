const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  field:{
    type: String,
  },
  intent: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model("Image", imageSchema, "images");

module.exports = Image;

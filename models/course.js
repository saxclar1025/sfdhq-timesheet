const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var CourseSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: [Number]
  },

  commission: {
    type: [Number]
  },

  requiresInstructor: {
    type: Boolean,
    default: true
  }
});
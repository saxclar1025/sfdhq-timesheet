const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  firstName: {
    type: String
  },

  lastName: {
    type: String
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: String
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  isCaptain: {
    type: Boolean,
    default: false
  },

  isInstructor: {
    type: Boolean,
    default: false
  },

  isPayroll: {
    type: Boolean,
    default: false
  },

  entries: {
    type: [Schema.Types.ObjectId],
    ref: "Entry"
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
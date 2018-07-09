const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var EntrySchema = new Schema({
  task: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  unitPrice: {
    type: Number,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  note: {
    type: String
  }
});

var Entry = mongoose.model("Entry", EntrySchema);

module.exports = Entry;
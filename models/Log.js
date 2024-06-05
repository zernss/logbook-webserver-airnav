const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  date: String,
  tx1: String,
  tx2: String,
  battery1: Number,
  battery2: Number,
  temp: Number,
  technician: String,
  note: String
});

module.exports = mongoose.model('Log', logSchema);

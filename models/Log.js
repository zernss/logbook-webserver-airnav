const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  logType: String,
  date: String,
  tx1: String,
  tx2: String,
  battery1: String,
  battery2: String,
  temp: String,
  technician: String,
  note: String
});

module.exports = mongoose.model('Log', logSchema);

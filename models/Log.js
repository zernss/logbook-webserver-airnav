const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  date: String,
  tx1: String,
  tx2: String,
  battery1: String, // Changed to String
  battery2: String, // Changed to String
  temp: String,     // Changed to String
  technician: String,
  note: String
});

module.exports = mongoose.model('Log', logSchema);

const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  date: String,
  tx1: { type: String, enum: ['ON', 'ON LOAD', 'ON ANTENNA', 'OFF'] },
  tx2: { type: String, enum: ['ON', 'ON LOAD', 'ON ANTENNA', 'OFF'] },
  battery1: String,
  battery2: String,
  temp: String,
  technician: String,
  note: String
});

module.exports = mongoose.model('Log', logSchema);

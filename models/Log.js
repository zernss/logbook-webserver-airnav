const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  tx1: { type: String, enum: ['ON', 'ON ANTENNA', 'ON LOAD', 'OFF'], required: true },
  tx2: { type: String, enum: ['ON', 'ON ANTENNA', 'ON LOAD', 'OFF'], required: true },
  battery1: { type: String, required: true },
  battery2: { type: String, required: true },
  temp: { type: String, required: true },
  technician: { type: String, required: true },
  note: { type: String, required: true }
});

module.exports = mongoose.model('Log', logSchema);

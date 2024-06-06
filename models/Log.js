var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema({
  date: { type: Date, required: true },
  tx1: { type: String, required: true },
  tx2: { type: String, required: true },
  battery1: { type: Number, required: true },
  battery2: { type: Number, required: true },
  temp: { type: Number, required: true },
  technician: { type: String, required: true },
  note: { type: String },
  logType: { type: String, required: true }
});

module.exports = mongoose.model('Log', logSchema);

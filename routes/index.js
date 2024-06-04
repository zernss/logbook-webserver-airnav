const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

router.get('/', async (req, res) => {
  const logs = await Log.find();
  res.render('index', { logs });
});

router.post('/submit', async (req, res) => {
  const { date, time, tx1, tx2, battery1, battery2, temp, technician, note } = req.body;
  const log = new Log({
    date,
    time,
    tx1,
    tx2,
    battery1: `${battery1}V`,
    battery2: `${battery2}V`,
    temp: `${temp}C`,
    technician,
    note
  });
  await log.save();
  res.redirect('/');
});

module.exports = router;

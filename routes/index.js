const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

router.get('/', async (req, res) => {
  const logs = await Log.find();
  res.render('index', { logs });
});

router.post('/submit', async (req, res) => {
  const { date, tx1, tx2, battery1, battery2, temp, technician, note } = req.body;
  const log = new Log({ date, tx1, tx2, battery1, battery2, temp, technician, note });
  await log.save();
  res.redirect('/');
});

module.exports = router;

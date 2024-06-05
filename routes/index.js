const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

const handleLogSubmission = async (req, res, logType) => {
  const { date, tx1, tx2, battery1, battery2, temp, technician, note } = req.body;
  const log = new Log({
    logType,
    date,
    tx1,
    tx2,
    battery1: `${battery1} V`,
    battery2: `${battery2} V`,
    temp: `${temp} C`,
    technician,
    note
  });
  await log.save();
  res.redirect('/');
};

router.get('/', async (req, res) => {
  const logs = await Log.find();
  res.render('index', { logs });
});

router.post('/submit/localizer', async (req, res) => handleLogSubmission(req, res, 'localizer'));
router.post('/submit/glidepath', async (req, res) => handleLogSubmission(req, res, 'glidepath'));
router.post('/submit/middlemarker', async (req, res) => handleLogSubmission(req, res, 'middlemarker'));
router.post('/submit/selexlocalizer', async (req, res) => handleLogSubmission(req, res, 'selexlocalizer'));
router.post('/submit/selexglidepath', async (req, res) => handleLogSubmission(req, res, 'selexglidepath'));
router.post('/submit/selexmiddlemarker', async (req, res) => handleLogSubmission(req, res, 'selexmiddlemarker'));

module.exports = router;

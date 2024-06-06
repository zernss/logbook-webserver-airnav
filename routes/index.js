var express = require('express');
var router = express.Router();
var Log = require('../models/Log');

// Define your GET routes to serve the forms
router.get('/submit/selexlocalizer', function(req, res, next) {
  res.render('form', { title: 'Selex Localizer', formAction: '/submit/selexlocalizer' });
});

router.post('/submit/selexlocalizer', async (req, res) => {
  const { date, tx1, tx2, battery1, battery2, temp, technician, note } = req.body;
  const log = new Log({ date, tx1, tx2, battery1, battery2, temp, technician, note });
  await log.save();
  res.redirect('/main');
});

router.get('/submit/selexglidepath', function(req, res, next) {
  res.render('form', { title: 'Selex Glide Path', formAction: '/submit/selexglidepath' });
});

router.get('/submit/selexmiddlemarker', function(req, res, next) {
  res.render('form', { title: 'Selex Middle Marker', formAction: '/submit/selexmiddlemarker' });
});

router.get('/submit/mopienslocalizer', function(req, res, next) {
  res.render('form', { title: 'Mopiens Localizer', formAction: '/submit/mopienslocalizer' });
});

router.get('/submit/mopiensglidepath', function(req, res, next) {
  res.render('form', { title: 'Mopiens Glide Path', formAction: '/submit/mopiensglidepath' });
});

router.get('/submit/mopiensmiddlemarker', function(req, res, next) {
  res.render('form', { title: 'Mopiens Middle Marker', formAction: '/submit/mopiensmiddlemarker' });
});

// Define your POST routes to handle form submissions
router.post('/submit/selexlocalizer', function(req, res, next) {
  handleFormSubmission(req, res, next, 'Selex Localizer');
});

router.post('/submit/selexglidepath', function(req, res, next) {
  handleFormSubmission(req, res, next, 'Selex Glide Path');
});

router.post('/submit/selexmiddlemarker', function(req, res, next) {
  handleFormSubmission(req, res, next, 'Selex Middle Marker');
});

router.post('/submit/mopienslocalizer', function(req, res, next) {
  handleFormSubmission(req, res, next, 'Mopiens Localizer');
});

router.post('/submit/mopiensglidepath', function(req, res, next) {
  handleFormSubmission(req, res, next, 'Mopiens Glide Path');
});

router.post('/submit/mopiensmiddlemarker', function(req, res, next) {
  handleFormSubmission(req, res, next, 'Mopiens Middle Marker');
});

function handleFormSubmission(req, res, next, logType) {
  console.log('Received data:', req.body); // Debugging line

  var logData = {
    date: req.body.date,
    tx1: req.body.tx1,
    tx2: req.body.tx2,
    battery1: req.body.battery1,
    battery2: req.body.battery2,
    temp: req.body.temp,
    technician: req.body.technician,
    note: req.body.note,
    logType: logType
  };

  var log = new Log(logData);
  log.save(function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
}

module.exports = router;

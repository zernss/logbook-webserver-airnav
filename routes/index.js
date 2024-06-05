var express = require('express');
var router = express.Router();
var Log = require('../models/Log.js');

router.post('/submit/localizer', function(req, res, next) {
  var logData = {
    date: req.body.date,
    tx1: req.body.tx1,
    tx2: req.body.tx2,
    battery1: req.body.battery1,
    battery2: req.body.battery2,
    temp: req.body.temp,
    technician: req.body.technician,
    note: req.body.note,
    logType: 'Localizer'
  };
  var log = new Log(logData);
  log.save(function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

router.post('/submit/glidepath', function(req, res, next) {
  var logData = {
    date: req.body.date,
    tx1: req.body.tx1,
    tx2: req.body.tx2,
    battery1: req.body.battery1,
    battery2: req.body.battery2,
    temp: req.body.temp,
    technician: req.body.technician,
    note: req.body.note,
    logType: 'Glide Path'
  };
  var log = new Log(logData);
  log.save(function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

router.post('/submit/middlemarker', function(req, res, next) {
  var logData = {
    date: req.body.date,
    tx1: req.body.tx1,
    tx2: req.body.tx2,
    battery1: req.body.battery1,
    battery2: req.body.battery2,
    temp: req.body.temp,
    technician: req.body.technician,
    note: req.body.note,
    logType: 'Middle Marker'
  };
  var log = new Log(logData);
  log.save(function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

router.post('/submit/selexlocalizer', function(req, res, next) {
  var logData = {
    date: req.body.date,
    tx1: req.body.tx1,
    tx2: req.body.tx2,
    battery1: req.body.battery1,
    battery2: req.body.battery2,
    temp: req.body.temp,
    technician: req.body.technician,
    note: req.body.note,
    logType: 'Selex Localizer'
  };
  var log = new Log(logData);
  log.save(function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

router.post('/submit/selexglidepath', function(req, res, next) {
  var logData = {
    date: req.body.date,
    tx1: req.body.tx1,
    tx2: req.body.tx2,
    battery1: req.body.battery1,
    battery2: req.body.battery2,
    temp: req.body.temp,
    technician: req.body.technician,
    note: req.body.note,
    logType: 'Selex Glide Path'
  };
  var log = new Log(logData);
  log.save(function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

router.post('/submit/selexmiddlemarker', function(req, res, next) {
  var logData = {
    date: req.body.date,
    tx1: req.body.tx1,
    tx2: req.body.tx2,
    battery1: req.body.battery1,
    battery2: req.body.battery2,
    temp: req.body.temp,
    technician: req.body.technician,
    note: req.body.note,
    logType: 'Selex Middle Marker'
  };
  var log = new Log(logData);
  log.save(function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;

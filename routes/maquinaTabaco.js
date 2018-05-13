var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var MaquinaTabaco = require('../models/maquinaTabaco.js');

/* Get a todos los maquinaTabaco */
router.get('/', function(req, res, next) {
    MaquinaTabaco.find(function (err, maquinaTabacos) {
    if (err) return next(err);
    res.json(maquinaTabacos);
  });
});




/* Get maquinaTabaco por id */
router.get('/:id', function(req, res, next) {
    MaquinaTabaco.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Post maquinaTabaco */
router.post('/', function(req, res, next) {
    MaquinaTabaco.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});





/* Put maquinaTabaco */
router.put('/:id', function(req, res, next) {
    MaquinaTabaco.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete maquinaTabaco */
router.delete('/:id', function(req, res, next) {
    MaquinaTabaco.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
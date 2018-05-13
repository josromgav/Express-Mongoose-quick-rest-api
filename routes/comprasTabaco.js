var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ComprasTabaco = require('../models/comprasTabaco.js');

/* Get a todos los maquinaTabaco */
router.get('/', function(req, res, next) {
    ComprasTabaco.find(function (err, comprasTabaco) {
    if (err) return next(err);
    res.json(comprasTabaco);
  });
});

// /* Get a todos los maquinaTabaco */
// router.get('/', function(req, res, next) {
//   ComprasTabaco.find({proveedor:'pepi'},function (err, comprasTabaco) {
//   if (err) return next(err);
//   res.json(comprasTabaco);
//   });
// });



/* Get maquinaTabaco por id */
router.get('/:id', function(req, res, next) {
    ComprasTabaco.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Post maquinaTabaco */
router.post('/', function(req, res, next) {
    ComprasTabaco.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* Put maquinaTabaco */
router.put('/:id', function(req, res, next) {
    ComprasTabaco.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete maquinaTabaco */
router.delete('/:id', function(req, res, next) {
    ComprasTabaco.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
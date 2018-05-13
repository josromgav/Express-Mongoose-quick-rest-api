var mongoose = require('mongoose');

var MaquinaTabacoSchema = new mongoose.Schema({
  nombre:String,
  numeroSerie:String,
  marca:String,
  fechaCompra:Date,
  establecimientos:Object
});

module.exports = mongoose.model('MaquinaTabaco', MaquinaTabacoSchema);
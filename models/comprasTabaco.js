var mongoose = require('mongoose');

var ComprasTabacoSchema = new mongoose.Schema({
    proveedor: String,
    fecha: Date,
    cantidad: Number,
    unidadesCompradas: Number,
    valorUnidadRegalo: Number,
    unidadesRegalo: Number,
    eurosRegalo: Number,
});

module.exports = mongoose.model('ComprasTabaco', ComprasTabacoSchema);
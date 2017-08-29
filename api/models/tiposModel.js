'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoSchema = new Schema({
    nombre: {
        type: String,
        Required: 'Ingrese una tipo de respuesta'
    }
});

module.exports = mongoose.model('Tipos', TipoSchema);
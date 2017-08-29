'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EncuestadoSchema = new Schema({
    matricula: {
	    type: String,
    	Required: 'Ingrese su matricula'
    },
    nombre: {
        type: String,
        Required: 'Ingrese un nombre'
    },
    email: {
        type: String,
        Required: 'Ingrese su correo eletrónico'
    }
});

module.exports = mongoose.model('Encuestados', EncuestadoSchema);

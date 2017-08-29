'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RespuestaSchema = new Schema({
    encuestado: {type: Schema.Types.ObjectId, ref: 'Encuestados'},
    proyectos:[{
      proyecto: {type: Schema.Types.ObjectId, ref: 'Proyectos'},
      fecha: {type: String},
      respuestas: [{type: String}]
    }]
});

module.exports = mongoose.model('Respuestas', RespuestaSchema);

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PreguntaSchema = new Schema({
    pregunta: {
        type: String,
        Required: 'Ingrese una pregunta'
    },
    respuesta: {
        type: String,
        Required: 'Ingrese respuestas predeterminadas'
    },
    proyecto: {
        type: Schema.Types.ObjectId, ref: 'Proyectos'
    }
});

module.exports = mongoose.model('Preguntas', PreguntaSchema);

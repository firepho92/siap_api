'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProyectoSchema = new Schema({
    nombre: {
        type: String,
        Required: 'Ingrese un nombre para el proyecto'
    },
    descripcion: {
        type: String,
        Required: 'Ingresa una descripción'
    },
    rubros:[{
      rubro: String,
      preguntas: String
    }]
});

module.exports = mongoose.model('Proyectos', ProyectoSchema);

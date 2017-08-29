'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    usuario: {
      type: String
    },
    nombre: {
      type: String
    },
    password: {
      type: String
    }
});

module.exports = mongoose.model('Usuarios', UsuarioSchema);

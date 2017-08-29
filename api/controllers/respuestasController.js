'use strict';
var mongoose = require('mongoose'),
    Respuesta = mongoose.model('Respuestas');

exports.list_all_respuestas = function(req, res) {
    Respuesta.find({})
    .populate('encuestado')
    .populate('proyectos.proyecto')
    .exec((err, respuesta)=>{
      if(err)
        res.send(err)
      res.json(respuesta)
    })
};

exports.create_a_respuesta = function(req, res) {
    var new_respuesta = new Respuesta(req.body);
    new_respuesta.save(function(err, respuesta) {
        if (err)
            res.send(err);
        res.json(respuesta);
    });
};

exports.read_a_respuesta = function(req, res) {
    Respuesta.findById(req.params.respuestaId, function(err, respuesta) {
        if (err)
            res.send(err);
        res.json(respuesta);
    });
};

exports.update_a_respuesta = function(req, res) {
    Respuesta.findOneAndUpdate(req.params.respuestaId, req.body, { new: true }, function(err, respuesta) {
        if (err)
            res.send(err);
        res.json(respuesta);
    });
};

exports.delete_a_respuesta = function(req, res) {
    Respuesta.remove({ _id: req.params.respuestaId }, function(err, respuesta) {
        if (err)
            res.send(err);
        res.json({ message: 'Respuesta borrada con éxito' });
    });
};

exports.read_respuestas_by_encuestado = function(req, res){
  Respuesta.find({ encuestado: req.params.encuestadoId })
    .populate('encuestado')
    .populate('proyecto')
    .exec((err, respuesta)=>{
      if(err)
        res.send(err)
      res.json(respuesta)
    })
};

exports.push_respuestas = function(req, res){
  var resp;
  console.log(req.body.proyectos[0]);
  Respuesta.update({encuestado: req.body.encuestado}, {$push: {proyectos: req.body.proyectos[0]}}, (err, respuesta) => {
    if(err)
      res.send(err);
    res.json(respuesta);
  })
};

'use strict';
var mongoose = require('mongoose'),
    Pregunta = mongoose.model('Preguntas');

//Listar todas las preguntas
exports.list_all_preguntas = function(req, res) {
    Pregunta.find({'proyecto': req.params.proyectoId})
      .populate('tipo')
      .populate('proyecto')
      .exec(function(err, pregunta){
        if (err)
            res.send(err);
        res.json(pregunta)
      });
};

exports.create_a_pregunta = function(req, res) {
    var new_pregunta = new Pregunta(req.body);
    new_pregunta.save(function(err, pregunta) {
        if (err)
            res.send(err);
        res.json(pregunta);
    });
};

exports.read_a_pregunta = function(req, res) {
    Pregunta.findById(req.params.preguntaId, function(err, pregunta) {
        if (err)
            res.send(err);
        res.json(pregunta);
    });
};

exports.update_a_pregunta = function(req, res) {
    Pregunta.findOneAndUpdate(req.params.preguntaId, req.body, { new: true }, function(err, pregunta) {
        if (err)
            res.send(err);
        res.json(pregunta);
    });
};

exports.delete_a_pregunta = function(req, res) {
    Pregunta.remove({ _id: req.params.preguntaId }, function(err, pregunta) {
        if (err)
            res.send(err);
        res.json({ message: 'Pregunta borrada con éxito' });
    });
};

exports.delete_preguntas_by_proyecto = function(req, res) {
  Pregunta.remove({ proyecto: req.body.proyecto }, function(err, pregunta) {
    if(err)
      res.send(err);
    res.json({message: 'Pregunta borrada con éxito'})
  })
}

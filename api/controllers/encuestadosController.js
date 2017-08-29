'use strict';
var mongoose = require('mongoose'),
    Encuestado = mongoose.model('Encuestados');

exports.list_all_encuestados = function(req, res) {
    Encuestado.find({ encuestado: req.params.encuestadoId }, function(err, encuestado) {
        if (err)
            res.send(err);
        res.json(encuestado);
    });
};

exports.create_a_encuestado = function(req, res) {
  var new_encuestado = new Encuestado(req.body);
  new_encuestado.save(function(err, encuestado) {
      if (err)
          res.send(err);
      res.json(encuestado);
  });
};

exports.read_a_encuestado = function(req, res) {
    Encuestado.findById(req.params.encuestadoId, function(err, encuestado) {
        if (err)
            res.send(err);
        res.json(encuestado);
    });
};

exports.update_a_encuestado = function(req, res) {
    Encuestado.findOneAndUpdate(req.params.encuestadoId, req.body, { new: true }, function(err, encuestado) {
        if (err)
            res.send(err);
        res.json(encuestado);
    });
};

exports.delete_a_encuestado = function(req, res) {
    Encuestado.remove({ _id: req.params.encuestadoId }, function(err, encuestado) {
        if (err)
            res.send(err);
        res.json({ message: 'Encuestado borrado con éxito' });
    });
};

exports.read_a_encuestado_by_matricula = function(req, res) {
  Encuestado.findOne({ matricula: req.body.matricula }, function(err, encuestado) {
    if(err)
      res.send(err)
    res.json(encuestado)
  });
};

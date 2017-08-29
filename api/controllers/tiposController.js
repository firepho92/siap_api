'use strict';
var mongoose = require('mongoose'),
    Tipo = mongoose.model('Tipos');

exports.list_all_tipos = function(req, res) {
    Tipo.find({}, function(err, tipo) {
        if (err)
            res.send(err);
        res.json(tipo);
    });
};

exports.create_a_tipo = function(req, res) {
    var new_tipo = new Tipo(req.body);
    new_tipo.save(function(err, tipo) {
        if (err)
            res.send(err);
        res.json(tipo);
    });
};

exports.read_a_tipo = function(req, res) {
    Tipo.findById(req.params.tipoId, function(err, tipo) {
        if (err)
            res.send(err);
        res.json(pregunta);
    });
};

exports.update_a_tipo = function(req, res) {
    Tipo.findOneAndUpdate(req.params.tipoId, req.body, { new: true }, function(err, tipo) {
        if (err)
            res.send(err);
        res.json(tipo);
    });
};

exports.delete_a_tipo = function(req, res) {
    Tipo.remove({ _id: req.params.tipoId }, function(err, tipo) {
        if (err)
            res.send(err);
        res.json({ message: 'TIpo borrado con éxito' });
    });
};

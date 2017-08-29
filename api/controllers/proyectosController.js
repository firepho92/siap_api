'use strict';
var mongoose = require('mongoose'),
    Proyecto = mongoose.model('Proyectos');

//Listar todas las preguntas
exports.list_all_proyectos = function(req, res) {
    Proyecto.find({}).populate('usuario').exec(function(err, proyecto) {
        if (err)
            res.send(err);
        res.json(proyecto)
    });
};

exports.create_a_proyectos = function(req, res) {
    var new_proyecto = new Proyecto(req.body);
    new_proyecto.save(function(err, proyecto) {
        if (err)
            res.send(err);
        res.json(proyecto);
    });
};

exports.read_a_proyecto = function(req, res) {
    Proyecto.findById(req.params.proyectoId, function(err, proyecto) {
        if (err)
            res.send(err);
        res.json(proyecto);
    });
};

exports.update_a_proyecto = function(req, res) {
    Proyecto.findOneAndUpdate(req.params.proyectoId, req.body, { new: true }, function(err, proyecto) {
        if (err)
            res.send(err);
        res.json(proyecto);
    });
};

exports.delete_a_proyecto = function(req, res) {
    Proyecto.remove({ _id: req.params.proyectoId }, function(err, proyecto) {
        if (err)
            res.send(err);
        res.json({ message: 'Proyecto borrada con éxito' });
    });
};

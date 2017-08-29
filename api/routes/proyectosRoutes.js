'use strict';
module.exports = function(app) {
    var proyectos = require('../controllers/proyectosController');

    app.route('/proyectos')
        .get(proyectos.list_all_proyectos)
        .post(proyectos.create_a_proyectos);

    app.route('/proyectos/:proyectoId')
        .get(proyectos.read_a_proyecto)
        .put(proyectos.update_a_proyecto)
        .delete(proyectos.delete_a_proyecto);
};
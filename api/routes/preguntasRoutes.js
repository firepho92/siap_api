'use strict';
module.exports = function(app) {
    var preguntas = require('../controllers/preguntasController');

    //Rutas preguntas
    app.route('/preguntas/:proyectoId')
        .get(preguntas.list_all_preguntas);

    app.route('/preguntas')
        .post(preguntas.create_a_pregunta);

    app.route('/preguntas/:preguntaId')
        .get(preguntas.read_a_pregunta)
        .put(preguntas.update_a_pregunta)
        .delete(preguntas.delete_a_pregunta);

    app.route('/preguntas/proyecto')
        .post(preguntas.delete_preguntas_by_proyecto);
};

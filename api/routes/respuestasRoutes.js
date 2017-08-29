'use strict';
module.exports = function(app) {
    var respuestas = require('../controllers/respuestasController');

    app.route('/respuestas')
        .get(respuestas.list_all_respuestas)
        .post(respuestas.create_a_respuesta);

    app.route('/respuestas/:respuestaId')
        .get(respuestas.read_a_respuesta)
        .put(respuestas.update_a_respuesta)
        .delete(respuestas.delete_a_respuesta);

    app.route('/respuestaEncuestado/:encuestadoId')
        .get(respuestas.read_respuestas_by_encuestado);

    app.route('/pushRespuestas')
        .post(respuestas.push_respuestas);

};

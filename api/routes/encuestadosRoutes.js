'use strict';
module.exports = function(app) {
    var encuestados = require('../controllers/encuestadosController');

    app.route('/encuestados')
        .get(encuestados.list_all_encuestados)
        .post(encuestados.create_a_encuestado);

    app.route('/encuestados/:encuestadoId')
        .get(encuestados.read_a_encuestado)
        .put(encuestados.update_a_encuestado)
        .delete(encuestados.delete_a_encuestado);

    app.route('/encuestado')
        .post(encuestados.read_a_encuestado_by_matricula);
};

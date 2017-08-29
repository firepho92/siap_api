'use strict';
module.exports = function(app) {
    var tipos = require('../controllers/tiposController');

    //Rutas tipos
    app.route('/tipos')
        .get(tipos.list_all_tipos)
        .post(tipos.create_a_tipo);

    app.route('/tipos/:tipoId')
        .get(tipos.read_a_tipo)
        .put(tipos.update_a_tipo)
        .delete(tipos.delete_a_tipo);
};
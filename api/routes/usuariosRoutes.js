'use strict';
module.exports = function(app) {
    var usuarios = require('../controllers/usuariosController');

    //Rutas respuestas
    app.route('/usuarios')
        .get(usuarios.list_all_usuarios)
        .post(usuarios.create_a_usuario);

    app.route('/usuarios/:usuarioId')
        .get(usuarios.read_a_usuario)
        .put(usuarios.update_a_usuario)
        .delete(usuarios.delete_a_usuario);

    app.route('/login')
        .post(usuarios.login);
};

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    mongoose = require('mongoose'),
    Pregunta = require('./api/models/preguntasModel'),
    Tipo = require('./api/models/tiposModel'),
    Proyecto = require('./api/models/proyectosModel'),
    Encuestado = require('./api/models/encuestadosModel'),
    Respuesta = require('./api/models/respuestasModel'),
    Usuario = require('./api/models/usuariosModel'),

    bodyParser = require('body-parser');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://root:admin@ds161713.mlab.com:61713/siap');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(function (req, res, next) {

      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);

      // Pass to next layer of middleware
      next();
  });

var preguntasRoutes = require('./api/routes/preguntasRoutes'),
    tiposRoutes = require('./api/routes/tiposRoutes'),
    proyectosRoutes = require('./api/routes/proyectosRoutes'),
    encuestadosRoutes = require('./api/routes/encuestadosRoutes'),
    respuestasRoutes = require('./api/routes/respuestasRoutes'),
    usuariosRoutes = require('./api/routes/usuariosRoutes');

preguntasRoutes(app);
tiposRoutes(app);
proyectosRoutes(app);
encuestadosRoutes(app);
respuestasRoutes(app);
usuariosRoutes(app);

app.listen(port);

console.log(`Tests' listening on port ${port}`);

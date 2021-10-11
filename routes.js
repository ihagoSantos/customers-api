const { Router } = require('express');
const ClienteController = require('./src/api/controllers/clienteController');
const routes = new Router();

routes.post('/cliente', ClienteController.create);

module.exports = routes;
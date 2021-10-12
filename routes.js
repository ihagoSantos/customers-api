const { Router } = require('express');
const ClienteController = require('./src/api/controllers/clienteController');
const CidadeController = require('./src/api/controllers/cidadeController');
const routes = new Router();

// Rotas de Cliente
routes
    .get('/customers/getById/:id', ClienteController.findById)
    .get('/customers/getByName/:nome', ClienteController.findByName)
    .post('/customers', ClienteController.create)
    .patch('/customers/editName/:id', ClienteController.edit)
    .delete('/customers/:id', ClienteController.delete);

// Rotas de Cidade
routes
    .get('/cities/getByName/:nome', CidadeController.findByName)
    .get('/cities/getByState/:estado', CidadeController.findByState)
    .post('/cities', CidadeController.create)

module.exports = routes;
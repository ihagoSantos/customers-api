const { Router } = require('express');
const ClienteController = require('./src/api/controllers/clienteController');
const routes = new Router();

routes
    .get('/customers/getById/:id', ClienteController.findById)
    .get('/customers/getByName/:nome', ClienteController.findByName)
    .post('/customers', ClienteController.create)
    .patch('/customers/editName/:id', ClienteController.edit)
    .delete('/customers/:id', ClienteController.delete)

module.exports = routes;
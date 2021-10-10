const { Router } = require('express');
const Cliente = require('./src/cliente/entity/cliente');
const routes = new Router();

routes.get('/', (req, res) => {
    let cliente = new Cliente('nomeCompleto', 'sexo', 'dataNascimento', 'idade', 'cidade');

    res.send({ cliente });
});

module.exports = routes;
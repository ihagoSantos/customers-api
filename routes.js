const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
    res.send({message: 'Connected with success!'});
});

module.exports = routes;
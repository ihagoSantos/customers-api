const express = require('express');
const routes = require('./routes');

class App 
{
    constructor()
    {
        this.server = express();
        this.useJson();
        this.useRoutes();
    }

    useRoutes()
    {
        this.server.use(routes);
    }

    useJson(){
        this.server.use(express.json());
    }
}

module.exports = new App().server;
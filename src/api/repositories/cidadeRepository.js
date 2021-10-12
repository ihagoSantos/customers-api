const Cidade = require('../models/cidade/cidade');

const Repository = require('./repository');
class CidadeRepository extends Repository{
    constructor(model){
        super(model);
    }    
}

module.exports = new CidadeRepository(Cidade);

const cidadeValidator = require('../validators/cidadeValidator');
const { Op } = require("sequelize");
const Cidade = require('../models/cidade/cidade');
const Repository = require('../repositories/repository');
const Service = require('./service');
class CidadeService extends Service {
    
    constructor(model){
        super(new Repository(model), cidadeValidator);
    }

    findByState(estado){
        return new Promise((resolve, reject) => {
            const where = {
                estado: {
                    [Op.substring]: estado,
                }
            }

            this.repository.findAll(where)
                .then(callback => resolve(callback))
                .catch(error => reject(error));
        });
    }

}

module.exports = new CidadeService(Cidade);
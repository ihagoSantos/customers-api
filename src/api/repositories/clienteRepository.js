const Cliente = require('../models/cliente/cliente');
const clienteConstants = require('../../constants/clienteConstants');
const Cidade = require('../models/cidade/cidade');
const Repository = require('./repository');
class ClienteRepository extends Repository{

    constructor(model){
        super(model);
    }

    async edit(data, where){
        return new Promise((resolve, reject) => {
            Cliente.update(data, { where })
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => reject(error));
        });
    }

    async delete(where){
        return new Promise((resolve, reject) => {
            Cliente.destroy({ where })
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => reject(error));
        });
    }
}

module.exports = new ClienteRepository(Cliente);
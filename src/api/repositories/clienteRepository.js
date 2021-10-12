const Cliente = require('../models/cliente/cliente');
const clienteConstants = require('../../constants/clienteConstants');
const Cidade = require('../models/cidade/cidade');
class ClienteRepository {

    async create(cliente){
        return new Promise((resolve, reject) => {
            const data = {
                nomeCompleto: cliente.getNomeCompleto(),
                sexo: cliente.getSexo(),
                dataNascimento: cliente.getDataNascimento(),
                idade: cliente.getIdade(),
                cidadeId: cliente.getCidadeId()
            };
            Cliente.create(data).then(callback => {
                if(callback.dataValues){
                    cliente.setId(callback.dataValues.id);
                    resolve(cliente);
                }
                reject(new Error(clienteConstants.error.erroCadastrarCliente))
            }).catch(error => {
                reject(error);
            });
        });
    }

    async find(where){
        return new Promise((resolve, reject) => {
            Cliente.findOne({ where, include: {
                model: Cidade,
                required: true
            } })
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => reject(error));
        });
    }

    async findAll(where){
        return new Promise((resolve, reject) => {
            Cliente.findAll({ where, include: {
                model: Cidade,
                required: true
            } })
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => reject(error));
        });
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

module.exports = new ClienteRepository();
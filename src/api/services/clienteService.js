const clienteValidator = require('../validators/clienteValidator');
const cidadeValidator = require('../validators/cidadeValidator');
const ClienteRepository = require('../repositories/clienteRepository');
const CidadeRepository = require('../repositories/cidadeRepository');
const { Op } = require("sequelize");
const clienteConstants = require('../../constants/clienteConstants');
const cidadeConstants = require('../../constants/cidadeConstants');
const errorHelper = require('../../helpers/errorHelper');
class ClienteService {
    
    constructor(){}

    create(cliente){
        
        clienteValidator.validarCliente(cliente);

        return new Promise((resolve, reject) => {
            CidadeRepository.find(cliente.cidadeId)
                .then(cidade => {
                    if(cidade){
                        const cidadeId = cidade.dataValues.id;
                        cliente.setCidadeId(cidadeId);
                        ClienteRepository.create(cliente)
                            .then(callback => resolve(callback))
                            .catch(error => reject(error));
                    }else{
                        reject(errorHelper.notFoundError(cidadeConstants.error.cidadeNaoCadastrada));
                    }
                })
                .catch(error => reject(error));
        });

    }

    findById(id){
        clienteValidator.validarId(id);
        return new Promise((resolve, reject) => {
            const where = { id };
            ClienteRepository.find(where)
                .then(callback => resolve(callback))
                .catch(error => reject(error));
        });
    }
    findByName(nome){
        
        return new Promise((resolve, reject) => {
            const where = {
                nomeCompleto: {
                    [Op.substring]: nome,
                }
            }
            ClienteRepository.findAll(where)
                .then(callback => resolve(callback))
                .catch(error => reject(error));
        });
    }

    editName(id, nomeCompleto){
        clienteValidator.validarId(id);
        clienteValidator.validarNomeCompleto(nomeCompleto);

        return new Promise((resolve, reject) => {
            const data = { nomeCompleto };
            const where = { id };
            ClienteRepository.edit(data, where)
                .then(callback => {
                    const status = callback[0];
                    if(!status){
                        reject(errorHelper.notFoundError(clienteConstants.error.clienteNaoEncontrado));
                    }
                    resolve( this.findById(id) );
                })
                .catch(error => reject(error));
        });
    }

    delete(id){
        clienteValidator.validarId(id);
        return new Promise((resolve, reject) => {
            const where = { id };
            ClienteRepository.delete(where)
                .then(callback => {
                    if(!callback){
                        reject(errorHelper.notFoundError(clienteConstants.error.clienteNaoEncontrado));
                    }
                    resolve();
                })
                .catch(error => reject(error));
        });
    }

}

module.exports = new ClienteService();
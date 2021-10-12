const clienteValidator = require('../validators/clienteValidator');
const ClienteRepository = require('../repositories/clienteRepository');
const clienteConstants = require('../../constants/clienteConstants');
const cidadeConstants = require('../../constants/cidadeConstants');
const errorHelper = require('../../helpers/errorHelper');
const queryOptionsHelper = require('../../helpers/queryOptionsHelper');
const Cliente = require('../models/cliente/cliente');
const Cidade = require('../models/cidade/cidade');
const Repository = require('../repositories/repository');
const Service = require('./service');
const clienteRepository = require('../repositories/clienteRepository');
class ClienteService extends Service {
    
    constructor(model){
        super(new Repository(model), clienteValidator);
    }

    create(cliente){
        
        this.validator.validarCliente(cliente);

        return new Promise((resolve, reject) => {
            const where = { where: cliente.cidadeId };
            this.repository.find(where)
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
        this.validator.validarId(id);
        return new Promise((resolve, reject) => {
            const where = { id };
            this.repository.find(queryOptionsHelper.getQueryOptions(where, Cidade))
                .then(callback => resolve(callback))
                .catch(error => reject(error));
        });
    }
    editName(id, nomeCompleto){
        this.validator.validarId(id);
        this.validator.validarNomeCompleto(nomeCompleto);

        return new Promise((resolve, reject) => {
            const data = { nomeCompleto };
            const where = { id };
            clienteRepository.edit(data, where)
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
        this.validator.validarId(id);
        return new Promise((resolve, reject) => {
            const where = { id };
            clienteRepository.delete(where)
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

module.exports = new ClienteService(Cliente);
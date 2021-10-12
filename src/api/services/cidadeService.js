const cidadeValidator = require('../validators/cidadeValidator');
const CidadeRepository = require('../repositories/cidadeRepository');
const { Op } = require("sequelize");
class ClienteService {
    
    constructor(){}

    create(cidade){
        cidadeValidator.validarCidade(cidade);
        return new Promise((resolve, reject) => {
            CidadeRepository.create(cidade)
                .then(callback => resolve(callback))
                .catch(error => reject(error));
        });
    }

    findByName(nome){
        return new Promise((resolve, reject) => {
            const where = {
                nome: {
                    [Op.substring]: nome,
                }
            }
            CidadeRepository.findAll(where)
                .then(callback => resolve(callback))
                .catch(error => reject(error));
        });
    }

    findByState(estado){
        return new Promise((resolve, reject) => {
            const where = {
                estado: {
                    [Op.substring]: estado,
                }
            }
            CidadeRepository.findAll(where)
                .then(callback => resolve(callback))
                .catch(error => reject(error));
        });
    }
    editName(id, nomeCompleto){
        // clienteValidator.validarId(id);
        // clienteValidator.validarNomeCompleto(nomeCompleto);

        // return new Promise((resolve, reject) => {
        //     const data = { nomeCompleto };
        //     const where = { id };
        //     ClienteRepository.edit(data, where)
        //         .then(callback => {
        //             const status = callback[0];
        //             if(!status){
        //                 reject(errorHelper.notFoundError(clienteConstants.error.clienteNaoEncontrado));
        //             }
        //             resolve( this.findById(id) );
        //         })
        //         .catch(error => reject(error));
        // });
    }

    delete(id){
        // clienteValidator.validarId(id);
        // return new Promise((resolve, reject) => {
        //     const where = { id };
        //     ClienteRepository.delete(where)
        //         .then(callback => {
        //             if(!callback){
        //                 reject(errorHelper.notFoundError(clienteConstants.error.clienteNaoEncontrado));
        //             }
        //             resolve();
        //         })
        //         .catch(error => reject(error));
        // });
    }

}

module.exports = new ClienteService();
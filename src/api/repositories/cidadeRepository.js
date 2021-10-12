const Cidade = require('../models/cidade/cidade');
const cidadeConstants = require('../../constants/cidadeConstants');
class CidadeRepository {
    async create(cidade){
        
        return new Promise((resolve, reject) => {
            const data = {
                nome: cidade.getNome(),
                estado: cidade.getEstado(),
            };
            Cidade.create(data).then(callback => {
                if(callback.dataValues){
                    cidade.setId(callback.dataValues.id);
                    resolve(cidade);
                }
                reject(new Error(cidadeConstants.error.erroCadastrarCidade))
            }).catch(error => {
                reject(error);
            });

        });
    }

    async find(where){
        return new Promise((resolve, reject) => {
            Cidade.findOne({ where })
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => reject(error));
        });
    }

    async findAll(where){
        return new Promise((resolve, reject) => {
            Cidade.findAll({ where })
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => reject(error));
        });
    }
    
}

module.exports = new CidadeRepository();

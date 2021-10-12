const Validator = require('./validator');
const cidadeConstants = require('../../constants/cidadeConstants');

class CidadeValidator extends Validator {

    constructor() {
        super();
    }

    validarCidade(cidade){
        this.validarCidadeCliente(cidade);
        this.validarNome(cidade.nome);
        this.validarEstado(cidade.estado);
    }

    validarCidadeCliente(cidade){
        if(!cidade)
            throw new TypeError(cidadeConstants.error.cidadeNaoInformada);
    }

    validarNome(nome){        
        if(!nome)
            throw new TypeError(cidadeConstants.error.nomeCidadeNaoInformada);
        if(!this.isValidString(nome)) 
            throw new TypeError(cidadeConstants.error.nomeString);
    }
    validarEstado(estado){        
        if(!estado)
            throw new TypeError(cidadeConstants.error.estadoCidadeNaoInformada);
        if(!this.isValidString(estado)) 
            throw new TypeError(cidadeConstants.error.estadoString);
    }

}

module.exports = new CidadeValidator();
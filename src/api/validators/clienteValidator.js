const Validator = require('./validator');
const clienteConstants = require('../../constants/clienteConstants');
class ClienteValidator extends Validator {
    
    #sexoValido = ['masculino', 'feminino', 'outro'];

    constructor() {
        super();
    }

    validarCliente(cliente){
        this.validarNomeCompleto(cliente.nomeCompleto);
        this.validarSexo(cliente.sexo);
        this.validarDataNascimento(cliente.dataNascimento);
        this.validarIdade(cliente.idade);
    }

    validarNomeCompleto(nomeCompleto){        
        if(!this.isValidString(nomeCompleto)) 
            throw new TypeError(clienteConstants.error.nomeCompletoString);

        if(!this.isValidNumeroCaracteresNomeCompleto(nomeCompleto)) 
            throw new TypeError(clienteConstants.error.nomeCompletoNumeroCaracteres);
    }

    isValidNumeroCaracteresNomeCompleto(nomeCompleto){
        return nomeCompleto.length >= 5;
    }

    validarSexo(sexo){
        if(!this.isValidString(sexo))
            throw new TypeError(clienteConstants.error.sexoDeveSerString);
        
        if(!this.isSexoValido(sexo))
            throw new TypeError(clienteConstants.error.sexoValoresValidos);
    }
    isSexoValido(sexo){
        return this.#sexoValido.includes(sexo);
    }

    validarDataNascimento(data){
        if(!this.isValidDate(data))
            throw new TypeError(clienteConstants.error.dataFormatoValido);
        
        if(!this.isDataMenorQueAtual(data))
            throw new TypeError(clienteConstants.error.dataDeveSerMenorQueDataAtual);
        
    }

    isValidDate(date){
        let rxDatePattern = /^(\d{4})\-(\d{1,2})\-(\d{1,2})$/;
        let dtArray = date.match(rxDatePattern);
        
        if (dtArray == null) 
            return false;
        
        return true;
    }

    isDataMenorQueAtual(data){
        return new Date(data) <= new Date();
    }

    validarIdade(idade){
        if(!this.isValidInteger(idade))
            throw new TypeError(clienteConstants.error.idadeDeveSerInteiro);
    }

    validarId(id){
        if(!id)
            throw new TypeError(clienteConstants.error.idDeveSerInteiro);
        if(!this.isValidInteger(id))
            throw new TypeError(clienteConstants.error.idDeveSerInteiro);
    }
}

module.exports = new ClienteValidator();
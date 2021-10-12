const cidadeValidator = require('../../validators/cidadeValidator');
const CidadeModel = require('../../models/cidade/cidadeModel');
class Cliente 
{
    constructor(nomeCompleto, sexo, dataNascimento, idade, cidadeId)
    {
        
        this.nomeCompleto = nomeCompleto;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.idade = idade;
        this.cidadeId = cidadeId;
    }

    getId()
    {
        return this.id;
    }
    setId(id)
    {
        this.id = id;
    }
    
    getNomeCompleto()
    {
        return this.nomeCompleto;
    }
    setNomeCompleto(nomeCompleto)
    {
        this.nomeCompleto = nomeCompleto;
    }
    
    getSexo()
    {
        return this.sexo;
    }
    setSexo(sexo)
    {
        this.sexo = sexo;
    }
    
    getDataNascimento()
    {
        return this.dataNascimento;
    }
    setDataNascimento(dataNascimento)
    {
        this.dataNascimento = dataNascimento;
    }
    
    getIdade()
    {
        return this.idade;
    }
    setIdade(idade)
    {
        this.idade = idade;
    }
    
    getCidadeId()
    {
        return this.cidadeId;
    }
    setCidadeId(cidadeId)
    {
        this.cidadeId = cidadeId;
    }

}

module.exports = Cliente;

class Cliente 
{
    constructor(nomeCompleto, sexo, dataNascimento, idade, cidade)
    {
        this.nomeCompleto = nomeCompleto;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.idade = idade;
        this.cidade = cidade;
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
    
    getCidade()
    {
        return this.cidade;
    }
    setCidade(cidade)
    {
        this.cidade = cidade;
    }

}

module.exports = Cliente;
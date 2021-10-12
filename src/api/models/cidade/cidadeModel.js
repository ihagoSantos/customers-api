class Cidade {

    constructor(nome, estado){
        this.nome = nome;
        this.estado = estado;
    }

    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }
    getEstado(){
        return this.estado;
    }
    setEstado(estado){
        this.estado = estado;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
}

module.exports = Cidade;
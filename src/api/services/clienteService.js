const ClienteEntity = require('../models/cliente/clienteModel');

class ClienteUseCase
{
    #repositorio;
    constructor(repositorio){
        this.#repositorio = repositorio;
    }

    // search(query)
    // {
    //     return this.#repositorio.search(query);
    // }

    insert(cliente)
    {
        return this.#repositorio.store(cliente);
    }

    // update(id, cliente)
    // {

    // }

    // delete(id)
    // {

    // }
}

module.exports = ClienteUseCase;
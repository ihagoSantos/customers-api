const Cliente = require('../models/cliente/clienteModel');
const ClienteRepository = require('../repositories/clienteRepository');
const ClienteValidator = require('../validators/clienteValidator');
const clienteValidator = new ClienteValidator();
const errorHelper = require('../../helpers/errorHelper');
class ClienteController 
{
    async create(req, res)
    {
        try {
            let { nomeCompleto, sexo, dataNascimento, idade } = req.body;
            const cliente = new Cliente(nomeCompleto, sexo, dataNascimento, idade);
            clienteValidator.validarCliente(cliente);
            const response = ClienteRepository.create(cliente);
            
            res.status(200).json({ response });
        } catch (e) {
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
    

}

module.exports = new ClienteController();
const Cliente = require('../models/cliente/clienteModel');
const ClienteService = require('../services/clienteService');
const errorHelper = require('../../helpers/errorHelper');
const clienteConstants = require('../../constants/clienteConstants');
class ClienteController 
{
    async create(req, res)
    {
        try {
            let { nomeCompleto, sexo, dataNascimento, idade } = req.body;
            const cliente = new Cliente(nomeCompleto, sexo, dataNascimento, idade);
            const response = await ClienteService.create(cliente);
            res.status(200).json({ message: clienteConstants.success.clienteCadastradoSucesso, data: response });
        } catch (e) {
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
    
    async findById(req, res){
        try {
            const id = parseInt(req.params.id);
            const response = await ClienteService.findById(id);
            res.status(200).json({ data: response });
        } catch (e) {
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
    async findByName(req, res){
        try {
            const nome = req.params.nome;
            const response = await ClienteService.findByName(nome);
            res.status(200).json({ data: response });
        } catch (e) {
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
    async edit(req, res){
        try {
            const id = parseInt(req.params.id);
            const nomeCompleto = req.body.nome;
            
            const response = await ClienteService.editName(id,nomeCompleto);

            res.status(200).json({ message: clienteConstants.success.clienteEditadoSucesso, data: response });
        } catch (e) {
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }

    async delete(req, res){
        try {
            const id = parseInt(req.params.id);
            const response = await ClienteService.delete(id);
            res.status(200).json({ message: clienteConstants.success.clienteRemovidoSucesso, data: response });
        } catch (e) {
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
}

module.exports = new ClienteController();
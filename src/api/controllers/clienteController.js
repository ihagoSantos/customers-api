const Cliente = require('../models/cliente/clienteModel');
const ClienteService = require('../services/clienteService');
const errorHelper = require('../../helpers/errorHelper');
const clienteConstants = require('../../constants/clienteConstants');
const Cidade = require('../models/cidade/cidade');
class ClienteController 
{
    async create(req, res)
    {
        // #swagger.tags = ['Cliente']
        // #swagger.summary = 'Endpoint responsável pela criação de um cliente'
        
        try {
            let { nomeCompleto, sexo, dataNascimento, idade, cidadeId } = req.body;
            const cliente = new Cliente(nomeCompleto, sexo, dataNascimento, idade, cidadeId);
            const response = await ClienteService.create(cliente);
            res.status(200).json({ message: clienteConstants.success.clienteCadastradoSucesso, data: response });
        } catch (e) {
            console.error("Error", e);
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
    
    async findById(req, res){
        // #swagger.tags = ['Cliente']
        // #swagger.summary = 'Endpoint responsável pela busca do cliente pelo ID'
        try {
            const id = parseInt(req.params.id);
            const response = await ClienteService.findById(id);
            res.status(200).json({ data: response });
        } catch (e) {
            console.error("Error", e);
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
    async findByName(req, res){
        // #swagger.tags = ['Cliente']
        // #swagger.summary = 'Endpoint responsável pela busca do cliente pelo nome'
        try {
            const nome = req.params.nome;
            const response = await ClienteService.findByName(nome);
            res.status(200).json({ data: response });
        } catch (e) {
            console.error("Error", e);
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
    async edit(req, res){
        // #swagger.tags = ['Cliente']
        // #swagger.summary = 'Endpoint responsável pela edição do nome do cliente'
        try {
            const id = parseInt(req.params.id);
            const nomeCompleto = req.body.nome;
            
            const response = await ClienteService.editName(id,nomeCompleto);

            res.status(200).json({ message: clienteConstants.success.clienteEditadoSucesso, data: response });
        } catch (e) {
            console.error("Error", e);
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }

    async delete(req, res){
        // #swagger.tags = ['Cliente']
        // #swagger.summary = 'Endpoint responsável pela exclusão do cliente pelo id'
        try {
            const id = parseInt(req.params.id);
            const response = await ClienteService.delete(id);
            res.status(200).json({ message: clienteConstants.success.clienteRemovidoSucesso, data: response });
        } catch (e) {
            console.error("Error: ", e);
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
}

module.exports = new ClienteController();
const Cidade = require('../models/cidade/cidadeModel');
const CidadeService = require('../services/cidadeService');
const errorHelper = require('../../helpers/errorHelper');
const cidadeConstants = require('../../constants/cidadeConstants');
class CidadeController {
    async create(req, res){
        try {
            let { nome, estado } = req.body;
            const cidade = new Cidade(nome, estado);
            const response = await CidadeService.create(cidade);
            res.status(200).json({ message: cidadeConstants.success.cidadeCadastradaSucesso, data: response });
        } catch (e) {
            console.error("Error", e);
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
    async findByName(req, res){
        try {
            const nome = req.params.nome;
            const response = await CidadeService.findByName(nome);
            res.status(200).json({ data: response });
        } catch (e) {
            console.error("Error", e);
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
    async findByState(req, res){
        try {
            const estado = req.params.estado;
            const response = await CidadeService.findByState(estado);
            res.status(200).json({ data: response });
        } catch (e) {
            console.error("Error", e);
            const error = errorHelper.retornaErroFormatado(e);
            res.status(error.code || 500).json({ error });
        }
    }
}

module.exports = new CidadeController();
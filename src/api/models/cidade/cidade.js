const Sequelize = require('sequelize');

const database = require('../../../../config/database');

const Cidade = database.define('cidade', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Cidade;
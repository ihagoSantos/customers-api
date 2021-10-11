const Sequelize = require('sequelize');

const database = require('../../../../config/database');

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeCompleto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sexo: {
        type: Sequelize.ENUM,
        values: ['masculino','feminino','outro'],
        allowNull: false,
    },
    dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Cliente;
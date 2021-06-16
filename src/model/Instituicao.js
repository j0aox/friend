const Sequelize = require('sequelize');
const connection = require('../database/database');

const Instituicao = connection.define('institution', {
    lat: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }, lng: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }, name: {
        type: Sequelize.STRING,
        allowNull: false
    }, about: {
        type: Sequelize.TEXT,
        allowNull: false
    }, whatsapp: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, instructions: {
        type: Sequelize.TEXT,
        allowNull: false
    }, opening_hours: {
        type: Sequelize.STRING,
        allowNull: false
    }, open_on_weekends: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

// Essa linha de baixo sincroniza a model com banco de dados
Instituicao.sync({force: false});

module.exports = Instituicao;
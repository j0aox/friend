const Sequelize = require('sequelize');
const connection = require('../database/database');

const User = connection.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Essa linha de baixo sincroniza a model com banco de dados
User.sync({force: false});

module.exports = User;
const Sequelize = require('sequelize');
const connection = require('../database/database');

const User = connection.define('user', {
    email: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }, password: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

// Essa linha de baixo sincroniza a model com banco de dados
//User.sync({force: true});

module.exports = User;
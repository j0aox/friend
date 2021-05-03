const sequelize = require('sequelize');

const connection = new sequelize('amigo','root','root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports =  connection;
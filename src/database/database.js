const sequelize = require('sequelize');

const connection = new sequelize('amigo','root','root', {
    host: 'localhost',
    dialect: 'mysql'
});

// Database
connection
    .authenticate()
    .then(() => {
    console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    });

module.exports = connection;
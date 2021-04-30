const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const path = require('path');
const router = require('./routes');

// Iniciando o express
const app = express();

// Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    });

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Utilizando os arquivos static
app.use(express.static('public'));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.use(router);

// Servidor
app.listen(5000, () => {
    console.log("O servidor está rodando!");
});
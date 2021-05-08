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

// Configurando o View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Utilizando os arquivos static
app.use(express.static('public'));

// Configurando o Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rota index
app.get('/', (req, res) => {
    res.render('index');
});

// Rotas 
app.use(router);

// Servidor
const host = 'localhost';
const port = 5000;

app.listen(port, host, () => {
    console.log(`O servidor está rodando na porta http://${host}:${port}`);
});
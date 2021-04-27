const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

// View engine
app.set('view engine', 'ejs');

// Utilizando os arquivos static
app.use(express.static('public'));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database
connection
    .authenticate()
    .then(() => {
    console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    });

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(5000, () => {
    console.log("O servidor está rodando!");
});
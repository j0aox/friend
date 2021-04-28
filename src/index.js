const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database");
const path = require('path'); 

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Utilizando os arquivos static
app.use(express.static('public'));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(5000, () => {
    console.log("O servidor está rodando!");
});
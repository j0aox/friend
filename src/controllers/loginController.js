const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');

router.get('/login', (req, res) => {
    return res.render('login');
});

router.get('/create-login', (req, res) => {
    return res.render('create-login');
});

router.post('/create-login/save', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    User.create({
        email: email,
        password: hash,
    }).then(() => {
        res.redirect('/create-instituicao');
    }).catch((err) => {
        //console.log(err);
        res.redirect('/');
    });
});

router.get('/', (req, res) => {
    return res.render('index');
});

module.exports = router;
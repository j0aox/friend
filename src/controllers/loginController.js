const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.get('/login', (req, res) => {
    return res.render('login');
});

router.get('/create-login', (req, res) => {
    return res.render('create-login');
});

module.exports = router;
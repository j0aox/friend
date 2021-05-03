const express = require('express');
const router = express.Router();
const Instituicao = require('../model/Instituicao');

router.get('/instituicao', (req, res) => {

    Instituicao.findAll({ attributes: ['id', 'name', 'lat', 'lng']  }).then(institutions => {
        return res.render('instituicao', {institutions});
    });

});

module.exports = router;
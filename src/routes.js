const express = require('express');
const router = express.Router();

const instituicaoController = require('./controllers/InstituicaoController');
const createInstituicaoController  = require('./controllers/createInstituicaoController');
const infoInstituicaoController  = require('./controllers/info-instituicao');

router.get('/instituicao', instituicaoController);
router.get('/create-instituicao', createInstituicaoController);
router.get('/info-instituicao', infoInstituicaoController);

module.exports = router;
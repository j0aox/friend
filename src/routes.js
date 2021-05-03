const express = require('express');
const router = express.Router();

const instituicaoController = require('./controllers/InstituicaoController');
const createInstituicaoController  = require('./controllers/createInstituicaoController');
const infoInstituicaoController  = require('./controllers/InfoInstituicaoController');

//const model = require('./model/Instituicao');

router.get('/instituicao', instituicaoController);
router.get('/create-instituicao', createInstituicaoController);
router.get('/info-instituicao', infoInstituicaoController);

router.post('/create-instituicao/save', createInstituicaoController);


module.exports = router;
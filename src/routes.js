const express = require('express');
const router = express.Router();

const instituicaoController = require('./controllers/InstituicaoController');
const createInstituicaoController  = require('./controllers/createInstituicaoController');
const infoInstituicaoController  = require('./controllers/InfoInstituicaoController');
const loginController = require('./controllers/loginController');

router.get('/instituicao', instituicaoController);
router.get('/create-instituicao', createInstituicaoController);
router.get('/info-instituicao', infoInstituicaoController);
router.get('/info-instituicao/:id', infoInstituicaoController);
router.get('/login', loginController);
router.get('/create-login', loginController);
//router.get('/create-instituicao/logout', loginController);

router.post('/create-instituicao/save', createInstituicaoController);
router.post('/create-login/save', loginController);
router.post('/autenticate', loginController);

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/create-instituicao', (req, res) => {
    return res.render('create-instituicao');
});

module.exports = router;
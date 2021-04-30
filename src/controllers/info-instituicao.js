const express = require('express');
const router = express.Router();

router.get('/info-instituicao', (req, res) => {
    return res.render('info-instituicao');
});

module.exports = router;
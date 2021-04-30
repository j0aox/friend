const express = require('express');
const router = express.Router();

router.get('/instituicao', (req, res) => {
    return res.render('instituicao');
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Instituicao = require('../model/Instituicao');

router.get('/create-instituicao', (req, res) => {
    return res.render('create-instituicao');
});

router.post('/create-instituicao/save', (req, res) => {
    const lat = req.body.lat;
    const lng = req.body.lng;
    const name = req.body.name;
    const about = req.body.about;
    const whatsapp = req.body.whatsapp;
    const instructions = req.body.instructions;
    const opening_hours = req.body.opening_hours;
    const open_on_weekends = req.body.open_on_weekends;

    Instituicao.create({
        lat: lat,
        lng: lng,
        name: name,
        about: about,
        whatsapp: whatsapp,
        instructions: instructions,
        opening_hours: opening_hours,
        open_on_weekends: open_on_weekends
    }).then(() => {
        res.redirect('/instituicao');
    });

});

module.exports = router;
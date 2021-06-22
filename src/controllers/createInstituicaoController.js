const express = require("express");
const router = express.Router();
const Instituicao = require("../model/Instituicao");
const permissao = require("../middlewares/middlewar");

router.get("/create-instituicao", permissao, (req, res) => {
  return res.render("create-instituicao");
});

router.post("/create-instituicao/save", permissao, async(req, res) => {
  const {
    lat,
    lng,
    name,
    about,
    whatsapp,
    instructions,
    opening_hours,
    open_on_weekends,
  } = req.body;

  //   const lat = req.body.lat;
  //   const lng = req.body.lng;
  //   const name = req.body.name;
  //   const about = req.body.about;
  //   const whatsapp = req.body.whatsapp;
  //   const instructions = req.body.instructions;
  //   const opening_hours = req.body.opening_hours;
  //   const open_on_weekends = req.body.open_on_weekends;
  console.log(req.session.user.id);

  console.log(req.session);
  await Instituicao.create({
    lat: lat,
    lng: lng,
    name: name,
    about: about,
    whatsapp: whatsapp,
    instructions: instructions,
    opening_hours: opening_hours,
    open_on_weekends: open_on_weekends,
    userId: req.session.user.id,
  });
  res.redirect("/instituicao");
});

module.exports = router;

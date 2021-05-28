const express = require("express");
const router = express.Router();
const Instituicao = require("../model/Instituicao");

router.get("/info-instituicao", async (req, res) => {
  const id = req.query.id;
  /*
    Instituicao.findAll({ where: {
        id: 2
      } 
      ['id', 'name', 'lat', 'lng']  }).then(institutions => {
        return res.render('info-instituicao', {institutions});
    });
*/
  //return res.render('info-instituicao');
  const institution = await Instituicao.findByPk(id);
  
  return res.render("info-instituicao", { institution });
});

router.post("/info-instituicao");

module.exports = router;

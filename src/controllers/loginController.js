const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { request } = require("express");

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/create-login", (req, res) => {
  return res.render("create-login");
});

router.post("/create-login/save", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ where: { email: email } }).then((user) => {
    if (user == undefined) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      User.create({
        email: email,
        password: hash,
      }).then(() => {
          res.redirect("/create-instituicao");
         })
        .catch((err) => {
          res.redirect("/");
        });
    } else {
        res.redirect("/create-login/save")
    }
  });
});

router.get("/", (req, res) => {
  return res.render("index");
});

router.post("/autenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({where:{email: email}}).then( user => {
    if (user != undefined) {
      const correct = bcrypt.compareSync(password, user.password);

      if (correct) {
        req.session.user = {
          id: user.id,
          email: user.email
        }
        ;
        //res.json({user});
        console.log(req.session.user.id);
        res.redirect("/create-instituicao");
      } else {
       
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  });
});

module.exports = router;

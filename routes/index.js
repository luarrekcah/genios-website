const express = require("express"),
  router = express.Router(),
  fs = require("fs"),
  dbData = require("../data"),
  xml = fs.readFileSync(__dirname + '/../sitemap.xml');

router.get("/", (req, res) => {
    const data = {
      dbData,
      og: {
        title: "Sua Agência Completa",
        desc: "Elevando sua marca ao próximo nível, qualidade e profissionalismo igualando a gigantes do mercado!",
        banner: "",
      },
    }; 
    res.render("pages/home", data);
});

router.get("/sitemap.xml", (req, res, next) => {
  res.set("Content-Type", "text/xml");
  res.send(xml);
});

router.get("/pop", (req, res) => {
  const data = {
    dbData,
    og: {
      title: "Política de Privacidade",
      desc: "Termos importantes sobre a sua privacidade!",
      banner: "",
    },
  }; 
  res.render("pages/terms/pop", data);
});

router.get("/tos", (req, res) => {
  const data = {
    dbData,
    og: {
      title: "Termos de Uso e Serviço",
      desc: "Termos importantes sobre uso e serviços!",
      banner: "",
    },
  }; 
  res.render("pages/terms/tos", data);
});

module.exports = router;

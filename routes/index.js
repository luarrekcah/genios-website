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

module.exports = router;

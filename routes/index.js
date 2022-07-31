const express = require("express"),
  router = express.Router(),
  dbData = require("../data");

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

module.exports = router;

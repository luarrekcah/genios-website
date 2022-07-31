const express = require("express"),
  router = express.Router(),
  dbData = require("../data");

router.get("/", (req, res) => {
    const data = {
      dbData,
      og: {
        title: "Sobre nós",
        desc: "Saiba tudo sobre nós, desde o início de tudo até mesmo como trabalhamos!",
        banner: "",
      },
    }; 
    res.render("pages/about", data);
});

module.exports = router;

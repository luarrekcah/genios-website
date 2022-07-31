const express = require("express"),
  router = express.Router(),
  dbData = require("../data");

router.get("/", (req, res) => {
    const data = {
      dbData,
      og: {
        title: "Contato",
        desc: "Encontre aqui as nossas informações de contato",
        banner: "",
      },
    }; 
    res.render("pages/contact", data);
});

module.exports = router;

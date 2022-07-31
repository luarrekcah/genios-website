const express = require("express"),
  router = express.Router(),
  dbData = require("../data");

router.get("/", (req, res) => {
    const data = {
      dbData,
      og: {
        title: "Serviços",
        desc: "Está em dúvida do que podemos fazer por você? Então consulte nossa página!",
        banner: "",
      },
    }; 
    res.render("pages/services", data);
});

module.exports = router;

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

router.get("/:id", (req, res) => {
  const service = dbData.services.find((item) => item.title === req.params.id);
  const data = {
    dbData,
    service,
    og: {
      title: "Serviço",
      desc: "Descrição detalhada do serviço",
      banner: "",
    },
  }; 
  res.render("pages/services/details", data);
});

module.exports = router;

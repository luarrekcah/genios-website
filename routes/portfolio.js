const express = require("express"),
  router = express.Router(),
  dbData = require("../data");

router.get("/", (req, res) => {
    const data = {
      dbData,
      og: {
        title: "Portfólio",
        desc: "Nosso portfólio com artes feitos com carinho e dedicação integral! <3",
        banner: "",
      },
    }; 
    res.render("pages/portfolio", data);
});

router.get("/:id", (req, res) => {
  const project = dbData.portfolio.find((item) => item.id === req.params.id);
  console.log(project);
  const data = {
    dbData,
    project,
    og: {
      title: "Projeto",
      desc: "Informações do projeto",
      banner: "",
    },
  }; 
  res.render("pages/portfolio/details", data);
});

module.exports = router;

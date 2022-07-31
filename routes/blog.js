const express = require("express"),
  router = express.Router(),
  dbData = require("../data");

router.get("/", (req, res) => {
    const data = {
      dbData,
      og: {
        title: "",
        desc: "",
        banner: "",
      },
    }; 
    res.render("pages/blog", data);
});

router.get("/post/:id", (req, res) => {
  const post = dbData.blog.find((item) => item.id === req.params.id);
  const data = {
    dbData,
    post,
    og: {
      title: "Blog",
      desc: "Saiba das últimas novidades da agência aqui!",
      banner: "",
    },
  }; 
  res.render("pages/blog/details", data);
});

module.exports = router;

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

module.exports = router;
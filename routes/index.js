const express = require("express"),
  router = express.Router(),
  { getDatabase, ref, onValue } = require("@firebase/database");

router.get("/", (req, res) => {
 /* const db = getDatabase();
  const dataWebSite = ref(db, "dataWebSite/genios");
  onValue(dataWebSite, (snapshot) => {*/
    const data = {
      //dbData: snapshot.val(),
      og: {
        title: "",
        desc: "",
        banner: "",
      },
    }; 
    res.render("pages/home", data);
 // });
});

module.exports = router;

const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  console.log("coucou");
  res.render("index", { title: "Express" });
});

module.exports = router;

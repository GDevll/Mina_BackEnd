const express = require("express");

const router = express.Router();

router.use(function timelog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

/* GET home page. */
router.get("/", (req, res) => {
  console.log("coucou");
  res.render("index", { title: "Express" });
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/testimonials", (req, res) => {
  res.render("testimonials");
});

module.exports = router;

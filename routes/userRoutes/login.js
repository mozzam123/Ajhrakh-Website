const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// Use body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));

// Import User model
const User = require("../../config/userModel");

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.post("/login", async (req, res) => {
  
  const loginUsername = req.body.username;
  const loginPassword = req.body.loginpassword;

  try {

    // Find the user based on the username and password
    const foundUser = await User.findOne({
      name: loginUsername,
      password: loginPassword,
    });
    if (foundUser) {
      console.log("Username present in db");
      res.render("user/login");
    } else {
      const error = "Invalid Credentials!";
      res.render("user/login", { error });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

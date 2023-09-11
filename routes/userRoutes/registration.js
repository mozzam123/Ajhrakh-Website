const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// Use body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));

// Import User model
const User = require("../../config/userModel");

router.get("/registration", (req, res) => {
  res.render("user/registration");
});

router.post("/registration", async (req, res) => {
  try {
    const name = req.body.name;
    console.log(`Username is ${name}`);
    const getName = await User.findOne({ name: name });
    console.log('Checking in db');
    if (getName) {
      res.render("user/registration", {username_error: "Username already exists"})
    } else {
      // Check if passwords match
      const password = req.body.password;
      const cpassword = req.body.cpassword;
      if (password === cpassword) {
        const userData = new User({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          password: req.body.password,
          cpassword: req.body.cpassword,
        });
        // Save the user to the database
        const savedUser = await userData.save();
        console.log("New user created:", savedUser.name);
        res.render("user/login");
      } else {
        res.render("user/registration", {password_error: "Password does not match"})
      }
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

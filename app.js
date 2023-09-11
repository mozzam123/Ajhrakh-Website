const express = require("express");
const hbs = require("hbs");
const homeRoute = require("./routes/home");
const aboutRoute = require("./routes/about");
const testimonialsRoute = require("./routes/testimonial");
const contactRoute = require("./routes/contact");
const loginRoute = require("./routes/userRoutes/login");
const registrationRoute = require("./routes/userRoutes/registration");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Routes
app.use(homeRoute);
app.use(aboutRoute);
app.use(testimonialsRoute);
app.use(contactRoute);
app.use(loginRoute);
app.use(registrationRoute);

// Configure static files
app.use(express.static("public"));

// Templates setting
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

module.exports = app;

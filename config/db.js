require('dotenv').config();

// Access environment variables
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;


const mongoose = require("mongoose");
mongoose
  .connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((error) => {
    console.log(error);
  });

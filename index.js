const app = require("./app");

const PORT = process.env.PORT;

// Import and connect to database
require("./config/db");

// Import User model
require("./config/userModel");

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});

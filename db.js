const mongoose = require("mongoose");

// Connect to MongoDB

mongoose
  .connect("mongodb://localhost/hotels")
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

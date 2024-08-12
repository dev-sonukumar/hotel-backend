const mongoose = require("mongoose");

// Load environment variables from.env file
require("dotenv").config();

// const db_local = process.env.db_local;
const db_atlas = process.env.db_atlas;

// Connect to MongoDB
mongoose
  .connect(db_atlas)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => {
    console.log(`Error connecting to MongoDB: ${err}`);
  });

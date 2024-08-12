const app = require("express")();
const db = require("./db");
// configure dotenv file
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// ---- User -----
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

// ---- Menu -----
const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started on port 3000");
});

const app = require("express")();
const db = require("./db");
// -- configure dotenv file --
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// -- middleware to track Log details [Date , Time , Request Rote] --

app.use((req, res, next) => {
  console.log(
    ` [${new Date().toLocaleString()}], Route - ${req.method}, URL - ${req.url}`
  );
  next();
});

// ---- User Route -----
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

// ---- Menu Route -----
const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started on port 3000");
});

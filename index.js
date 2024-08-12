const app = require("express")();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// ---- User -----
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

// ---- Menu -----
const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

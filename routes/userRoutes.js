const express = require("express");
const router = express.Router();
const user = require("../model/user");

// ----- Post method for add users -----
router.post("/", async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal server error -  ${error}` });
  }
});

// ----- Get method for show users -----
router.get("/", async (req, res) => {
  try {
    const users = await user.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ----- Get method for show filter users -----
router.get("/:work", async (req, res) => {
  try {
    const users = await user.find({ work: req.params.work });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// ----- put method for update users -----
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

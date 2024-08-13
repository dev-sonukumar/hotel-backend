const express = require("express");
const router = express.Router();
const user = require("../model/user");

// ----- Post method for add users 'C'-----
router.post("/", async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal server error -  ${error}` });
  }
});

// ----- Get method for show users 'R'-----
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
// ----- put method for update users 'U'-----
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

// ----- Delete method for delete users 'D'-----

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await user.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const menu = require("../model/menu");

router.post("/", async (req, res) => {
  try {
    const newMenu = await menu.create(req.body);
    res.status(201).json(newMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal server error -  ${error}` });
  }
});

router.get("/", async (req, res) => {
  try {
    const menus = await menu.find({});
    res.json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const menus = await menu.find({ taste: req.params.taste });
    res.json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

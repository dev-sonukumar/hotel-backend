const express = require("express");
const router = express.Router();
const menu = require("../model/menu");

// ----- post method for show menu -----
router.post("/", async (req, res) => {
  try {
    const newMenu = await menu.create(req.body);
    res.status(201).json(newMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal server error -  ${error}` });
  }
});

// ----- Get method for show menu -----
router.get("/", async (req, res) => {
  try {
    const menus = await menu.find({});
    res.json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ----- Get method for show filter menu -----
router.get("/:taste", async (req, res) => {
  try {
    const menus = await menu.find({ taste: req.params.taste });
    res.json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ----- put method for update menu -----

router.put("/:id", async (req, res) => {
  try {
    const menuToUpdate = await menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!menuToUpdate)
      return res.status(404).json({ message: "Menu not found" });
    res.json(menuToUpdate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal server error -  ${error}` });
  }
});

module.exports = router;

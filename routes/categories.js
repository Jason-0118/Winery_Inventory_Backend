const express = require("express");
const router = express.Router();
const Categories = require("../models/categories");

// GET ALL
router.get("/", async (req, res) => {
    try {
        const categories = await Categories.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//CREATING ONE
router.post("/", async (req, res) => {
    const category = new Categories({
        category: req.body.category,
    });

    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//UPDATE ONE
router.patch("/", (req, res) => {});

//DELETE ONE
router.delete("/:id", (req, res) => {});

module.exports = router;

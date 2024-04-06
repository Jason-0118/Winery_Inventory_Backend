const express = require("express");
const router = express.Router();
const Wines = require("../models/wines");

// GET ALL
router.get("/", async (req, res) => {
    try {
        const wines = await Wines.find();
        res.json(wines);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// CREATING ONE
router.post("/", async (req, res) => {
    const wine = new Wines({
        name: req.body.name,
        size: req.body.size,
        categoryId: req.body.categoryId,
    });

    try {
        const newWine = await wine.save();
        res.status(201).json(newWine);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

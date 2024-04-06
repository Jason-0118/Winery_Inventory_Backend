const express = require("express");
const router = express.Router();
const Records = require("../models/records");

//GET ALL
router.get("/", async (req, res) => {
    try {
        const records = await Records.find();
        res.json(records);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// CREATE ONE

router.post("/", async (req, res) => {
    const wineRecords = req.body; // Assuming req.body contains an array of wine records

    try {
        // Iterate over each wine record in the request body
        const savedRecords = await Promise.all(wineRecords.map(async (wineRecord) => {
            const record = new Records({
                wineId: wineRecord._id, // Assuming wineId corresponds to the wine's name
                quantity: wineRecord.quantity, // Assuming quality corresponds to quantity
                cmLevel: wineRecord.cmLevel
            });

            // Save the record to the database
            return await record.save();
        }));

        res.status(201).json(savedRecords); // Respond with the saved records
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

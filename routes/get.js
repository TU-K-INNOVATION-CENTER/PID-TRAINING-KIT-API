const express = require("express");
const pidData = require("../models/data");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const savedData = await pidData.find();
    res.json(savedData);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;

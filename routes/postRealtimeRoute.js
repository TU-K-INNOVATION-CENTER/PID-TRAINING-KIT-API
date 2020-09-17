const express = require("express");
const pidData = require("../models/data");

const router = express.Router();

const id = "5e2023668a825b2b4888fe39";

router.post("/", (req, res) => {
  const data = new pidData({
    controlValue: req.body.controlValue,
    error: req.body.error,
    actualValue: req.body.actualValue,
    parameter: req.body.parameter,
    time:
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds(),
    date:
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear(),
  });
  pidData.findById({ _id: id }, (error, data) => {
    if (error) res.send(error);
    Object.assign(data, req.body).save((error, data) => {
      if (error) res.send(error);
      res.json({ message: "Realtime Object updated successfully!", data });
    });
  });
});

module.exports = router;

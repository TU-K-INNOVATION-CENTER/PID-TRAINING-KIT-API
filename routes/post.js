const express = require("express");
const pidData = require("../models/data");

const router = express.Router();

router.post("/", (req, res) => {
  const data = new pidData({
    controlValue: req.body.controlValue,
    error: req.body.error,
    actualValue: req.body.actualValue,
    parameter: req.body.parameter,
    // time:
    //   new Date().getHours() +
    //   ":" +
    //   new Date().getMinutes() +
    //   ":" +
    //   new Date().getSeconds(),
    time: new Date().getMilliseconds(),
    // date:
    //   new Date().getDate() +
    //   "/" +
    //   (new Date().getMonth() + 1) +
    //   "/" +
    //   new Date().getFullYear(),
  });

  data
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = router;

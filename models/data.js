const mongoose = require("mongoose");

var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();

const DataSchema = mongoose.Schema({
  controlValue: {
    type: Number,
    required: false,
  },
  error: {
    type: Number,
    required: false,
  },
  actualValue: {
    type: Number,
    required: false,
  },
  parameter: {
    type: Number,
    required: false,
  },
  time: {
    // default: new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(),
    type: String,
    required: true,
  },
  date: {
    // default: new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear(),
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("pidData", DataSchema);

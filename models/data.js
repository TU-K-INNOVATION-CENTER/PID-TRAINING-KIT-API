const mongoose = require("mongoose");

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
    type: Number,
    required: true,
  },
  // date: {
  // default: new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear(),
  //   type: ,
  //   required: true,
  // },
});

module.exports = mongoose.model("pidData", DataSchema);

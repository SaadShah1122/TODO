const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskScheme = new Schema(
  {
    todoTask: { type: String, required: true },
    // url: { type: String, required: true },
    // time: { type: String, required: true },
    // guests: { type: Number, required: true, default: 0 },
    // venue: {
    //   type: String,
    //   default: "Mehran University of Engineering and Technology Jamshoro",
    // },
  },
  {
    timestamps: true,
  }
);

const task = mongoose.model("task", taskScheme);
module.exports = task;

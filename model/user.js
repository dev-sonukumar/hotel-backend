const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
    enum: ["chef", "owner", "manager", "waiter"],
    default: "chef",
  },

  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },

  salary: {
    type: Number,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;

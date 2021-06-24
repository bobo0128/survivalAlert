const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sysNavbarSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  titleid: {
    type: String,
    required: true,
    trim: true,
  },
  linkroutepath: {
    type: String,
    required: true,
    trim: true,
  },
  component: {
    type: String,
    required: true,
    trim: true,
  },
});

const SysNavbarModel = mongoose.model("SysNavbar", sysNavbarSchema);
module.exports = SysNavbarModel;

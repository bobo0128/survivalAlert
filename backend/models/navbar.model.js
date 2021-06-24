const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemname: { type: String, required: true, trim: true },
  linkroutepath: { type: String, required: true, trim: true },
  component: { type: String, required: true, trim: true },
});

const navbarSchema = new Schema({
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
  item: [itemSchema],
});

const NavbarModel = mongoose.model("Navbar", navbarSchema);
module.exports = NavbarModel;

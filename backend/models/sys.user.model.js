const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminUserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    usertype: {
      type: String,
      required: true,
      trim: true,
    },
    permission: [{ permissionid: { type: String } }],
  },
  {
    timestamps: true,
  }
);

const AdminUserModel = mongoose.model("AdminUser", adminUserSchema);
module.exports = AdminUserModel;

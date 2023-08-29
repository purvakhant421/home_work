const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const mobileSchema = new mongoose.Schema(
  {
    mobile_company: {
      type: String,
      trim: true,
    },
    mobile_model: {
      type: String,
      trim: true,
    },
    mobile_price: {
      type: Number,
      default: 0
    },
    mobile_status: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

mobileSchema.pre("save", async function (next) {
  const mobile = this;

  //if (user.isModified("password")) {
    //user.password = bcrypt.hash(user.password, 8);
  //}
  next();
});

const Mobile = mongoose.model("mobiles", mobileSchema);
module.exports = Mobile;
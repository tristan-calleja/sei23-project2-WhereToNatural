const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  placeType: {
    type: String,
    enum: ["bar", "restaurant", "shop"],
  },
district: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "District",
    },
],
fullAddress: {
    blockNumber: String,
    street: String,
    postcode: Number,
},
phoneNumber: String,
email: String,
website: String,
image: {
  type: String,
  default: "img/logo.png"
},
description: String,
addedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
],
});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;

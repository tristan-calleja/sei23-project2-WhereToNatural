const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const districtSchema = Schema({
    name: String,
    places: [],
});

const District = mongoose.model("District", districtSchema);
module.exports = District;
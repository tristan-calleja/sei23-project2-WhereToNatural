const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const districtSchema = Schema({
    name: String,
    place: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Place",
        },
    ],
});

const District = mongoose.model("District", districtSchema);
module.exports = District;
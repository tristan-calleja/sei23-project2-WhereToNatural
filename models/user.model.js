const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const bcrypt = require("bcrypt");

const userSchema = Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: String,
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  placesAdded: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
    },
  ],
});

// ***When using encryption for passwords, uncomment the below***
// userSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };


const User = mongoose.model("User", userSchema);
module.exports = User;
const router = require("express").Router();
const Place = require("../models/place.model");
const User = require("../models/user.model");
const District = require("../models/district.model");

router.get("/", (req, res) => {
    res.render("place/home");
});

// router.get("/", async (req, res) => {
//     console.log("Req User", req.user);
//     try {
//       //get all places
//       let places = await Place.find()
//         .populate("district")
//         .populate("user");
  
//       // console.log(places);
//       res.render("restaurants/index", { places });
//     } catch (error) {
//       console.log(error);
//     }
//   });





module.exports = router;
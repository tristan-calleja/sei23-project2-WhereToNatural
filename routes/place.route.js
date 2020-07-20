const router = require("express").Router();
const Place = require("../models/place.model");
const User = require("../models/user.model");
const District = require("../models/district.model");

// router.get("/", (req, res) => {
//     res.render("place/home");
// });

router.get("/", async (req, res) => {
    console.log("Req User", req.user);
    try {
      //get all places
      let places = await Place.find()
        .populate("district")
        .populate("user");
  
      // console.log(places);
      res.render("place/home", { places });
    } catch (error) {
      console.log(error);
    }
  });

// router.get("/new", (req, res) => {
//       res.render("place/new");
//   });

router.get("/new", async (req, res) => {
    try {
    //   let users = await User.find();
      let districts = await District.find();
  
      res.render("place/new", { districts }); //add "users," with districts once authentication ok
    } catch (error) {
      console.log(error);
    }
  });


router.post("/new", (req, res) => {
  
    let place = new Place(req.body);
    console.log(place);
    place.addedBy = req.user._id;
    
    place
      .save() //save place
      .then(() => {
        //if saved then save user
        User.findById(place.addedBy).then((user) => {
          //push into placesAdded array in user model
          user.placesAdded.push(place._id);
  
          user.save().then(() => {
            //if sucess redirect to home page
            res.redirect("/");
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });



module.exports = router;
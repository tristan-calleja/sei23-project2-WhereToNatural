const router = require("express").Router();
const Place = require("../models/place.model");
// const User = require("../models/user.model");
const District = require("../models/district.model");

// GET TO HOMEPAGE
router.get("/", async (req, res) => {
    // console.log("Req User", req.user);
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

//ADD A NEW PLACE
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
    console.log(req.body);
    let placeData = {
        name: req.body.name,
        placeType: req.body.placeType,
        district: req.body.district,
        address: {
            blockNumber: req.body.blockNumber,
            street: req.body.street,
            postcode: req.body.postcode,
          },
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          website: req.body.website,
          //img
          description: req.body.description,
    };

    let place = new Place(placeData);
    console.log(place);
    //Uncomment once authentication ok
    // place.addedBy = req.user._id;
    
    // place
    //   .save() //save place
    //   .then(() => {
    //     //if saved then save user
    //     User.findById(place.addedBy).then((user) => {
    //       //push into placesAdded array in user model
    //       user.placesAdded.push(place._id);
    //       user.save().then(() => {
    //         //if sucess redirect to home page
    //         res.redirect("/");
    //       });
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    place
    .save()
    .then(() => {
      res.redirect("/listbyname");
    })
    .catch((err) => {
      console.log(err);
    });
  });

//   SEE PLACE IN DETAILS
  router.get("/show/:id", async (req, res) => {
    try {
        let places = await Place.find()
        .populate("district")
        // .populate("user");
  
      res.render("place/show", { places });
    } catch (error) {
      console.log(error);
    }
  });

  // EDIT A PLACE DETAILS
  router.get("/edit/:id", async (req, res) => {
    try {
      let place = await Place.findById(req.params.id)
        .populate("district")
        // .populate("user");
      let districts = await District.find();
    //   let users = await User.find();
  
      res.render("place/edit", { place, districts }); //add "users" after districts once authentication ok
    } catch (error) {
      console.log(error);
    }
  });
  
  router.post("/edit/:id", async (req, res) => {
    try {
      let updated = await Place.findByIdAndUpdate(req.params.id, req.body);
      if (updated) {
        return res.redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
  });

// SEE LIST BY NAME OF PLACE
router.get("/listbyname", async (req, res) => {
    try {
        let places = await Place.find()
        .populate("district")
        // .populate("user");
  
      res.render("place/listbyname", { places });
    } catch (error) {
      console.log(error);
    }
  });


// SEE LIST BY TYPE OF PLACE
router.get("/listbytype", async (req, res) => {
    try {
        let places = await Place.find()
        .populate("district")
        // .populate("user");
  
      res.render("place/listbytype", { places });
    } catch (error) {
      console.log(error);
    }
  });


module.exports = router;
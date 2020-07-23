const router = require("express").Router();
const District = require("../models/district.model");

router.get("/new", (req, res) => {
  res.render("district/new");
});

router.post("/new", (req, res) => {
  let district = new District(req.body);

  district
    .save()
    .then(() => {
      res.redirect("/district/new");
      console.log(district);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/listbydistrict", async (req, res) => {
  try {
      let districts = await District.find();
      // res.json(districts);
      res.render("district/listbydistrict", { districts });
  } catch (error) {
    console.log(error);
  }
});

//   SEE DISTRICT IN DETAILS
router.get("/show/:id", (req, res) => {
  District.findById(req.params.id)
  .then((district) => {
    console.log(district);
    res.render("district/show", { district });
  })
  .catch((err) => {
    console.log(err);
  });
});

// EDIT A DISTRICT DETAILS
router.get("/edit/:id", (req, res) => {
  District.findById(req.params.id)
    .then((district) => {
      res.render("district/edit", { district });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/edit/:id", (req, res) => {
  District.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log("completed");
      res.redirect("/district/listbydistrict");
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
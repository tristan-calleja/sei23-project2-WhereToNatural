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

    res.render("district/listbydistrict", { districts });
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;
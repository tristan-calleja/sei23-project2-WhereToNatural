// module.exports = function (req, res, moveOn) {
//     if (!req.user) {
//       req.flash("error", "You should login to see this page");
//       res.redirect("/auth/login");
//     } else {
//       moveOn();
//     }
//   };
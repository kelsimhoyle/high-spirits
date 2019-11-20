const router = require("express").Router();
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

router.get("/flavor/:flavor", function (req, res) {
  db.Alcohol.find({ flavor: req.params.flavor })
    .sort({ distillery: 1 })
    .exec((err, data) => {
      if (err) throw err;
      if (data) res.json(data);
    })
});

router.get("/types/:type", function (req, res) {
  db.Alcohol.find({ alcoholType: req.params.type })
    .sort({ distillery: 1 })
    .exec((err, data) => {
      if (err) throw err;
      if (data) res.json(data);
    });
});


router.get("/ratings/:AlcoholId", function (req, res) {
  db.Alcohol.findOne({ _id: req.params.AlcoholId })
    .populate("ratings")
    .exec((err, data) => {
      if (err) throw err;
      if (data) res.json(data);
    })
});


//   router.post("/rate/:AlcoholId", ensureAuthenticated, function (req, res) {
//     console.log(req.body);
//     db.UserRating.create({
//         rating: req.body.rating,
//         comment: req.body.comment,
//         AlcoholId: req.params.AlcoholId,
//         UserId: req.user.id
//     }).then(function (rating) {
//         res.json(rating);
//     })
// });

module.exports = router;

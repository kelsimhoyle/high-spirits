const router = require("express").Router();
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

router.get("/flavor/:flavor", (req, res) => {
  db.Alcohol.find({ flavor: req.params.flavor })
    .sort({ distillery: 1 })
    .exec((err, data) => {
      if (err) throw err;
      if (data) res.json(data);
    })
});

router.get("/types/:type", (req, res) => {
  db.Alcohol.find({ alcoholType: req.params.type })
    .sort({ distillery: 1 })
    .exec((err, data) => {
      if (err) throw err;
      if (data) res.json(data);
    });
});

router.get("/:AlcoholId", (req, res) => {
  db.Alcohol.findOne({ _id: req.params.AlcoholId })
    .populate("ratings")
    .exec((err, data) => {
      if (err) throw err;
      if (data) res.json(data);
    })
});

router.post("/rate/:AlcoholId", authMiddleware.isLoggedIn, (req, res) => {
  let newRating = new db.Ratings({
    rating: req.body.rating,
    comment: req.body.comment,
    alcohol: req.params.AlcoholId,
    user: req.body.userId
  })

  newRating.save((err, data) => {
    if (err) throw err
    if (data) {
      db.Alcohol.findOneAndUpdate({ _id: data.alcohol }, { $push: { ratings: data._id } })
        .then(() => res.json(data))
        .catch(err => res.json(err))
    }
  })
});

router.put("/ratings/:ratingId", authMiddleware.isLoggedIn, (req, res) => {
  db.Ratings.findByIdAndUpdate(
    { _id: req.params.ratingId },
    { rating: req.body.rating, comment: req.body.comment },
    { new: true })
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

router.delete("/ratings/:ratingId", authMiddleware.isLoggedIn, (req, res) => {
  db.Ratings.findByIdAndDelete({ _id: req.params.ratingId })
    .then(data => {
      db.Alcohol.findByIdAndUpdate({ _id: data._id }, { $pull: { ratings: data._id } })
        .then(() => res.json("Rating successfully removed"))
        .catch(err => res.json(err))
    })
    .catch(err => console.log(err))
});

module.exports = router;
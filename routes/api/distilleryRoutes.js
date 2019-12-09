const router = require("express").Router();
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

router.get("/location/:location", function (req, res) {
    console.log("route hit")

    db.Distillery.find({ city: req.params.location })
        .exec(function(err, data) {
    
            if (err) throw err;
            if (data) {
                console.log(data)
                res.json(data);
            } 
        })
});

router.get("/id/:distId", function (req, res) {
    console.log("route hit")
    db.Distillery.find({ _id: req.params.distId })
        .populate({
            path: "alcohols",
            populate: { path: "ratings" }
        })
        .exec((err, data) => {
            if (err) throw err;
            if (data) res.json(data)
        })
});

router.put("/favorite/:distId", function(req, res) {
    db.User.findByIdAndUpdate(
        {_id: req.body._id},
        { $push: { favorites: req.params.distId } })
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

router.put("/saved/:distId", function(req, res) {
    db.User.findByIdAndUpdate(
        {_id: req.body._id},
        { $push: { saved: req.params.distId } })
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

module.exports = router;
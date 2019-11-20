const router = require("express").Router();
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

router.get("/location/:location", function (req, res) {
    db.Distillery.find({ city: req.params.location })
        .exec((err, data) => {
            if (err) throw err;
            if (data) res.json(data);
        });
});

router.get("/id/:distId", function (req, res) {
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

module.exports = router;
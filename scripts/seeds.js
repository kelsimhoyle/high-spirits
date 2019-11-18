const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect("mongodb://localhost/highspirits", { useNewUrlParser: true }).then(
    () => {
        console.log("connected")

    },
    err => { console.log(err) }
);



const distillerySeed = [
    {
        distillery: "10TH MOUNTAIN WHISKEY & SPIRIT COMPANY",
        wesbite: "http://10thwhiskey.com",
        city: "Vail"
    },
    {
        distillery: "1350 DISTILLING",
        website: "http://1350distilling.com",
        city: "Colorado Springs"
    }
]


db.Distillery
    .remove({})
    .then(() => db.Distillery.collection.insertMany(distillerySeed))
    .then(data => {
        console.log(data.result.n = " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.err(err);
        process.exit(1)
    });

const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema

const alcoholSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    alcoholType: {
        type: String,
        required: true
    },
    flavor: {
        type: String,
        required: true
    },
    distillery: {
        type: String,
        required: true
    },
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rating"
    }]
});

const Alcohol = mongoose.model("Alcohol", alcoholSchema);

module.exports = Alcohol;
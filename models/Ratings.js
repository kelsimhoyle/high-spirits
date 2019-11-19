const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema

const ratingSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    alcohol: {
        type: Schema.ObjectId,
        ref: "Alcohol"
    },
    user: {
        type: Schema.ObjectId,
        ref: "User"
    }
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema

const distillerySchema = new Schema({
    distillery: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    alcohols: [{ 
        type: Schema.ObjectId, 
        ref: "Alcohol" 
      }]
});

const Distillery = mongoose.model("Distillery", distillerySchema);

module.exports = Distillery;
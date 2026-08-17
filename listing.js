const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: 100,
        min: 100,
    },
    image: {
        type: String,
        set: (v) => v ==="" ? "default link" : v,
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
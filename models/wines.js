const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const winesSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    size: {
        type: String,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Categories", // Refers to the 'Category' model
    },
});


module.exports = mongoose.model("Wines", winesSchema)
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const categoriesSchema = new Schema({
    category: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Categories", categoriesSchema)

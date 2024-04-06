const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordsSchema = new Schema({
    wineId: {
        type: Schema.Types.ObjectId,
        ref: "Wines",
    },
    quantity:{
        type: String,
    },
    cmLevel:{
        type: String
    },
    recordDate:{
        type: Date,
        required: true,
        default: Date.now
    }
});


module.exports = mongoose.model("Records", recordsSchema)

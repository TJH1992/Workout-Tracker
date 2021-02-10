const mongoose = require("mongoose");
module.exports = mongoose.model("workout", new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: Array,

    }
}));

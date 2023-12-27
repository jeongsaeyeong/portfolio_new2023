const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
    {
        password: String,
        content: String,
        repleNum: Number,
    }
    , { collection: "reples" })

const Reple = mongoose.model("reples", repleSchema);

module.exports = { Reple }; 
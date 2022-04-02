const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    author : {type : String},
    password : {type : String},
    email  : {type : String}
})

const User = mongoose.model("user", userSchema);

module.exports = User;
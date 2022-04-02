const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    author : {type : mongoose.Schema.Types.ObjectId, ref : "roles"},
    admin_role : {type : String}
})

const Role = mongoose.model("role", roleSchema);

module.exports = Role;
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name : {type : String},

    authors : [
        {type : mongoose.Schema.Types.ObjectId, ref : "user"

    }],

    

})

const Book = mongoose.model("book",bookSchema);

module.exports = Book;
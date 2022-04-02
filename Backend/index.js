const express = require("express");
const mongoose = require("mongoose");
const bookController = require("./controllers/book.controller")
const userController = require("./controllers/user.controller");
const rolesController = require("./controllers/roles.controller");
const cors = require("cors");
const PORT = 8000;
const db_url = "mongodb+srv://utk2505:786utkarsh@cluster0.jysel.mongodb.net/Library_book?retryWrites=true&w=majority";


const app = express();
app.use(express.json);
app.use(cors());

app.use("/books", bookController);
app.use("/user",userController);
app.use("/roles", rolesController);

const connect = ()=>{
    return mongoose.connect(db_url);
}

app.listen(PORT, async()=>{
    try{
        await connect();
        console.log(`Listening post : ${PORT}`)
    }
    catch(e){
        console.log(e.message)
    }
})

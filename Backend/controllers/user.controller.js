const express = require("express");
const User = require("../models/user.model");
const crudController = require("./crud.controller");
const router = express.Router();


router.get("/", crudController(User).getAll);

router.post("/",crudController(User).post);

router.patch("/:id", crudController(User).update);

router.delete("/:id", crudController(User).deleteOne);

module.exports = router;
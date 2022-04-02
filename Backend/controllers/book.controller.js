const express = require("express");
const Book = require("../models/book.model");
const crudController = require("./crud.controller");
const router = express.Router();


router.get("/", crudController(Book).getAll);

router.post("/",crudController(Book).post);

router.patch("/:id", crudController(Book).update);

router.delete("/:id", crudController(Book).deleteOne);

module.exports = router;
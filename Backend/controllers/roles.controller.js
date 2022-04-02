const express = require("express");
const Role = require("../models/roles.model");
const crudController = require("./crud.controller");
const router = express.Router();


router.get("/", crudController(Role).getAll);

router.post("/",crudController(Role).post);

router.patch("/:id", crudController(Role).update);

router.delete("/:id", crudController(Role).deleteOne);

module.exports = router;
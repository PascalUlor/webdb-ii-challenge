const express = require("express");
const Controllers = require("../controllers");
const validation = require("../middleware");

const router = express.Router();

router.get("/", Controllers.getCars);

router.get("/:id", validation.validateCarId, Controllers.getCarById);

module.exports = router;

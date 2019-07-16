const express = require("express");
const Controllers = require("../controllers");
const validation = require("../middleware");

const router = express.Router();

router.get("/", Controllers.getCars);

router.get("/:id", validation.validateCarId, Controllers.getCarById);

router.post(
  "/",
  validation.validateCar,
  validation.validateCarId,
  Controllers.addCar
);

module.exports = router;

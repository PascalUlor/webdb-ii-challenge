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

router.put("/:id", validation.validateCarId, Controllers.updateCarDetail);

router.delete("/:id", validation.validateCarId, Controllers.deleteCar);

module.exports = router;

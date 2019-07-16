const cardb = require("../data/models");

async function validateCarId(req, res, next) {
  const id = Number(req.params.id) || Number(req.newId);
  if (id !== undefined && id !== "" && Number(id)) {
    const car = await cardb.get(id);
    if (car) {
      // eslint-disable-next-line require-atomic-updates
      req.carObj = car;
      next();
    } else {
      res.status(400).json({
        status: 400,
        message: "invalid project id"
      });
    }
  } else {
    res.status(400).json({
      status: 400,
      message: "invalid id type. Must be a number"
    });
  }
}

async function validateCar(req, res, next) {
  const { make, model, vin, mileage, transmission, status } = req.body;
  if (req.body.make && req.body.model && req.body.mileage && req.body.vin) {
    if (
      req.body.make !== "" &&
      req.body.model !== "" &&
      req.body.mileage !== "" &&
      req.body.vin !== ""
    ) {
      const newCar = await cardb.add({
        make,
        model,
        vin,
        mileage,
        transmission,
        status
      });
      console.log([newCar][0][0]);
      // eslint-disable-next-line require-atomic-updates
      req.newId = [newCar][0][0];
      next();
    } else {
      res.status(400).json({
        status: 400,
        message: "missing car data"
      });
    }
  } else {
    res.status(400).json({
      status: 400,
      message: "missing required fields"
    });
  }
}

module.exports = { validateCarId, validateCar };

const cardb = require("../data/models");

async function validateCarId(req, res, next) {
  const id = Number(req.params.id) || Number(req.carObj.id);
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

module.exports = { validateCarId };

const carQuery = require("../data/models");

const getCars = async (req, res) => {
  try {
    const allData = await carQuery.get();

    if (allData) {
      return res.status(200).json({
        status: 200,
        data: allData
      });
    }
    return res.status(404).json({
      status: 404,
      message: "No users available"
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: "Users could not be retrieved."
    });
  }
};

const getById = (req, res, statusCode) => {
  return res.status(200).json({
    status: statusCode,
    data: req.carObj
  });
};

const getCarById = async (req, res) => {
  return getById(req, res, 200);
};

const addCar = async (req, res) => {
  try {
    return getById(req, res, 201);
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: "There was an error while saving the data to the database"
    });
  }
};

const updateCarDetail = async (req, res) => {
  const id = req.params.id;
  if (typeof parseInt(id, 10) === "number") {
    try {
      const { make, model, vin, mileage, transmission, status } = req.body;
      if (req.body.make && req.body.model && req.body.mileage && req.body.vin) {
        if (
          req.body.make !== "" &&
          req.body.model !== "" &&
          req.body.mileage !== "" &&
          req.body.vin !== ""
        ) {
          const carUpdate = await carQuery.update(id, {
            make,
            model,
            vin,
            mileage,
            transmission,
            status
          });
          //   console.log("=========", [carUpdate]);
          return res.status(200).json({
            status: 200,
            data: carUpdate
          });
        }
        return res.status(400).json({
          status: 400,
          errorMessage: "Please provide car detials."
        });
      }
    } catch (err) {
      return res.status(400).json({
        status: 500,
        error: "The car information could not be modified."
      });
    }
  }
};

const deleteCar = async (req, res) => {
  const id = req.params.id;
  try {
    const removeCar = await carQuery.remove(id);
    return res.status(200).json({
      status: 200,
      data: removeCar
    });
  } catch (err) {
    return res.status(400).json({
      status: 500,
      error: "This car could not be removed"
    });
  }
};

module.exports = {
  getCars,
  getCarById,
  addCar,
  updateCarDetail,
  deleteCar
};

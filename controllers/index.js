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

module.exports = {
  getCars,
  getCarById,
  addCar
};

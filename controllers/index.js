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

module.exports = {
  getCars
};

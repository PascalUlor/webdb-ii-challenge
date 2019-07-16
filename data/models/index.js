const db = require("../dbconfig");

const get = id => {
  let dataQuery = db("cardb");

  if (id) {
    return dataQuery.where({ id });
  }

  return dataQuery;
};

module.exports = {
  get
};

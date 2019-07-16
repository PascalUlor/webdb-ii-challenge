const db = require("../dbconfig");

function get(id) {
  let dataQuery = db("cardb");

  if (id) {
    return dataQuery.where({ id });
  }

  return dataQuery;
}

const add = car => {
  return db("cardb")
    .insert(car)
    .then(data => {
      return data;
    });
};

module.exports = {
  get,
  add
};

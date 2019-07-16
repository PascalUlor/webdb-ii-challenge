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

const update = (id, car) => {
  return db("cardb")
    .where({ id })
    .update(car)
    .then(() => get(id));
};

module.exports = {
  get,
  add,
  update
};

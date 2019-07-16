exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cardb")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cardb").insert([
        {
          make: "mercedez",
          model: "GLC 500",
          vin: 123,
          mileage: "100km",
          transmission: "manual",
          status: "none"
        },
        {
          make: "audi",
          model: "executive",
          vin: 432,
          mileage: "100km",
          transmission: "manual",
          status: "none"
        },
        {
          make: "toyota",
          model: "corolla",
          vin: 908,
          mileage: "100km",
          transmission: "manual",
          status: "none"
        }
      ]);
    });
};

exports.up = function(knex) {
  return knex.schema.createTable("cardb", table => {
    table.increments();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table
      .string("vin")
      .unique()
      .notNullable();
    table.string("mileage").notNullable();
    table.string("transmission").defaultTo("unknown");
    table.string("status").defaultTo("unknown");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTabeleIfExists("cardb");
};

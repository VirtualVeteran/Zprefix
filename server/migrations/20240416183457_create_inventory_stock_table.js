
exports.up = function(knex) {
    return knex.schema.createTable('inventory_stock', table => {
      table.increments('');
      table.string('name');
      table.string('description');
      table.integer('quantity');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('inventory_stock');
};

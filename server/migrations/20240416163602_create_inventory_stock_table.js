
exports.up = function(knex) {
    return knex.schema.createTable('inventory_stock', table => {
      table.increments('');
      table.string('itemname').notNullable().unique();
      table.integer('user_account_id')
      table.string('description');
      table.integer('quantity').notNullable().unique();
  });
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('inventory_stock');
};

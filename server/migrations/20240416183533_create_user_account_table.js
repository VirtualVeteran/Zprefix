
exports.up = function(knex) {
    return knex.schema.createTable('user_account', table => {
      table.increments('');
      table.string('username');
      table.string('password')
  })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_account');
  };

exports.up = function(knex) {
    return knex.schema.createTable('user_account', table => {
      table.increments('');
      table.string('firstname');
      table.string('lastname');
      table.string('username').notNullable().unique();
      table.string('password').notNullable();

  })
  };
  

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_account');
  };
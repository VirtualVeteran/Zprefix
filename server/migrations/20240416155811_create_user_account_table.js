
exports.up = function(knex) {
    return knex.schema.createTable('user_account', table => {
      table.increments('');
      table.string('firstname');
      table.string('lastname');
      table.string('username');
      table.string('password')

  })
  };
  

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_account');
  };
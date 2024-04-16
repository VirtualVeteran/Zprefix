exports.seed = async function(knex) {
 
  // Inserts seed entries
  await knex('user_account').insert([
    { username: 'john_doe', password: 'password123' },
    { username: 'jane_smith', password: 'password456' },
    { username: 'alice_johnson', password: 'password789' },
    // Add more seed data as needed
  ]);
};

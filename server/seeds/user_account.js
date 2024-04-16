/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_account').insert([
    {name: 'John Doe', address: '123 Main St', email: 'john@example.com', username: 'johndoe', password: 'password123'},
    {name: 'Jane Smith', address: '456 Elm St', email: 'jane@example.com', username: 'janesmith', password: 'password456'},
    {name: 'Alice Johnson', address: '789 Oak St', email: 'alice@example.com', username: 'alicejohnson', password: 'password789'},
    {name: 'Bob Brown', address: '101 Maple St', email: 'bob@example.com', username: 'bobbrown', password: 'password1011'},
    {name: 'Emily Davis', address: '111 Pine St', email: 'emily@example.com', username: 'emilydavis', password: 'password1112'},
    {name: 'Michael Wilson', address: '222 Cedar St', email: 'michael@example.com', username: 'michaelwilson', password: 'password2223'},
    {name: 'Sarah Taylor', address: '333 Birch St', email: 'sarah@example.com', username: 'sarahtaylor', password: 'password3334'},
    {name: 'David Martinez', address: '444 Walnut St', email: 'david@example.com', username: 'davidmartinez', password: 'password4445'},
    {name: 'Jennifer Anderson', address: '555 Cherry St', email: 'jennifer@example.com', username: 'jenniferanderson', password: 'password5556'},
    {name: 'Matthew Thompson', address: '666 Sycamore St', email: 'matthew@example.com', username: 'matthewthompson', password: 'password6667'},
  ]);
};

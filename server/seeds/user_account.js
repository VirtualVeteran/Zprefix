exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_account').del();

  // Inserts seed entries
  return knex('user_account').insert([
    { firstname: 'John', lastname: 'Doe', username: 'john_doe', password: 'password123' },
    { firstname: 'Jane', lastname: 'Smith', username: 'jane_smith', password: 'password456' },
    { firstname: 'Alice', lastname: 'Johnson', username: 'alice_johnson', password: 'password789' },
    { firstname: 'Bob', lastname: 'Brown', username: 'bob_brown', password: 'password1011' },
    { firstname: 'Emily', lastname: 'Davis', username: 'emily_davis', password: 'password1112' },
    { firstname: 'Michael', lastname: 'Wilson', username: 'michael_wilson', password: 'password2223' },
    { firstname: 'Sarah', lastname: 'Taylor', username: 'sarah_taylor', password: 'password3334' },
    { firstname: 'David', lastname: 'Martinez', username: 'david_martinez', password: 'password4445' },
    { firstname: 'Jennifer', lastname: 'Anderson', username: 'jennifer_anderson', password: 'password5556' },
    { firstname: 'Matthew', lastname: 'Thompson', username: 'matthew_thompson', password: 'password6667' },
    { firstname: 'Jessica', lastname: 'White', username: 'jessica_white', password: 'password7778' },
    { firstname: 'Andrew', lastname: 'Miller', username: 'andrew_miller', password: 'password8889' },
    { firstname: 'Olivia', lastname: 'Garcia', username: 'olivia_garcia', password: 'password9900' },
    { firstname: 'William', lastname: 'Brown', username: 'william_brown', password: 'password1122' },
    { firstname: 'Sophia', lastname: 'Jones', username: 'sophia_jones', password: 'password2233' },
    { firstname: 'Daniel', lastname: 'Davis', username: 'daniel_davis', password: 'password3344' },
    { firstname: 'Isabella', lastname: 'Clark', username: 'isabella_clark', password: 'password4455' },
    { firstname: 'Alexander', lastname: 'Hall', username: 'alexander_hall', password: 'password5566' },
    { firstname: 'Emily', lastname: 'White', username: 'emily_white', password: 'password6677' },
    { firstname: 'Ethan', lastname: 'Taylor', username: 'ethan_taylor', password: 'password7788' }
  ]);
};

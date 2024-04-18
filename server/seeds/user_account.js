const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_account').del();

  // Inserts seed entries
  const saltRounds = 10; 
  const hashedPasswords = await Promise.all([
    bcrypt.hash('password123', saltRounds),
    bcrypt.hash('password456', saltRounds),
    bcrypt.hash('password789', saltRounds),
    bcrypt.hash('password1011', saltRounds),
    bcrypt.hash('password1112', saltRounds),
    bcrypt.hash('password2223', saltRounds),
    bcrypt.hash('password3334', saltRounds),
    bcrypt.hash('password4445', saltRounds),
    bcrypt.hash('password5556', saltRounds),
    bcrypt.hash('password6667', saltRounds),
    bcrypt.hash('password7778', saltRounds),
    bcrypt.hash('password8889', saltRounds),
    bcrypt.hash('password9900', saltRounds),
    bcrypt.hash('password1122', saltRounds),
    bcrypt.hash('password2233', saltRounds),
    bcrypt.hash('password3344', saltRounds),
    bcrypt.hash('password4455', saltRounds),
    bcrypt.hash('password5566', saltRounds),
    bcrypt.hash('password6677', saltRounds),
    bcrypt.hash('password7788', saltRounds)
  ]);

  const users = [
    { firstname: 'John', lastname: 'Doe', username: 'john_doe', password: hashedPasswords[0] },
    { firstname: 'Jane', lastname: 'Smith', username: 'jane_smith', password: hashedPasswords[1] },
    { firstname: 'Alice', lastname: 'Johnson', username: 'alice_johnson', password: hashedPasswords[2] },
    { firstname: 'Bob', lastname: 'Brown', username: 'bob_brown', password: hashedPasswords[3] },
    { firstname: 'Emily', lastname: 'Davis', username: 'emily_davis', password: hashedPasswords[4] },
    { firstname: 'Michael', lastname: 'Wilson', username: 'michael_wilson', password: hashedPasswords[5] },
    { firstname: 'Sarah', lastname: 'Taylor', username: 'sarah_taylor', password: hashedPasswords[6] },
    { firstname: 'David', lastname: 'Martinez', username: 'david_martinez', password: hashedPasswords[7] },
    { firstname: 'Jennifer', lastname: 'Anderson', username: 'jennifer_anderson', password: hashedPasswords[8] },
    { firstname: 'Matthew', lastname: 'Thompson', username: 'matthew_thompson', password: hashedPasswords[9] },
    { firstname: 'Jessica', lastname: 'White', username: 'jessica_white', password: hashedPasswords[10] },
    { firstname: 'Andrew', lastname: 'Miller', username: 'andrew_miller', password: hashedPasswords[11] },
    { firstname: 'Olivia', lastname: 'Garcia', username: 'olivia_garcia', password: hashedPasswords[12] },
    { firstname: 'William', lastname: 'Brown', username: 'william_brown', password: hashedPasswords[13] },
    { firstname: 'Sophia', lastname: 'Jones', username: 'sophia_jones', password: hashedPasswords[14] },
    { firstname: 'Daniel', lastname: 'Davis', username: 'daniel_davis', password: hashedPasswords[15] },
    { firstname: 'Isabella', lastname: 'Clark', username: 'isabella_clark', password: hashedPasswords[16] },
    { firstname: 'Alexander', lastname: 'Hall', username: 'alexander_hall', password: hashedPasswords[17] },
    { firstname: 'Emily', lastname: 'White', username: 'emily_white', password: hashedPasswords[18] },
    { firstname: 'Ethan', lastname: 'Taylor', username: 'ethan_taylor', password: hashedPasswords[19] }
  ];

  return knex('user_account').insert(users);
};

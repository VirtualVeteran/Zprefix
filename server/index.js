const express = require("express");
const app = express();
const port = 8081 ;
const knex = require('knex')(require('./knexfile.js')["development"]);
const cors = require('cors');

app.listen(port, () => console.log('server is running on ${port}'));

app.use(cors({origin: 'http://localhost:3001'}));

// user_account CRUD 

app.get('/', (request, response) => {
    response.send('Application is working')
})

app.get('/user', async (request, response) => {
    knex('user_account')
    .select('*')
    .then(data => {
        var userNames = data.map(user => user.username); 
        response.json(userNames);
    })
    .catch(error => {
        console.error('Error fetching user accounts:', error);
        response.status(500).json({ error: 'Failed to fetch user accounts' });
    });
    
});

app.post('/user', async (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    knex('user_account')
        .insert({ firstname, lastname, username, password })
        .then(() => {
            res.status(201).send('User created successfully');
        })
        .catch(error => {
            console.error('Error creating user:', error);
            res.status(500).send('Failed to create user');
        });
});

// inventory_stock CRUD

app.get('/inventory', async (request, response) => {
    knex('inventory_stock')
    .select('*')
    .then(data => {
        response.json(data);
    })
    .catch(error => {
        console.error('Error fetching inventory:', error);
        response.status(500).json({ error: 'Failed to fetch inventory' });
    });
});

app.post('/inventory', async (req, res) => {
    const { itemname, user_account_id, description, quantity} = req.body;
    knex('inventory_stock')
        .insert({itemname, user_account_id, description, quantity})
        .then(() => {
            res.status(201).send('item created successfully');
        })
        .catch(error => {
            console.error('error creating item', error)
            res.status(500).send('Failed to create item');
        });
    });
    





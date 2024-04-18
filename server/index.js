const express = require("express");
const app = express();
const port = 8081 ;
const knex = require('knex')(require('./knexfile.js')["development"]);
const cors = require('cors');
const bodyParser = require('body-parser');



app.use(bodyParser.json());

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

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await knex('user_account').where({ username, password }).first();
        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
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
    try {
        const { itemname, user_account_id, description, quantity } = req.body;
    
        await knex('inventory_stock').insert({
            itemname,
            user_account_id,
            description,
            quantity
        });

        res.status(201).send('Item created successfully');
    } catch (error) {
        console.error('Error creating item', error);
        res.status(500).send('Failed to create item');
    }

});



const express = require("express");
const app = express();
const port = 8000;
const knex = require('knex')(require('./knexfile.js')["development"]);
const cors = require('cors');
const bcrypt = require('bcrypt'); 

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3001' })); 

app.listen(port, () => console.log(`Server is running on port ${port}`));

// Routes
app.get('/', (req, res) => {
    res.send('Application is working');
});

// User CRUD

app.get('/user', async (req, res) => {
    try {
        const users = await knex('user_account').select('*');
        res.json(users);
    } catch (error) {
        console.error('Error fetching user accounts:', error);
        res.status(500).json({ error: 'Failed to fetch user accounts' });
    }
});

app.post('/user', async (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10); 
        await knex('user_account').insert({ firstname, lastname, username, password: hashedPassword });
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Failed to create user');
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await knex('user_account').where({ username }).first();
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password); 
        
        if (passwordMatch) {
            return res.status(200).json({ message: 'Login successful', user });
        } else {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


app.patch('/user', async (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    try {
        await knex('user_account').insert({ firstname, lastname, username, password });
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Failed to create user');
    }
});

// Inventory CRUD
app.get('/inventory', async (req, res) => {
    try {
        const inventory = await knex('inventory_stock').select('*');
        res.json(inventory);
    } catch (error) {
        console.error('Error fetching inventory:', error);
        res.status(500).json({ error: 'Failed to fetch inventory' });
    }
});

app.post('/inventory', async (req, res) => {
    const { itemname, user_account_id, description, quantity } = req.body;
    try {
        await knex('inventory_stock').insert({ itemname, user_account_id, description, quantity });
        res.status(201).send('Item created successfully');
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).send('Failed to create item');
    }
});

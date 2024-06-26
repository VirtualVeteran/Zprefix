const express = require("express");
const app = express();
const port = 3000;
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

app.post('/Login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await knex('user_account').where({ username }).first();

        if (!user) {
           
            return res.status(404).json({ error: 'User not found' });
        }

        if (user.password === password) {
           
            return res.status(200).json({ message: 'Login successful' });
        } else {
           
            return res.status(401).json({ error: 'Invalid password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ error: 'Failed to login. Please try again.' });
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


app.delete('/user', async (req, res) => {
    const { firstname } = req.body;
    try {
        await knex('user_account').where({ firstname }).del();
        res.status(200).send('User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Failed to delete user');
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


app.patch('/inventory', async (req, res) => {
    const { itemname, description, quantity } = req.body;
    try {
        await knex('inventory_stock').insert({ itemname, description, quantity });
        res.status(201).send('Item created successfully');
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).send('Failed to create item');
    }
});

app.patch('/EditItem/:itemName', async (req, res) => {
    const { itemName } = req.params; 
    const { description, quantity } = req.body;

    try {
        await knex('inventory_stock')
            .where({ itemname: itemName })
            .update({ 
                description: description, 
                quantity: quantity 
            });
        res.status(200).send('Item edited successfully');
    } catch (error) {
        console.error('Error editing item:', error);
        res.status(500).send('Failed to edit item');
    }
});



app.delete('/inventory', async (req, res) => {
    const { itemname } = req.body;
    try {
        await knex('inventory_stock').where({ itemname }).del();
        res.status(200).send('item deleted successfully');
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).send('Failed to delete item');
    }
});


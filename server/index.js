const express = require("express");

const app = express();

const port = 8081 ;

const knex = require('knex')(require('./knexfile.js')["development"]);

app.listen(port, () => console.log('server is running on ${port}'));

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


app.get('/inventory', async (request, response) => {
    knex('inventory_stock')
    .select('*')
    .then(data => {
        var inventoryItemNames = data.map(inventory => inventory.itemname); 
        response.json(inventoryItemNames);
    })
    .catch(error => {
        console.error('Error fetching inventory item names:', error);
        response.status(500).json({ error: 'Failed to fetch inventory' });
    });
});









// app.get('/launches', async (req, res) => {
//     const allLaunches = await knex('launch').select('*');


//     res.status(200).json('All the launches')
// });
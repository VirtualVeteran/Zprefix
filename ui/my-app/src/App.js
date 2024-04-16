import React, { useState } from 'react';

function App() {
  const[inventory, setInventory] = useState([]);
  
  const showInventory = async () => {
    try {
        const response = await fetch(`https://localhost:8080/inventory`);
        if (!response.ok) {
            throw new Error('Failed to fetch inventory');
        }

        const inventoryData = await response.json();
        setInventory(inventoryData);
        console.log("inventory", inventoryData);
    } catch (error) {
        console.error('Error fetching inventory:', error.message);
    }
};

return (
    <div>
        <button  className="toggle-button" onClick={showInventory}>Inventory</button>
        {inventory.length > 0 && (
            <div>
                {inventory.map(item => (
                    <div key={item.id}>
                        <p>Name: {item.itemname}</p>
                        <p>Description: {item.description}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
);
}

export default App;
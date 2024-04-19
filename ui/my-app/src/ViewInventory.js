import React, { useState } from 'react';
import Inventory from './Inventory.js';
import Button from './Components/Button.js';
import CreateItem from './Components/CreateItem.js';


function ViewInventory() {

    const [showCreateItem, setShowCreateItem] = useState(false);
  

  return (
    <>
   <Button onClick={() => setShowCreateItem(true)}>Create A New Item</Button> 
   {showCreateItem && <CreateItem />}
    <Inventory />
    </>

    
  );
}

export default ViewInventory;
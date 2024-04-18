import React, { useState } from 'react';
import Inventory from './Inventory.js';
import Button from './Components/Button.js';
import { Link } from 'react-router-dom';
import CreateItem from './Components/CreateItem.js';


function Homepage() {

    const [showCreateItem, setShowCreateItem] = useState(false);
  

  return (
    <>
   <Button onClick={() => setShowCreateItem(true)}>Create A New Item</Button> 
   {showCreateItem && <CreateItem />}
    <Inventory />
    </>

    
  );
}

export default Homepage;
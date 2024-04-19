// AuthenticatedView.js
import React, { useState } from 'react';
import Button from './Components/Button.js';
import CreateItem from './Components/CreateItem.js';
import EditItem from './Components/EditInventory.js'; 
import AuthenticatedInventory from './AuthenticatedInventory.js';

function AuthenticatedView() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showCreateItem, setShowCreateItem] = useState(false);
    const [editItemId, setEditItemId] = useState(null); 

    const handleLogin = () => {
     
        setIsLoggedIn(true);
    };

    const handleEditItem = (itemId) => {
        setEditItemId(itemId);
    };

    return (
        <>
            {!isLoggedIn && <Button onClick={handleLogin}>Login</Button>}
            {isLoggedIn && (
                <>
                    <Button onClick={() => setShowCreateItem(true)}>Create A New Item</Button>
                    {showCreateItem && <CreateItem />}
                    <AuthenticatedInventory isLoggedIn={isLoggedIn} onEditItem={handleEditItem} />
                    {editItemId && <EditItem itemId={editItemId} />} 
                </>
            )}
        </>
    );
}

export default AuthenticatedView;

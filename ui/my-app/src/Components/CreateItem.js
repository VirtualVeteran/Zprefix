import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* Ensure the box appears above other elements */
  text-align: center;
  border: 2px solid;
  color: white;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
`;

const Title = styled.div`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 15px;
  display: flex;
  width: 24%;
  text-align: left;
  padding-left: 10px;
  color: white;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  color: white;
`;

const Container = styled.div`
  position: relative;
  text-align: left;
  background-color: #1f003e;
  color: white;
  border: 20px solid;
`;

const CreateItem = () => {
  const [error, setError] = useState(null);
  const [newItem, setNewItem] = useState({
    itemname: '',
    description: '', 
    quantity: ''
  });

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/inventory', {
        method: "PATCH", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem)
      });

      if (response.status !== 201) {
        throw new Error("Unable to create new item");
      } else {
        setNewItem({
          itemname: "",
          description: "",
          quantity: ""
        });
        alert("Item creation successful");
      }
    } catch (error) {
      console.error("Error creating item:", error);
      alert("Item creation failed. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  return (
    <Container>
      <RegisterBox>
        <Title>Create Item</Title>
        <p>Please fill in this form to create a new item.</p>
        <form onSubmit={handleSignUp}>
          <Label>Item Name</Label>
          <InputField type="text" placeholder="Item Name" name="itemname" value={newItem.itemname} onChange={handleChange} />
          <Label>Description</Label>
          <InputField type="text" placeholder="Description" name="description" value={newItem.description} onChange={handleChange} />
          <Label>Quantity</Label>
          <InputField type="text" placeholder="Quantity" name="quantity" value={newItem.quantity} onChange={handleChange} />
          <Button type="submit">Create</Button>
        </form>
      </RegisterBox>
    </Container>
  );
};

export default CreateItem;

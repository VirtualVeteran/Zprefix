import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterBox = styled.div`
  text-align:center;
  border: 2px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 20px;
`;

const Title = styled.div`
  font-size:20px;
  color:white;
`;

const Label = styled.div`
  font-size:15px;
  display:flex;
  width:24%;
  text-align:left;
  padding-left: 10px;
  color:white;
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
  text-align: left;
  background-color: #1F003E;
  color: white;
  border: 20px solid;
`;

const CreateItem = () => {
  const [error, setError] = useState(null);
  const [newItem, setNewItem] = useState({
    "Name": "",
    "Description": "", // Corrected the key name
    "Quantity": ""
  });

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://localhost:8888/inventory', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem)
        });

        if (response.status !== 201) {
            throw new Error("Unable to create new item");
        } else {
            setNewItem({
                itemname: "",
                user_account_id: "", 
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
        <Title>Register</Title>
        <p>Please fill in this form to create an account.</p>
        <form onSubmit={handleSignUp}>
          <Label>Name</Label>
          <InputField type="text" placeholder="Name" name="Name" value={newItem.Name} onChange={handleChange} />
          <Label>Description</Label>
          <InputField type="text" placeholder="Description" name="Description" value={newItem.Description} onChange={handleChange} />
          <Label>Quantity</Label>
          <InputField type="text" placeholder="Quantity" name="Quantity" value={newItem.Quantity} onChange={handleChange} />
          <Button type="submit">Create</Button>
        </form>
      </RegisterBox>
    </Container>
  );
};

export default CreateItem;

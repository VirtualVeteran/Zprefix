import React, { useState, useEffect } from "react";
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


const EditItem = ({ itemId }) => {
    const [item, setItem] = useState({
      itemname: '',
      description: '',
      quantity: ''
    });

    useEffect(() => {
      // Fetch item details based on itemId
      fetch(`http://localhost:8000/EditItem/${itemId}`)
        .then(res => res.json())
        .then(data => {
          setItem(data);
        })
        .catch(error => console.log(error));
    }, [itemId]);

    const handleUpdate = async (event) => {
      event.preventDefault();

      try {
          const response = await fetch('http://localhost:8000/EditItem', {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: itemId, ...item }) 
          });

          if (response.status !== 201) {
              throw new Error("Unable to edit existing item");
          } else {
              alert("Item update successful");
          }
      } catch (error) {
          console.error("Error editing item:", error);
          alert("Item change failed. Please try again.");
      }
    };
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setItem({ ...item, [name]: value });
    };

    return (
      <Container>
        <RegisterBox>
          <Title>Edit Item</Title>
          <p>Please fill in this form to edit the item.</p>
          <form onSubmit={handleUpdate}>
            <Label>Item Name</Label>
            <InputField type="text" placeholder="Item Name" name="itemname" value={item.itemname} onChange={handleChange} />
            <Label>Description</Label>
            <InputField type="text" placeholder="Description" name="description" value={item.description} onChange={handleChange} />
            <Label>Quantity</Label>
            <InputField type="text" placeholder="Quantity" name="quantity" value={item.quantity} onChange={handleChange} />
            <Button type="submit">Update</Button>
          </form>
        </RegisterBox>
      </Container>
    );
};

export default EditItem;

import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const EditBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  z-index: 1000;
`;

const Title = styled.div`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
`;

const EditItem = ({ itemName }) => {
  const [item, setItem] = useState({
    description: '',
    quantity: ''
  });

  useEffect(() => {
    fetch(`http://localhost:3000/EditItem/${encodeURIComponent(itemName)}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
      })
      .catch(error => console.log(error));
  }, [itemName]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/EditItem/${encodeURIComponent(itemName)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: item.description, quantity: item.quantity })
      });

      if (response.status !== 200) {
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
    <EditBox>
      <Title>Edit Item</Title>
      <form onSubmit={handleUpdate}>
        <InputField type="text" placeholder="Description" name="description" value={item.description} onChange={handleChange} />
        <InputField type="text" placeholder="Quantity" name="quantity" value={item.quantity} onChange={handleChange} />
        <Button type="submit">Update</Button>
      </form>
    </EditBox>
  );
};

export default EditItem;

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
  color:white
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

const Container = styled.button`
  text-align: left;
  background-color: #1F003E;
  color: white;
  border: 20px solid;
`;

const CreateAccount = () => {
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastnamename: "",
    username: "",
    password: ""
  });

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/user', {
        method: "PATCH", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      });

      if (response.status !== 201) {
        throw new Error("Unable to register user");
      } else {
        setNewUser({
          firstname: "",
          lastname: "",
          username: "",
          password: ""
        });
        alert("Registration successful");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <RegisterBox>
      <Title>Register</Title>
      <p>Please fill in this form to create an account.</p>
      <form onSubmit={handleSignUp}>
        <Label>Name</Label>
        <InputField type="text" placeholder="FirstName" name="firstname" value={newUser.firstname} onChange={handleChange} />
        <Label>Name</Label>
        <InputField type="text" placeholder="Lastname" name="lastname" value={newUser.lastname} onChange={handleChange} />
        <Label>Username</Label>
        <InputField type="text" placeholder="Username" name="username" value={newUser.username} onChange={handleChange} />
        <Label>Password</Label>
        <InputField type="text" placeholder="Password" name="password" value={newUser.password} onChange={handleChange} />
        <Button type="submit">Register</Button>
      </form>
    </RegisterBox>
  );
};

export default CreateAccount;

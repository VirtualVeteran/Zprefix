import React from "react";
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


const EditItem = () => {

    constructor(props){
        super(props);
        this.state =  {
          itemName: '',
          description: '',
          quantity:'',
          
      };
        this.onInputChange = this.onInputChange.bind(this);
        this.onHandleUpdate = this.onHandleUpdate.bind(this);
    }
    
    const response = await fetch('http://localhost:8000/inventory', {
        method: "PATCH", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem)
      });

      if (response.status !== 201) {
        throw new Error("Unable to edit existing item");
      } else {
        setNewItem({
          itemname: "",
          description: "",
          quantity: ""
        });
        alert("Item creation successful");
      }
    } catch (error) {
      console.error("Error editing item:", error);
      alert("Item change failed. Please try again.");
    }

   
        
    }
      onInputChange(e){
        this.setState({
           title: ‘’, body:''
    
    
        });
      }
    
      onHandleUpdate(e){
        console.log(this.postId);
        e.preventDefault();
        database.ref('posts').child(`${this.postId}`).update(this.state); 
        this.setState({
          title: '',
          body: ''    
        });
      }
    
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
      }
        
        
        
    }

export default EditItem;














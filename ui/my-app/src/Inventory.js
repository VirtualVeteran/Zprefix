import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button } from 'react-bootstrap';



const Inventory = () => {
    const [ items, setItems ] = useState([]);
   


    useEffect( () => {
        fetch('http://localhost:3000/inventory')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
            .catch(error => console.log(error));
    }, [])

 

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Inventory</h1>
            <Row>
                {items.map(item => (
                    <Col key={item.id} xs={3} style={{ padding: '100px' }}>
                        <Card className='item-card' style={{ width: '250px', height: '300px' }}>
                            <Card.Body style={{ textAlign: 'center' }}>
                                <h5>{item.itemname}</h5>
                                <h6>{item.description}</h6>
                                <h7>{item.quantity}</h7>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Inventory;

import React from "react";
import CustomerAPI from "./Database";
import {Link,Switch,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Styling/Link.css'

export function ParticularUser(props){

    let name=props.match.params.name;
    const user= CustomerAPI.get(name);

    if(!user){
        return <h1>Customer with Name {name}, Does Not Exist</h1>
    }
    return <div>
        <h1>Name of Employee :: {user.name}</h1>
        <br></br>
        <h2>Email of the Employee :: {user.email}</h2>
        <br></br>
        <h3>Items Purchased :: {user.itemsPurchased}</h3>
        <br></br>
        <h3>Total Amount :: {user.totalAmount}</h3>
        <br></br>
        <div><button className="link"><Nav.Link as={Link} to="/Customers" className="linkButton">Customers List</Nav.Link></button></div>
    </div>
}
import React from "react";
import {Link,Switch,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import CustomerAPI from "./Database";
import './Styling/Link.css'


export function AllCustomers(){
    const customerList=CustomerAPI.all();
    return <div>
        {customerList.map(cust=>
            (
                <p key={cust.email}>
                    {/* {cust.email} &nbsp;&nbsp; */}
                    <div><button className="link"><Nav.Link as={Link} className="linkButton" to={`/customers/${cust.name}`}>{cust.name}</Nav.Link></button></div>
                    {/* {cust.name} */}
                    {/* {cust.itemsPurchased} &nbsp;&nbsp; */}
                    {/* {cust.totalAmount} &nbsp;&nbsp; */}
                </p>
            ))}
    </div>
}

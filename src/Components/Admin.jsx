import React from "react";
import {Link,Switch,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import {Customers} from './Customers';
import './Styling/Link.css'


export function Admin(){
    return <div>
        <div><button className="link"><Nav.Link as={Link} className="linkButton" to="/Customers">Get All Customers</Nav.Link></button></div>
    </div>
}
import React from "react";
import {Link,Switch,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { AllCustomers } from "./AllCustomers";
import { ParticularUser } from "./ParticularUser";
// import CustomerAPI from "./Database";

export function Customers() {
    return <div>
        <Switch>
            <Route exact path="/Customers" component={AllCustomers}></Route>
            <Route path="/customers/:name" component={ParticularUser}></Route>
        </Switch>
    </div>
}
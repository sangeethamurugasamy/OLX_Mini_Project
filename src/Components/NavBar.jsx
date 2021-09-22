import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styling/NavBar.css'
import {Nav} from 'react-bootstrap'
import img1 from './Images/olxLogo.png';

export class NavBar extends React.Component {
    render() {
        return <div>
            <div className="navBar">
                <Nav.Link as={Link} to='/' id="l1">Home</Nav.Link>
                <Nav.Link as={Link} to="/Books" id="l2">Books</Nav.Link>
                <Nav.Link as={Link} to="/Laptops" id="l3">Laptops</Nav.Link>
                <Nav.Link as={Link} to="/Bikes" id='l4'>Bikes</Nav.Link>
            </div>

            <Switch>
                <Route exact path='/' component={HomeComp} />
                <Route path="/Books" component={BooksComp} />
                <Route path="/Laptops" component={LaptopsComp} />
                <Route path="/Bikes" component={BikesComp} />
            </Switch>
        </div>
    }
}
function HomeComp() {
    return <div>
        <h1> Welcome to our Website</h1>
        {/* <img src={img1} alt="" height={100} width={100}/> */}
        </div>
}
function BooksComp() {
    return <h1>This is a Books Component</h1>
}
function LaptopsComp() {
    return <h1>This ia a Laptops Component</h1>
}
function BikesComp() {
    return <h1>This ia a Bikes Component</h1>
}
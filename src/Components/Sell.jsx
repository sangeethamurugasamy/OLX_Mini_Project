import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route } from 'react-router-dom'
import img1 from './Images/olxLogo.png';
import {Nav} from 'react-bootstrap'
import './Styling/Sell.css';
export class Sell extends React.Component {

    render() {
        return <div className="sell">
            {/* <h2>This is a Login</h2> */}
                <Nav.Link as={Link} to="/">
                    <img className="sell__logo" src={img1} alt="" />
                </Nav.Link>
            <div className="sell__container">
                <h1>Enter Details</h1>
                <form>
                    <h5>Category</h5>
                    <input type="text" required/>
                    <h5>Add Title</h5>
                    <input type="text" required/>
                    <h5>Description</h5>
                    <input type="text" className="desc" required/>
                    <h5>Set Price</h5>
                    <input type='text' required/>
                    <h5>Contact Number</h5>
                    <input type='text' required/> 
                    <br></br>    
                    <button type="submit" className="submit">Submit</button>
                </form>
            </div>
        </div>

    }
}
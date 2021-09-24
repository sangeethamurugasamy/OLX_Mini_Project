import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route } from 'react-router-dom'
import { Redirect } from "./Redirect";
import { Register } from "./Register";
import img1 from './Images/Logo6.png';
import {Nav} from 'react-bootstrap'
import './Styling/Login.css';
export class Login extends React.Component {

    // const login = event =>{ 
    //     event.preventDefault();
    // }


    // const register = event =>{ 
    //     event.preventDefault();
    // }


    render() {
        <Register />
        return <div className="log">
            {/* <h2>This is a Login</h2> */}
                <Nav.Link as={Link} to="/">
                    <img className="log__logo" src={img1} alt="" />
                </Nav.Link>
            <div className="log__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type="submit" className="logbut">LogIn</button>
                </form>
                <br></br>
                <button className="regbut">Create your account</button>
            </div>
            {/* <Link to={`/Register`}>Register</Link> */}
            {/* <Switch>
                <Route exact path="/Login" component={Redirect} />
                <Route path="/Login" component={Register} />
            </Switch> */}
        </div>

    }
}
// function Register(){
//     return <h2>This is register</h2>
// }
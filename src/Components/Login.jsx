import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Switch,Route} from 'react-router-dom'
import { Redirect } from "./Redirect";
import { Register } from "./Register";
export class Login extends React.Component{
    render(){
        <Register/>
        return <div className='login'>
                <h2>This is a Login</h2>
                {/* <Link to={`/Register`}>Register</Link> */}
                <Switch>
                    <Route exact path="/Login" component={Redirect}/>
                    <Route path="/Login" component={Register}/>
                </Switch>
            </div>
            
    }
}
// function Register(){
//     return <h2>This is register</h2>
// }
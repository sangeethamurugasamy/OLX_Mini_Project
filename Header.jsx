import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,Route,Switch} from 'react-router-dom'
import './Styling/Header.css'

export class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="name">
                    <h1>OLX</h1>
                </div>
                <div className="location">
                    <input className='label' placeholder='Your location' value='India'/>
                    <Link to="/Login">Log in</Link>
                    <button className='sell'>Sell</button>
                    <Switch>
                        <Route path="/Login" Component={Login}/>
                    </Switch>
                </div>

            </div>
        );
    }
}
function Login(){
    return <h2>This is a Login</h2>
}
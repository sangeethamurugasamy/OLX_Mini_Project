import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,Route,Switch} from 'react-router-dom'
import './Styling/Header.css'
import {Login} from './Login';

export class Header extends React.Component{
    constructor(){
        super();
        this.state={city:"Chennai"}
    }
    changeCity(event){
        this.setState({city : event.target.value})
    }
    render(){
        <Login/>
        return(
            <div className="header">
                <div className="name">
                    <h2>OLX</h2>
                </div>
                <div className="location">
                    Location: :
                    <input className='label' placeholder='Your location' value={this.state.city}
                    onChange={this.changeCity.bind(this)}/>
                </div>
                <div className="actions">
                    <Link to="/Login">Log in</Link>
                    <button className='sell'>Sell</button>
                    <Switch>
                        <Route path="/Login" component={Login}/>s
                    </Switch>
                </div>

            </div>
        );
    }
}
// function Login(){
//     return <h1>This is a Login</h1>
// }
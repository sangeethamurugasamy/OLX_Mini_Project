import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,Route,Switch} from 'react-router-dom'
import './Styling/Header.css'
import Login from './Login';
import {Sell} from './Sell';
import img1 from './Images/MElogo1.png';
import img2 from './Images/Basket.png';
import {Nav} from 'react-bootstrap';
import {useStateValue} from './StateProvider';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import {useStateValue} from './StateProvider';

// function Statevale(){
// const Assign = ()=>{[{basket}, dispatch] = useStateValue();}

// }

    //     this.state={city:"Chennai"}
    // changeCity(event){
    //     this.setState({city : event.target.value})
    // };
    function Header(){
        const [{basket, user}] = useStateValue();
        const auth=getAuth();
        console.log(basket);

        const login =() =>{
            if(user) {
                auth.signOut();
            }
        };

        return(
            <nav className="header">
                {/* <div className="head">
                <style type="text/css">
                    .head{
                        <background-image url='Images/backgroundImage.jpg'></background-image>
                    }
                </style> */}
                    {/* <Link to="/"><h2>OLX</h2></Link> */}
                <Nav.Link as={Link} to="/">
                    <img className="headLogo" src={img1} alt=""/>
                </Nav.Link>
                <div className="location">
                    Location: :
                    <input className='label' placeholder='Your location' />
                     {/* value={this.state.city} onChange={this.changeCity.bind(this)}/> */}
                </div>
                <div className="welnote">
                    <h1>Welcome to MissingEnigma.com</h1>
                </div>
                <div className="actions">
                    <Nav.Link as={Link} to={!user  && "/Login"} className="headlogin"><div onClick={login}>{user ? 'Logout' : 'Login'}</div></Nav.Link>
                    <Nav.Link as={Link} to="/Sell" className="headsell">Sell</Nav.Link>
                    {/* <div>
                        <button className="sell" onClick={Sell}>Sell</button>
                    </div> */}
                    <Nav.Link as={Link} to="/Cart" className="headcart">
                        <div className="icon">
                        <img className="basLogo" src={img2} alt=""/>
                        <span className="count">{basket.length}</span>
                        </div>
                    </Nav.Link>
                    {/* <Switch>
                        <Route path="/cart" component={cart}/>
                    </Switch> */}
                    {/* <Switch>
                        <Route path="/Login" component={Login}/>s
                    </Switch> */}
                </div>

            </nav>
        );
    //}
}
export default Header;
// export default Statevale;
// function Sell(){
//     alert("Clicked");
//     return <h1>Enter product details</h1>
// }
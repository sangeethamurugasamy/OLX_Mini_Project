import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
// import {NavBar} from './Components/NavBar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Layout} from './Components/Layout';
import Login from './Components/Login1';
import Checkout from './Components/Cart';
import {Sell} from './Components/Sell';
import { Footer } from './Components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import Signup from './Components/Signup';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Chat } from '@mui/icons-material';
import { useStateValue } from './Components/StateProvider';
import proceedToCheckout from './Components/ProceedToCheck';
import { CartLayout } from './Components/CartLayout';
import { Admin } from './Components/Admin';
import { Customers } from './Components/Customers';
import { ParticularUser } from './Components/ParticularUser';
import Banner from './Components/Banner';
// import { Navigation } from './Components/Styling/Navigation';


const firebaseConfig = {
  apiKey: "AIzaSyAuZ3sM3tNVPq-IPhrDotaKev1Z-GlN6G4",
  authDomain: "modular-conduit-300709.firebaseapp.com",
  projectId: "modular-conduit-300709",
  storageBucket: "modular-conduit-300709.appspot.com",
  messagingSenderId: "769281732408",
  appId: "1:769281732408:web:d85985fec9f2d8c0345bcd",
  measurementId: "G-JXF3W5RGGR"
};
initializeApp(firebaseConfig);

function App() {
  const [{user}, dispatch] = useStateValue();
  const auth=getAuth();

  useEffect (() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){

        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      }
      else{
        dispatch({
          type:"SET_USER",
          user: null,
        });
      }
    });

    return () =>{
      unsubscribe();
    };

  }, []);
  console.log('User Is', user);

  return (
    <div>
      <BrowserRouter>
      {/* <Route path="/" component={}/> */}
        {/* <Header/>
        <NavBar/> */}
        <div className="app">
          <Switch>
            {/* <Route path="/checkout">
              <Header/>
              <h1>Hey this is checkout</h1>
            </Route> */}
            <Route path="/Login" component={Login}>
            </Route>
            <Route path="/Signup" component={Signup}>
            </Route>
            <Route path="/Admin" component={Admin}>
              <Header/>
              <Admin/>
            </Route>
            <Route path="/customers/:name" component={ParticularUser}></Route>
            <Route exact path="/Customers" component={Customers} />
            <Route path="/ProceedToCheck" component={proceedToCheckout}>
            </Route>
            <Route path="/Cart"> 
              <Header/>
              <Checkout/>
            </Route>
            <Route path="/Sell" componrnt={Sell}>
              <Header/>
              <Sell/>
            </Route>
            <Route path="/">
              <Layout/>
            </Route>
          </Switch>
        </div>

      </BrowserRouter>
  </div>
  );
}

export default App;

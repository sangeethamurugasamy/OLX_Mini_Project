import React from 'react'
import CurrencyFormat from 'react-currency-format';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useStateValue} from "./StateProvider"
import "./Styling/Subtotal.css";
import { getBasketTotal } from './reducer';
import {Nav} from 'react-bootstrap';
import {Link,Route,Switch} from 'react-router-dom';
import Login from './Login';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import CurrencyFormat from "react-currency-format";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const [{user}] = useStateValue();
    const auth=getAuth();
    const total=getBasketTotal(basket)
    const length= basket.length;
    console.log("total value" ,length);

    return (
        <div className="subtotal">
            {/* price */}

            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                    (Subtotal {basket.length} items ) : <strong>{`${value}`}</strong>
                        </p>
                        {/* <small className="subtotal__gift">
                            <input type="checkbox"/> 
                        </small> */}
                    </>
                )}
                // decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'Rs.'} 
            />
            
            {/* <button>Proceed to checkout</button> */}
            <Nav.Link as={Link} to={user ? "/ProceedToCheck" : '/Login'}>Proceed to checkout</Nav.Link>
        </div>
    )
}

export default Subtotal

import React from 'react'
import "./Styling/CheckoutProduct.css";
import {useStateValue} from "./StateProvider";


function CheckoutProduct({img, title, price, desc, id}) {
    const [{}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={img} alt="" height={200} width={200}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>RS.</small>
                    <strong>{price}</strong>
                </p>
                <div>
                    <p>{desc}</p>
                </div>

                {/* <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((index) => (
                        <p key={index}>star</p>
                    ))}
                </div> */}
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
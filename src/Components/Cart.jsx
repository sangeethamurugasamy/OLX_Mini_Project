import React from 'react'
import { useStateValue } from "./StateProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styling/Cart.css";
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal";
function Checkout() {
    const [{ basket}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                {/* <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="ad"
                /> */}
                {basket?.length === 0 ? (
                    <div className="empty">
                        <h2>Your shopping basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or add item to basket click the add to basket button
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping basket</h2>
                        {basket.map(item => {
                            console.log(item)
                        return (
                            <div>
                            <CheckoutProduct
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                desc={item.desc}
                                id={item.id}
                            />
                            </div>

                        )
                        })}
                    </div>
                )}

            </div>
            {basket?.length > 0 && 
                <div className="checkout__right">
                    {/* <h2>subtotal</h2> */}
                    <Subtotal/>
                </div>
            }
            
            
        </div>
    )
}

export default Checkout

import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
//import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useCart } from "react-use-cart";
import '../Styling/style.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useStateValue } from "../StateProvider";


const ItemCard = (props) =>{
    //let history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                img:props.img,
                title:props.title,
                price:props.price,
                id:props.id,
                desc:props.desc,
            },
        }); 
    };
    return (
            <div className="col-4" id="itemcard">
               <img src={props.img} width={200} height={200} />
                <div class="card-body">
                    <h5 className="title">{props.title}</h5>
                    <h7 className="price">Rs.{props.price}/-</h7>
                    <h5 className="description">{props.desc}</h5>
                    <button class="btn btn-success" onClick={addToBasket}>Add To Cart</button>
                </div>
            </div>
       
    );
}

export default ItemCard;
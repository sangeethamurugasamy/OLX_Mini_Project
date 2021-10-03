import React from "react";
import img1 from './Images/banner5.jpg';
import './Styling/Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Banner(){
    return (

        <div className="image">
            <img className="banner" src={img1} alt=""/>
        </div>
    )

}
export default Banner;
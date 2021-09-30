import React from "react";
import Bike_ItemCard from "./Bike_ItemCard";
import BikeData from './BikeData';    

const BikeComp = () =>{
    return (
        <div>
            <section className="container">
                <div className="row">
                   
                    {BikeData.productData.map((item,index)=>{
                        return (
                            <Bike_ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} id={item.id} key={index} />
                        )
                    })}
                </div> 
                
            </section>
        </div>
    );
}

export default BikeComp;
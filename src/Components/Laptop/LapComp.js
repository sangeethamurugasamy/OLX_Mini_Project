import React from "react";
import Lap_ItemCard from "./Lap_ItemCard";
import LapData from './LapData';    

const LapComp = () =>{
    return (
        <div>
            <section className="container">
                <div className="row">
                   
                    {LapData.productData.map((item,index)=>{
                        return (
                            <Lap_ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} id={item.id} key={index} />
                        )
                    })}
                </div> 
                
            </section>
        </div>
    );
}

export default LapComp;
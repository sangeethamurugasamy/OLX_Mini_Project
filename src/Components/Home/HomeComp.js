import React from "react";
import ItemCard from "./ItemCard";
import data from './data';    

const HomeComp = () =>{
    return (
        <div>
            <section className="container">
                <div className="row">
                   
                    {data.productData.map((item,index)=>{
                        return (
                            <ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} id={item.id} key={index} />
                        )
                    })}
                </div> 
                
            </section>
        </div>
    );
}

export default HomeComp;
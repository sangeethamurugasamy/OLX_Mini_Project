import React from "react";
import Book_ItemCard from "./Book_ItemCard";
import BookData from './BookData';    

const BookComp = () =>{
    return (
        <div>
            <section className="container">
                <div className="row">
                   
                    {BookData.productData.map((item,index)=>{
                        return (
                            <Book_ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} id={item.id} key={index} />
                        )
                    })}
                </div> 
                
            </section>
        </div>
    );
}

export default BookComp;
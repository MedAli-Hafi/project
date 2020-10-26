import React, { useState } from 'react'
import Banner from './Banner'

export const InitialMov = (props) => {



    return (
        <div className="container">
           
            <Banner />
           <br/>
            <div className="products">
                {props.products.map(el =>
                    <div className="product" key={el.id}>
                        <div className="product-image"> <  img className="image" src={el.img} alt="" /></div>
                        <div className={el.status === "Hot" ? "status" : "status1"}> {el.status}</div>
                        <div className=" product-details">
                            <div className="product-name">{el.name}</div>

                            <div className="product-price">${el.price}.00</div>

                            <div className="add-to-cart" onClick={() => props.addToCart(el)}>add to cart</div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
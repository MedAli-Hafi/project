import React, { useState, useEffect } from "react"

const Cart = (props) => {
    const [Total, setTotal] = useState(0);
    useEffect(() => {

        let y = props.cart.map(el => el.price * el.quantity)
        let sum = y.reduce((a, b) => a + b, 0)
        setTotal(sum)
        console.log(sum)

    }, [])

    return (
        <div className="cart-container">
            <div className="cart-details" style={{ marginTop: '100px' }}>

                {props.cart.map(el => <div className="cart" key={el.id}>
                    <span className="cart-image"><img className="img-cart" src={el.img} alt="" /></span>
                    <span className="cart-product-name">{el.name}</span>
                    <span className="cart-product-price">${el.price}.00</span>
                    <span className="inc" onClick={() => props.inc(el.id)}><i className="fas fa-plus"></i></span>
                    <span className="product-quantity">{el.quantity < 2 ? 1 : el.quantity}</span>
                    <span className="dec" onClick={() => props.dec(el.id)}><i className="fas fa-minus"></i></span>
                    <span className="product-total-price">{el.quantity * el.price}</span>
                    <span className="delete-product" onClick={() => { props.remove(el.id) }}><i className="fas fa-trash-alt"></i></span>


                </div>)}

                {
                    props.cart.length > 0 && (
                        <div>
                            <p className="total" onClick={() => alert("congratulation! your orders were confirmed ")}>confirm your orders  <span></span></p>
                            <p className="total">Total <span>{Total}</span></p>
                        </div>
                    )
                }


            </div>

        </div>
    )
}
export default Cart;
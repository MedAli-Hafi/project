import React from 'react'
import {Link} from 'react-router-dom'
  const Navbar =(props) => {
    return (
        <nav >
            <ul className="left">
                <li><Link to="/" >DaliExpress</Link></li> 
                </ul>
                <ul className="right">
            <li><Link to="cart">
                <span className="shoppingCart"><i class="fas fa-cart-plus"></i> <span className="cartCount">{props.tab.length}</span></span>
            </Link> </li>
                </ul>
        </nav>
        
    )
}
export default Navbar ;
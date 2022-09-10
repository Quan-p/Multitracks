import React from "react";
import Sidebar from "../Cart-sidebar/Sidebar";
import './Cart.styles.scss';

function Cart() {
    return (
        <div className="cart">
            <div className="column cart-content">
                Cart
                Cart 
            </div>
            
            <Sidebar />
        </div>
    )
}

export default Cart;
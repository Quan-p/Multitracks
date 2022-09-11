import React from "react";
import './Sidebar.styles.scss';

function Sidebar() {
    return (
        <div className="column sidebar">
            <div className="order-header">
                <h3>Order Summary</h3>
            </div>
            <div className="order-details credits" id="account">
                <div>
                    Credits in your account
                </div>
                <span className="num-val">
                    234
                </span>
            </div>
            <div className="order-details credits">
                <div>
                    Credits required
                </div>
                <span className="num-val">
                    234
                </span>
            </div>
            <div className="order-details promo">
                <div>
                    Promo
                </div>
                <span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99999 4.06889L0.958937 0L-1.14441e-05 0.965555L4.99999 6L9.99999 0.965555L9.04104 0L4.99999 4.06889Z" fill="#282828"/>
                    </svg>
                </span>
            </div>
            <div className="order-details subtotal">
                <div>
                    Subtotal
                </div>
                <span className="num-val">
                    41
                </span>
            </div>
            <div className="order-details tax">
                <div>
                    Tax
                </div>
                <span className="num-val">
                    -
                </span>
            </div>
            <div className="order-details total">
                <div>
                    Total
                </div>
                <span className="num-val total-val">
                    41
                </span>
            </div>
            <div className="order-details subtotal">
                <div>
                    Payment Method
                </div>
            </div>
            <div className="order-details payment">
                <div>
                    American Express
                    <span> </span>
                    <span className="preview">
                     - 1234
                    </span>
                </div>
                <span className="num-val">
                    Change
                </span>
            </div>
            <div className="order-details disclaimer">
                <div>
                    All sales are final.
                </div>
            </div>
            <button className="place-order-btn">
                Place Order
            </button>
            <div className="order-terms">
                By placing your order, you agree to the Terms of Use and Privacy Policy.
            </div>
        </div>
    )
}

export default Sidebar;
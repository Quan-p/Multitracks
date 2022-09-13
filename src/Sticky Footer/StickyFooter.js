import React from "react";
import './StickyFooter.styles.scss';

function StickyFooter() {
    return (
        <footer className="sticky-footer">
            <div className="total-container">
                <div className="total-header">
                    TOTAL
                </div>
                <div className="total-cred">
                    <div>
                        41 
                    </div>
                    <span>&nbsp;Credits</span>
                </div>
                
            </div>
            <button className="order-btn">PLACE ORDER</button>
        </footer>
    )
}

export default StickyFooter;
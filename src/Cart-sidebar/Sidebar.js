import React from "react";
import './Sidebar.styles.scss';

function Sidebar() {
    return (
        <div className="column sidebar">
            <div className="order-header">
                <h3>Order Summary</h3>
            </div>
            <div className="credits">
                <div>
                    Credits in your account
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
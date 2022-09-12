import React from "react";
import Sidebar from "../Cart-sidebar/Sidebar";
import song01 from "../Assets/Cart Songs/song01.png";
import song02 from "../Assets/Cart Songs/song02.png";
import './Cart.styles.scss';

function Cart() {
    return (
        <div className="cart">
            <div className="column cart-content">
                <h3 className="cart-header">My Cart</h3> 
                <div className="cart-item-container">
                    <ul className="cart-item-list">
                        <li className="cart-item">
                            <div className="song-info">
                                <img src={song01} alt="song art" className="song-art"/>
                                <div>
                                    <a href="https://www.multitracks.com/songs/Elevation-Worship/Graves-Into-Gardens/Graves-Into-Gardens/">
                                        Graves into Gardens
                                    </a>
                                    <p>Elevation Worship</p>
                                </div>
                            </div>
                            <div className="song-type">
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.166504 14C0.166504 6.63652 6.13554 0.666626 13.4998 0.666626C20.8641 0.666626 26.8332 6.63652 26.8332 14C26.8332 21.3634 20.8641 27.3333 13.4998 27.3333C6.13554 27.3333 0.166504 21.3634 0.166504 14ZM5.55296 22.2722C7.61732 24.2554 10.4171 25.4793 13.4998 25.4793C19.8293 25.4793 24.9792 20.3294 24.9792 14C24.9792 7.6714 19.8293 2.52155 13.4998 2.52155C10.4614 2.52155 7.6975 3.7104 5.64236 5.64482H14.4399C14.9606 5.64482 15.3836 6.06691 15.3836 6.58761C15.3836 7.10831 14.9606 7.53132 14.4399 7.53132H4.02404C3.63697 8.09625 3.30059 8.69805 3.01859 9.32934H17.9686C18.4902 9.32934 18.9133 9.75235 18.9133 10.273C18.9133 10.7937 18.4902 11.2158 17.9686 11.2158H2.36426C2.21865 11.7992 2.11912 12.4001 2.06658 13.0148H21.5822C22.1029 13.0148 22.5259 13.4369 22.5259 13.9576C22.5259 14.4783 22.1029 14.9013 21.5822 14.9013H2.05921C2.10806 15.5151 2.2039 16.1159 2.3449 16.6993H19.7123C20.233 16.6993 20.656 17.1223 20.656 17.643C20.656 18.1646 20.233 18.5867 19.7123 18.5867H2.97988C3.25544 19.2171 3.58537 19.818 3.96506 20.3847H16.1835C16.7042 20.3847 17.1272 20.8068 17.1272 21.3275C17.1272 21.8491 16.7042 22.2722 16.1835 22.2722H5.55296Z" fill="#919191"/>
                                </svg>
                                <span>MultiTrack WAV</span>
                            </div>
                            <div className="cost-data">
                                <div className="credit">39 Credits</div>
                            </div>
                            <div className="edit-song">
                                <span>Remove</span>
                                <span> | </span>
                                <span>Save for later</span>
                            </div>
                        </li>
                        <li className="cart-item">
                            <div className="song-info">
                                    <img src={song02} alt="song art" className="song-art"/>
                                    <div>
                                        <a href="https://www.multitracks.com/songs/Elevation-Worship/Graves-Into-Gardens/Graves-Into-Gardens/">
                                            Graves into Gardens
                                        </a>
                                        <p>Elevation Worship</p>
                                    </div>
                                </div>
                                <div className="song-type">
                                    <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.30287 10.1031H16.6169C17.0984 10.1031 17.4877 10.4904 17.4877 10.9694C17.4877 11.4477 17.0984 11.835 16.6169 11.835H5.30287C4.82234 11.835 4.43295 11.4477 4.43295 10.9694C4.43295 10.4904 4.82234 10.1031 5.30287 10.1031Z" fill="#919191"/>
                                        <path d="M5.30296 8.37106H11.3954C11.8759 8.37106 12.2652 7.9837 12.2652 7.50473C12.2652 7.02659 11.8759 6.63923 11.3954 6.63923H5.30296C4.82151 6.63923 4.43221 7.02659 4.43221 7.50473C4.43221 7.9837 4.82151 8.37106 5.30296 8.37106Z" fill="#919191"/>
                                        <path d="M5.30269 13.567H13.4837C13.9652 13.567 14.3545 13.9544 14.3545 14.4334C14.3545 14.9115 13.9652 15.299 13.4837 15.299H5.30269C4.82215 15.299 4.43276 14.9115 4.43276 14.4334C4.43276 13.9544 4.82215 13.567 5.30269 13.567Z" fill="#919191"/>
                                        <path d="M10.1766 17.031H5.30305C4.8216 17.031 4.4323 17.4184 4.4323 17.8973C4.4323 18.3756 4.8216 18.7628 5.30305 18.7628H10.1766C10.6579 18.7628 11.0473 18.3756 11.0473 17.8973C11.0473 17.4184 10.6579 17.031 10.1766 17.031Z" fill="#919191"/>
                                        <path d="M5.30305 20.4949H10.1766C10.6579 20.4949 11.0473 20.8822 11.0473 21.3612C11.0473 21.8393 10.6579 22.2268 10.1766 22.2268H5.30305C4.8216 22.2268 4.4323 21.8393 4.4323 21.3612C4.4323 20.8822 4.8216 20.4949 5.30305 20.4949Z" fill="#919191"/>
                                        <path d="M18.6119 15.1409C19.078 16.131 18.7808 16.3576 18.297 16.3576C18.1262 16.3576 18.0311 16.2288 17.9196 16.0781C17.7624 15.8653 17.5728 15.6087 17.0927 15.608L17.0911 15.6084V20.7544C17.0911 21.6705 16.0961 22.4116 14.8692 22.4116C13.6414 22.4116 12.6472 21.6705 12.6472 20.7544C12.6472 19.8382 13.6414 19.0956 14.8692 19.0956H15.9798V14.1216C15.9798 13.8171 16.2276 13.5687 16.5354 13.5687C16.5486 13.5675 17.8189 13.4563 18.6119 15.1409Z" fill="#919191"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2713 5.87045L17.4592 1.02215C17.2335 0.794909 16.9269 0.666687 16.6083 0.666687H1.97084C1.10148 0.666687 0.166565 1.29889 0.166565 2.68698V25.3131C0.166565 26.4274 1.06577 27.3334 2.17182 27.3334H20.6188C21.7249 27.3334 22.6241 26.4274 22.6241 25.3131V6.72757C22.6241 6.40586 22.4968 6.0976 22.2713 5.87045ZM20.9685 25.6906H1.82217V2.30931H14.8761V7.07193C14.8761 7.78956 15.4608 8.37143 16.1821 8.37143H20.9685V25.6906ZM20.9484 6.72881H16.5318V2.32455L20.9484 6.72881Z" fill="#919191"/>
                                    </svg>
                                    <span>MultiTrack WAV</span>
                                </div>
                                <div className="cost-data">
                                    <div className="credit">2 Credits</div>
                                </div>
                                <div className="edit-song">
                                    <span>Remove</span>
                                    <span> | </span>
                                    <span>Save for later</span>
                                </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <Sidebar />
        </div>
    )
}

export default Cart;
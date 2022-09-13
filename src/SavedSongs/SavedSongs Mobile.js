import React from "react";
import save01 from "../Assets/Saved/save01.png";
import save02 from "../Assets/Saved/save02.png";
import save03 from "../Assets/Saved/save03.png";
import './SavedSongs.styles.scss';

function SavedSongsMobile() {
    return (
        <div className="saved-songs-mobile">
            <h4 id="saved-header">Saved for Later</h4>
            <div className="cart-item-container">
                    <ul className="cart-item-list">
                        <li className="cart-item saved-item">
                            <div className="song-info">
                                <img src={save02} alt="song art" className="saved-art"/>
                                <div>
                                    <a href="https://www.multitracks.com/songs/Kari-Jobe/Majestic/Forever-(Live-Version)/">
                                        Forever (Live Version)
                                    </a>
                                    <p>Kari Jobe</p>
                                </div>
                            </div>
                            <div className="song-type">
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.166504 14C0.166504 6.63652 6.13554 0.666626 13.4998 0.666626C20.8641 0.666626 26.8332 6.63652 26.8332 14C26.8332 21.3634 20.8641 27.3333 13.4998 27.3333C6.13554 27.3333 0.166504 21.3634 0.166504 14ZM5.55296 22.2722C7.61732 24.2554 10.4171 25.4793 13.4998 25.4793C19.8293 25.4793 24.9792 20.3294 24.9792 14C24.9792 7.6714 19.8293 2.52155 13.4998 2.52155C10.4614 2.52155 7.6975 3.7104 5.64236 5.64482H14.4399C14.9606 5.64482 15.3836 6.06691 15.3836 6.58761C15.3836 7.10831 14.9606 7.53132 14.4399 7.53132H4.02404C3.63697 8.09625 3.30059 8.69805 3.01859 9.32934H17.9686C18.4902 9.32934 18.9133 9.75235 18.9133 10.273C18.9133 10.7937 18.4902 11.2158 17.9686 11.2158H2.36426C2.21865 11.7992 2.11912 12.4001 2.06658 13.0148H21.5822C22.1029 13.0148 22.5259 13.4369 22.5259 13.9576C22.5259 14.4783 22.1029 14.9013 21.5822 14.9013H2.05921C2.10806 15.5151 2.2039 16.1159 2.3449 16.6993H19.7123C20.233 16.6993 20.656 17.1223 20.656 17.643C20.656 18.1646 20.233 18.5867 19.7123 18.5867H2.97988C3.25544 19.2171 3.58537 19.818 3.96506 20.3847H16.1835C16.7042 20.3847 17.1272 20.8068 17.1272 21.3275C17.1272 21.8491 16.7042 22.2722 16.1835 22.2722H5.55296Z" fill="#919191"/>
                                </svg>
                                <span>MultiTrack WAV</span>
                            </div>
                            <div className="add-cart">
                                <span>Remove</span>
                                <button className="add-cart-btn">Add to Cart</button>
                            </div>
                        </li>
                        <li className="cart-item saved-item">
                            <div className="song-info">
                                    <img src={save01} alt="song art" className="saved-art"/>
                                    <div>
                                        <a href="https://www.multitracks.com/songs/Hillsong-Worship/OPEN-HEAVEN-/-River-Wild/In-God-We-Trust/">
                                            In God We Trust
                                        </a>
                                        <p>Hillsong Worship</p>
                                    </div>
                            </div>
                            <div className="song-type">
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.166504 14C0.166504 6.63652 6.13554 0.666626 13.4998 0.666626C20.8641 0.666626 26.8332 6.63652 26.8332 14C26.8332 21.3634 20.8641 27.3333 13.4998 27.3333C6.13554 27.3333 0.166504 21.3634 0.166504 14ZM5.55296 22.2722C7.61732 24.2554 10.4171 25.4793 13.4998 25.4793C19.8293 25.4793 24.9792 20.3294 24.9792 14C24.9792 7.6714 19.8293 2.52155 13.4998 2.52155C10.4614 2.52155 7.6975 3.7104 5.64236 5.64482H14.4399C14.9606 5.64482 15.3836 6.06691 15.3836 6.58761C15.3836 7.10831 14.9606 7.53132 14.4399 7.53132H4.02404C3.63697 8.09625 3.30059 8.69805 3.01859 9.32934H17.9686C18.4902 9.32934 18.9133 9.75235 18.9133 10.273C18.9133 10.7937 18.4902 11.2158 17.9686 11.2158H2.36426C2.21865 11.7992 2.11912 12.4001 2.06658 13.0148H21.5822C22.1029 13.0148 22.5259 13.4369 22.5259 13.9576C22.5259 14.4783 22.1029 14.9013 21.5822 14.9013H2.05921C2.10806 15.5151 2.2039 16.1159 2.3449 16.6993H19.7123C20.233 16.6993 20.656 17.1223 20.656 17.643C20.656 18.1646 20.233 18.5867 19.7123 18.5867H2.97988C3.25544 19.2171 3.58537 19.818 3.96506 20.3847H16.1835C16.7042 20.3847 17.1272 20.8068 17.1272 21.3275C17.1272 21.8491 16.7042 22.2722 16.1835 22.2722H5.55296Z" fill="#919191"/>
                                </svg>
                                <span>MultiTrack WAV</span>
                            </div>
                            <div className="add-cart">
                                <span>Remove</span>
                                <button className="add-cart-btn">Add to Cart</button>
                            </div>
                        </li>
                        <li className="cart-item saved-item">
                            <div className="song-info">
                                    <img src={save03} alt="song art" className="saved-art"/>
                                    <div>
                                        <a href="https://www.multitracks.com/songs/Phil-Wickham/The-Ascension/This-Is-Amazing-Grace/">
                                            This is Amazing Grace
                                        </a>
                                        <p>Phil Wickham</p>
                                    </div>
                            </div>
                            <div className="song-type">
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.166504 14C0.166504 6.63652 6.13554 0.666626 13.4998 0.666626C20.8641 0.666626 26.8332 6.63652 26.8332 14C26.8332 21.3634 20.8641 27.3333 13.4998 27.3333C6.13554 27.3333 0.166504 21.3634 0.166504 14ZM5.55296 22.2722C7.61732 24.2554 10.4171 25.4793 13.4998 25.4793C19.8293 25.4793 24.9792 20.3294 24.9792 14C24.9792 7.6714 19.8293 2.52155 13.4998 2.52155C10.4614 2.52155 7.6975 3.7104 5.64236 5.64482H14.4399C14.9606 5.64482 15.3836 6.06691 15.3836 6.58761C15.3836 7.10831 14.9606 7.53132 14.4399 7.53132H4.02404C3.63697 8.09625 3.30059 8.69805 3.01859 9.32934H17.9686C18.4902 9.32934 18.9133 9.75235 18.9133 10.273C18.9133 10.7937 18.4902 11.2158 17.9686 11.2158H2.36426C2.21865 11.7992 2.11912 12.4001 2.06658 13.0148H21.5822C22.1029 13.0148 22.5259 13.4369 22.5259 13.9576C22.5259 14.4783 22.1029 14.9013 21.5822 14.9013H2.05921C2.10806 15.5151 2.2039 16.1159 2.3449 16.6993H19.7123C20.233 16.6993 20.656 17.1223 20.656 17.643C20.656 18.1646 20.233 18.5867 19.7123 18.5867H2.97988C3.25544 19.2171 3.58537 19.818 3.96506 20.3847H16.1835C16.7042 20.3847 17.1272 20.8068 17.1272 21.3275C17.1272 21.8491 16.7042 22.2722 16.1835 22.2722H5.55296Z" fill="#919191"/>
                                </svg>
                                <span>MultiTrack WAV</span>
                            </div>
                            <div className="add-cart">
                                <span>Remove</span>
                                <button className="add-cart-btn">Add to Cart</button>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default SavedSongsMobile;

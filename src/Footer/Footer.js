import React from "react";
import Facebook from "../Assets/Socials/Facebook.png";
import Twitter from "../Assets/Socials/Twitter.png";
import Instagram from "../Assets/Socials/Instagram.png";
import Youtube from "../Assets/Socials/YouTube.png";
import Likes from "../Assets/Socials/Likes.png";
import Follow from "../Assets/Socials/Follow.png";

import "./Footer.scss";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-primary">
                <div className="footer-grid">
                    <div className="footer-left-col">
                        <div className="footer-col">
                            <h2>Products</h2>
                            <ul className="products-nav">
                                <li>
                                    <a href="https://www.multitracks.com/">
                                        The Connected State
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/tracks/">
                                        Tracks
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/playback/">
                                        Playback
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/padplayer/">
                                        Pad Player
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/playback/rentals/">
                                        Playback Rentals
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/cloud/">
                                        Cloud Pro
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/rehearsalmix/">
                                        RehearsalMix
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/chartbuilder/">
                                        ChartBuilder
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/chartbuilder/solopractice/">
                                        Solo Practice Bundle
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/">
                                        Charts
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/propresenter/">
                                        Pro Presenter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/sounds/">
                                        Sounds
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/">
                                        Gratis License
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h2>Resources</h2>
                            <ul className="resources-nav">
                                <li>
                                    <a href="https://www.multitracks.com/discovery/">
                                        Songs
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/products/sounds/">
                                        Sounds
                                    </a>
                                </li>
                            </ul>
                            <h2>Company</h2>
                            <ul className="company-nav">
                                <li>
                                    <a href="https://www.multitracks.com/about/">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/careers/">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/blog/">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    Partner Contact
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h2>Store</h2>
                            <ul className="store-nav">
                                <li>
                                    <a href="https://www.multitracks.com/credits/">
                                        Buy Credits
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/free/">
                                        Free Content
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/premium/account/content.request/">
                                        Request a Song
                                    </a>
                                </li>
                            </ul>
                            <h2>Extras</h2>
                            <ul className="extras-nav">
                                <li>
                                    <a href="https://www.multitracks.com/sessions/">
                                        Sessions
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/testimonials/">
                                        Testimonials
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multitracks.com/artists/submityourcontent/">
                                        Submit Your Content
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h2>Account</h2>
                            <ul className="account-nav">
                                <li>
                                    View Cart
                                </li>
                                <li>
                                    Organization
                                </li>
                                <li>
                                    My Profile
                                </li>
                                <li>
                                    Library
                                </li>
                                <li>
                                    Setlists
                                </li>
                                <li>
                                    RehearsalMix
                                </li>
                                <li>
                                    Custom Session
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="newsletter">
                        <h1>Subscribe to our Newsletter</h1>
                        <div className="email-input">
                            <input className="input-box" placeholder="Email Address"/>
                            <button className="sub-button">Subscribe</button>
                        </div>
                    </div>
                    <div className="support">
                        <h1>Have a Problem?</h1>
                        <div className="contact">
                            View FAQs or Contact our Support Team 
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.06884 5.00006L-5.34058e-05 9.04111L0.965501 10.0001L5.99995 5.00006L0.965501 6.10352e-05L-5.34058e-05 0.959008L4.06884 5.00006Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="socials">
                        <div className="socials-icons">
                            <img src={Facebook} alt="Facebook logo"/>
                            <img src={Twitter} alt="Twitter logo"/>
                            <img src={Instagram} alt="Instagram logo"/>
                            <img src={Youtube} alt="Youtube logo"/>
                        </div>
                        <div className="socials-bars">
                            <img src={Likes} id="likes" alt="Facebook Likes"/>
                            <img src={Follow} id="follows" alt="Twitter Follow"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="footer-secondary">
                <div className="footer-secondary-content">
                    <span className="copyright">
                        ©2006-2021 by MultiTracks.com LLC. All Rights Reserved
                    </span>
                    <div className="terms">
                        <a className="term-links" href="https://www.multitracks.com/terms/">Terms</a>
                        <span>|</span>
                        <a className="term-links" href="https://www.multitracks.com/privacy/">Privacy Policy</a>
                        <span>|</span>
                        <a className="term-links" href="https://www.multitracks.com/contact/">Contact</a>
                        <span>|</span>                        
                    </div>
                    <div className="language">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9ZM1.91869 12.1396C2.85072 14.2387 4.68869 15.8463 6.93632 16.4662C6.28553 15.4108 5.7756 13.8872 5.49196 12.1396H1.91869ZM1.48657 10.8838C1.33587 10.2808 1.25586 9.64975 1.25586 9.00004C1.25586 8.35029 1.33588 7.71922 1.4866 7.11617H5.33154C5.27376 7.7286 5.24329 8.35956 5.24329 9C5.24329 9.64043 5.27376 10.2714 5.33154 10.8838H1.48657ZM6.64363 12.1396C7.11644 14.8076 8.12073 16.7442 9 16.7442C9.87927 16.7442 10.8836 14.8076 11.3564 12.1396H6.64363ZM11.5321 10.8838H6.46792C6.40489 10.2767 6.37024 9.64499 6.37024 9.00003C6.37024 8.35503 6.40489 7.72324 6.46794 7.11617H11.5321C11.5951 7.72324 11.6298 8.35503 11.6298 9.00003C11.6298 9.64499 11.5951 10.2767 11.5321 10.8838ZM12.5081 12.1396C12.2244 13.8872 11.7145 15.4108 11.0637 16.4662C13.3113 15.8464 15.1494 14.2387 16.0814 12.1396H12.5081ZM16.5135 10.8838H12.6685C12.7263 10.2714 12.7567 9.64043 12.7567 9C12.7567 8.35956 12.7263 7.7286 12.6685 7.11617H16.5135C16.6642 7.71922 16.7442 8.35029 16.7442 9.00004C16.7442 9.64975 16.6642 10.2808 16.5135 10.8838ZM1.91875 5.86035H5.49197C5.7756 4.11288 6.2855 2.58928 6.93625 1.53389C4.6887 2.15378 2.85079 3.76135 1.91875 5.86035ZM9 1.25586C8.12074 1.25586 7.11647 3.19243 6.64365 5.86035H11.3563C10.8835 3.19243 9.87926 1.25586 9 1.25586ZM12.508 5.86035H16.0813C15.1493 3.76132 13.3113 2.15373 11.0637 1.53386C11.7145 2.58925 12.2244 4.11287 12.508 5.86035Z" fill="#919191"/>
                        </svg>
                        <select>
                            <option value="www.multitracks.com">English</option>
                            <option value="www.secuencias.com">Español</option>
                            <option value="www.multitracks.com.br">Português</option>
                            <option value="www.multitracksfr.com">français</option>
                        </select>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37671 10.8276C8.21092 11.0575 7.83787 11.0575 7.63063 10.8276L5.76542 8.64368L4.10745 6.68966C3.85875 6.42146 4.066 6 4.48049 6H11.5268C11.8999 6 12.1486 6.42146 11.8999 6.68966L10.2419 8.64368L8.37671 10.8276Z" fill="#919191"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Footer;
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
                        <div>View FAQs or Contact our Support Team &gt;</div>
                    </div>
                    <div className="socials">
                        <div className="socials-icons">
                            <img src={Facebook} alt="Facebook logo"/>
                            <img src={Twitter} alt="Twitter logo"/>
                            <img src={Instagram} alt="Instagram logo"/>
                            <img src={Youtube} alt="Youtube logo"/>
                        </div>
                        <div className="socials-bars">
                            <img src={Likes} alt="Facebook Likes"/>
                            <img src={Follow} alt="Twitter Follow"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="footer-secondary">

            </div>
        </div>
            
    )
}

export default Footer;
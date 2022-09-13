import React from "react";
import Likes from "../Assets/Socials/Likes.png";
import Follow from "../Assets/Socials/Follow.png";

import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer-container">
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
                            <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.06884 5.00006L-5.34058e-05 9.04111L0.965501 10.0001L5.99995 5.00006L0.965501 6.10352e-05L-5.34058e-05 0.959008L4.06884 5.00006Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="socials">
                        <div className="socials-icons">
                            <a href="https://www.facebook.com/MultiTracks">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4817 7.11358H13.7974C13.464 7.11358 13.1271 7.46244 13.1271 7.7213V9.45273H15.4774C15.3831 10.7804 15.1903 11.995 15.1903 11.995H13.1151V19.5224H10.0234V11.995H8.51829V9.46216H10.0234V7.39044C10.0234 7.01158 9.94715 4.47701 13.1914 4.47701H15.4817V7.11358ZM12 0C5.37257 0 0 5.37343 0 11.9991C0 18.6274 5.37257 24 12 24C18.6283 24 24 18.6274 24 11.9991C24 5.37343 18.6283 0 12 0Z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/MultiTracks_">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5234 9.82289C17.5277 9.93432 17.5294 10.0449 17.5294 10.158C17.5294 13.584 14.922 17.5346 10.1537 17.5346C8.68886 17.5346 7.32686 17.1069 6.18001 16.3697C6.38315 16.3937 6.58886 16.4057 6.79801 16.4057C8.01258 16.4057 9.13029 15.9917 10.0183 15.2957C8.88429 15.276 7.92601 14.5252 7.59601 13.4957C7.75458 13.5266 7.91744 13.5429 8.08458 13.5429C8.32029 13.5429 8.54829 13.5103 8.76772 13.4512C7.58058 13.2129 6.68658 12.1646 6.68658 10.9097V10.8763C7.03715 11.07 7.43658 11.1875 7.86258 11.2003C7.16572 10.734 6.70801 9.94203 6.70801 9.04289C6.70801 8.56717 6.83572 8.12317 7.05944 7.73832C8.33744 9.30775 10.2489 10.3397 12.4029 10.4486C12.3591 10.2592 12.336 10.0595 12.336 9.85717C12.336 8.42489 13.4974 7.26517 14.9289 7.26517C15.6746 7.26517 16.3474 7.57975 16.8206 8.08375C17.412 7.96717 17.9666 7.75117 18.468 7.45375C18.2734 8.05889 17.8629 8.56717 17.3272 8.88775C17.8517 8.82689 18.3523 8.68717 18.816 8.4806C18.468 9.00003 18.03 9.45603 17.5234 9.82289ZM12 0C5.37257 0 0 5.37343 0 12C0 18.6266 5.37257 24 12 24C18.0429 24 23.04 19.5326 23.8749 13.7211C23.9554 13.326 23.9931 12.9171 23.9863 12.4954C23.9949 12.3317 24 12.1663 24 12C24 5.37343 18.6283 0 12 0Z"/>
                                </svg>
                            </a>
                            <a href="http://instagram.com/MultiTracks">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9977 14.4633C10.6386 14.4633 9.53692 13.3616 9.53692 12.0025C9.53692 10.6435 10.6386 9.54177 11.9977 9.54177C13.3567 9.54177 14.4584 10.6435 14.4584 12.0025C14.4584 13.3616 13.3567 14.4633 11.9977 14.4633Z"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9977 5.94997C13.9688 5.94997 14.2023 5.9575 14.9807 5.99302C15.7005 6.02584 16.0914 6.1461 16.3515 6.2472C16.6961 6.38112 16.942 6.54109 17.2003 6.79944C17.4587 7.05775 17.6187 7.30367 17.7526 7.64826C17.8537 7.90839 17.9739 8.29927 18.0068 9.01904C18.0423 9.79747 18.0498 10.031 18.0498 12.0021C18.0498 13.9733 18.0423 14.2068 18.0068 14.9852C17.9739 15.705 17.8537 16.0958 17.7526 16.356C17.6187 16.7006 17.4587 16.9465 17.2003 17.2048C16.942 17.4631 16.6961 17.6231 16.3515 17.757C16.0914 17.8581 15.7005 17.9784 14.9807 18.0112C14.2024 18.0467 13.969 18.0543 11.9977 18.0543C10.0264 18.0543 9.79293 18.0467 9.01459 18.0112C8.29482 17.9784 7.90394 17.8581 7.6438 17.757C7.29922 17.6231 7.0533 17.4631 6.79498 17.2048C6.53667 16.9465 6.37667 16.7006 6.24275 16.356C6.14165 16.0958 6.02139 15.705 5.98857 14.9852C5.95305 14.2068 5.94552 13.9733 5.94552 12.0021C5.94552 10.031 5.95305 9.79747 5.98857 9.01904C6.02139 8.29927 6.14165 7.90839 6.24275 7.64826C6.37667 7.30367 6.53664 7.05775 6.79498 6.79944C7.0533 6.54109 7.29922 6.38112 7.6438 6.2472C7.90394 6.1461 8.29482 6.02584 9.01459 5.99302C9.79302 5.9575 10.0265 5.94997 11.9977 5.94997ZM8.20679 12.0022C8.20679 9.90847 9.90402 8.21124 11.9977 8.21124C14.0914 8.21124 15.7886 9.90847 15.7886 12.0022C15.7886 14.0958 14.0914 15.793 11.9977 15.793C9.90402 15.793 8.20679 14.0958 8.20679 12.0022ZM15.9384 8.94768C16.4276 8.94768 16.8243 8.55108 16.8243 8.06182C16.8243 7.57256 16.4276 7.17593 15.9384 7.17593C15.4491 7.17593 15.0525 7.57256 15.0525 8.06182C15.0525 8.55108 15.4491 8.94768 15.9384 8.94768Z"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8.95396 4.66432C9.74136 4.62839 9.99276 4.61989 11.9977 4.61989C14.0026 4.61989 14.254 4.62839 15.0414 4.66432C15.8271 4.70016 16.3638 4.82496 16.8333 5.00747C17.3188 5.1961 17.7305 5.44852 18.1409 5.85892C18.5513 6.26936 18.8038 6.68105 18.9924 7.1665C19.1749 7.63607 19.2997 8.17271 19.3355 8.95847C19.3715 9.74587 19.38 9.99727 19.38 12.0022C19.38 14.0071 19.3715 14.2585 19.3355 15.0459C19.2997 15.8316 19.1749 16.3683 18.9924 16.8379C18.8038 17.3233 18.5513 17.735 18.1409 18.1454C17.7305 18.5558 17.3188 18.8083 16.8333 18.9969C16.3638 19.1794 15.8271 19.3042 15.0414 19.34C14.254 19.376 14.0026 19.3845 11.9977 19.3845C9.99276 19.3845 9.74136 19.376 8.95396 19.34C8.16821 19.3042 7.63156 19.1794 7.16199 18.9969C6.67654 18.8083 6.26485 18.5558 5.85442 18.1454C5.44402 17.735 5.19159 17.3233 5.00296 16.8379C4.82045 16.3683 4.69565 15.8316 4.65981 15.0459C4.62388 14.2585 4.61538 14.0071 4.61538 12.0022C4.61538 9.99727 4.62388 9.74587 4.65981 8.95847C4.69565 8.17271 4.82045 7.63607 5.00296 7.1665C5.19159 6.68105 5.44402 6.26936 5.85442 5.85892C6.26485 5.44852 6.67654 5.1961 7.16199 5.00747C7.63156 4.82496 8.16821 4.70016 8.95396 4.66432Z"/>
                                </svg> 
                            </a>
                            <a href="https://www.youtube.com/user/MultiTracksdotcom">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.1538 9.23077L10.1546 13.8462L14.7692 11.5465L10.1538 9.23077Z"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM20.1418 8.85116C20.1418 8.85116 19.9794 7.76587 19.4812 7.28795C18.9116 6.72244 18.2799 6.66423 17.9231 6.63135C17.8841 6.62776 17.8484 6.62447 17.8164 6.62086C15.4913 6.46154 12.0036 6.46154 12.0036 6.46154H11.9964C11.9964 6.46154 8.50871 6.46154 6.18355 6.62086C6.15158 6.62447 6.1159 6.62776 6.07695 6.63135C5.72013 6.66423 5.0886 6.72242 4.51876 7.28795C4.02058 7.76587 3.85847 8.85116 3.85847 8.85116C3.85847 8.85116 3.69231 10.1256 3.69231 11.4001V12.5949C3.69231 13.8694 3.85847 15.1438 3.85847 15.1438C3.85847 15.1438 4.02058 16.2291 4.51876 16.7071C5.04278 17.2271 5.70303 17.3024 6.12416 17.3504C6.21098 17.3603 6.28763 17.369 6.35083 17.3803C7.68008 17.5011 12 17.5385 12 17.5385C12 17.5385 15.4913 17.5335 17.8164 17.3742C17.8484 17.3706 17.8841 17.3673 17.923 17.3637C18.2799 17.3308 18.9116 17.2726 19.4812 16.7071C19.9794 16.2291 20.1418 15.1438 20.1418 15.1438C20.1418 15.1438 20.3077 13.8694 20.3077 12.5949V11.4001C20.3077 10.1256 20.1418 8.85116 20.1418 8.85116Z"/>
                                </svg>
                            </a>
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
                    </div>
                    <div className="language">
                        <svg id="globe" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9ZM1.91869 12.1396C2.85072 14.2387 4.68869 15.8463 6.93632 16.4662C6.28553 15.4108 5.7756 13.8872 5.49196 12.1396H1.91869ZM1.48657 10.8838C1.33587 10.2808 1.25586 9.64975 1.25586 9.00004C1.25586 8.35029 1.33588 7.71922 1.4866 7.11617H5.33154C5.27376 7.7286 5.24329 8.35956 5.24329 9C5.24329 9.64043 5.27376 10.2714 5.33154 10.8838H1.48657ZM6.64363 12.1396C7.11644 14.8076 8.12073 16.7442 9 16.7442C9.87927 16.7442 10.8836 14.8076 11.3564 12.1396H6.64363ZM11.5321 10.8838H6.46792C6.40489 10.2767 6.37024 9.64499 6.37024 9.00003C6.37024 8.35503 6.40489 7.72324 6.46794 7.11617H11.5321C11.5951 7.72324 11.6298 8.35503 11.6298 9.00003C11.6298 9.64499 11.5951 10.2767 11.5321 10.8838ZM12.5081 12.1396C12.2244 13.8872 11.7145 15.4108 11.0637 16.4662C13.3113 15.8464 15.1494 14.2387 16.0814 12.1396H12.5081ZM16.5135 10.8838H12.6685C12.7263 10.2714 12.7567 9.64043 12.7567 9C12.7567 8.35956 12.7263 7.7286 12.6685 7.11617H16.5135C16.6642 7.71922 16.7442 8.35029 16.7442 9.00004C16.7442 9.64975 16.6642 10.2808 16.5135 10.8838ZM1.91875 5.86035H5.49197C5.7756 4.11288 6.2855 2.58928 6.93625 1.53389C4.6887 2.15378 2.85079 3.76135 1.91875 5.86035ZM9 1.25586C8.12074 1.25586 7.11647 3.19243 6.64365 5.86035H11.3563C10.8835 3.19243 9.87926 1.25586 9 1.25586ZM12.508 5.86035H16.0813C15.1493 3.76132 13.3113 2.15373 11.0637 1.53386C11.7145 2.58925 12.2244 4.11287 12.508 5.86035Z" fill="#919191"/>
                        </svg>
                        <select className="language-options">
                            <option value="www.multitracks.com">English</option>
                            <option value="www.secuencias.com">Español</option>
                            <option value="www.multitracks.com.br">Português</option>
                            <option value="www.multitracksfr.com">français</option>
                        </select>
                        <svg id="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37671 10.8276C8.21092 11.0575 7.83787 11.0575 7.63063 10.8276L5.76542 8.64368L4.10745 6.68966C3.85875 6.42146 4.066 6 4.48049 6H11.5268C11.8999 6 12.1486 6.42146 11.8999 6.68966L10.2419 8.64368L8.37671 10.8276Z" fill="#919191"/>
                        </svg>                       
                    </div>
                </div>
            </div>
        </footer>
            
    )
}

export default Footer;
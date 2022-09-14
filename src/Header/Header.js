import React from 'react';
import logo from '../Assets/MT.png';
import './Header.styles.scss';

function Header() {
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='header-left'>
                    <a className='logo' href='https://www.multitracks.com/resources/'>
                        <img src='https://mtracks.azureedge.net/public/images/site/logo/en/logo-mono.svg' alt='multi-tracks logo'/>
                    </a>
                    <svg className='mobile-menu' width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2ZM12 2C12 3.10457 11.1046 4 10 4C8.89544 4 8.00001 3.10457 8.00001 2C8.00001 0.89543 8.89544 0 10 0C11.1046 0 12 0.89543 12 2ZM18 4C19.1046 4 20 3.10457 20 2C20 0.89543 19.1046 0 18 0C16.8954 0 16 0.89543 16 2C16 3.10457 16.8954 4 18 4Z" fill="#DADADA"/>
                    </svg>
                    <ul className='nav-links'>
                        <li className='nav-list-items' id='product'>
                            Products
                            <span>
                                <svg className='dropdown-arrow' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37671 10.8276C8.21092 11.0575 7.83787 11.0575 7.63063 10.8276L5.76542 8.64368L4.10745 6.68966C3.85875 6.42146 4.066 6 4.48049 6H11.5268C11.8999 6 12.1486 6.42146 11.8999 6.68966L10.2419 8.64368L8.37671 10.8276Z"/>
                                </svg>
                            </span>
                            <div className='dropdown'>
                                <ul className='dropdown-content'>
                                    <li className='dropdown-link'>The Connected Stage</li>
                                    <li className='dropdown-link'>Church Streaming License</li>
                                    <li className='dropdown-link'>Tracks</li>
                                    <li className='dropdown-link'>Playback</li>
                                    <li className='dropdown-link'>Playback for Mac</li>
                                    <li className='dropdown-link'>Pad Player</li>
                                    <li className='dropdown-link'>Playback Rentals</li>
                                    <li className='dropdown-link'>Cloud Pro</li>
                                    <li className='dropdown-link'>RehearsalMix</li>
                                    <li className='dropdown-link'>ChartBuilder</li>
                                    <li className='dropdown-link'>Solo Practice Bundle</li>
                                    <li className='dropdown-link'>Chart Pro</li>
                                    <li className='dropdown-link'>ProPresenter Templates</li>
                                    <li className='dropdown-link'>Sounds</li>
                                </ul>
                            </div>
                        </li>
                        <li className='nav-list-items' id='songs'>
                            <a href='https://www.multitracks.com/discovery/'>
                                Songs
                            </a>
                            <span>
                                <svg className='dropdown-arrow' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37671 10.8276C8.21092 11.0575 7.83787 11.0575 7.63063 10.8276L5.76542 8.64368L4.10745 6.68966C3.85875 6.42146 4.066 6 4.48049 6H11.5268C11.8999 6 12.1486 6.42146 11.8999 6.68966L10.2419 8.64368L8.37671 10.8276Z"/>
                                </svg>
                            </span>
                            <div className='dropdown'>
                                <ul className='dropdown-content'>
                                    <li className='dropdown-link'>Top Songs</li>
                                    <li className='dropdown-link'>New Releases</li>
                                    <li className='dropdown-link'>Artists</li>
                                    <li className='dropdown-link'>Albums</li>
                                </ul>
                            </div>
                        </li>
                        <li className='nav-list-items' id='sounds'>
                            <a href='https://www.multitracks.com/products/sounds/'>
                                Sounds
                            </a>
                            <span>
                                <svg className='dropdown-arrow' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37671 10.8276C8.21092 11.0575 7.83787 11.0575 7.63063 10.8276L5.76542 8.64368L4.10745 6.68966C3.85875 6.42146 4.066 6 4.48049 6H11.5268C11.8999 6 12.1486 6.42146 11.8999 6.68966L10.2419 8.64368L8.37671 10.8276Z"/>
                                </svg>
                            </span>
                            <div className='dropdown'>
                                <ul className='dropdown-content'>
                                    <li className='dropdown-link'>Ambient Pads</li>
                                    <li className='dropdown-link'>Patches</li>
                                    <li className='dropdown-link'>Bundles</li>
                                    <li className='dropdown-link'>StageReady</li>
                                    <li className='dropdown-link'>Song Specific Patches</li>
                                    <li className='dropdown-link'>Kemper Profiles</li>
                                    <li className='dropdown-link'>Drum Samples</li>
                                    <li className='dropdown-link'>Soundbeds</li>
                                    <li className='dropdown-link'>Templates</li>
                                    <li className='dropdown-link'>Loops</li>
                                    <li className='dropdown-link'>Producers</li>
                                    <li className='dropdown-link'>Browse All Sounds</li>
                                </ul>
                            </div>
                        </li>
                        <li className='nav-list-items'>
                            <a href='https://www.multitracks.com/pricing/'>
                                Pricing
                            </a>
                        </li>
                        <li className='nav-list-items' id='more'>
                            More
                            <span>
                                <svg className='dropdown-arrow' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37671 10.8276C8.21092 11.0575 7.83787 11.0575 7.63063 10.8276L5.76542 8.64368L4.10745 6.68966C3.85875 6.42146 4.066 6 4.48049 6H11.5268C11.8999 6 12.1486 6.42146 11.8999 6.68966L10.2419 8.64368L8.37671 10.8276Z"/>
                                </svg>
                            </span>
                            <div className='dropdown'>
                                <ul className='dropdown-content'>
                                    <li className='dropdown-link'>About</li>
                                    <li className='dropdown-link'>Lead Worship Well</li>
                                    <li className='dropdown-link'>Careers</li>
                                    <li className='dropdown-link'>Sessions</li>
                                    <li className='dropdown-link'>Testimonials</li>
                                </ul>
                            </div>
                        </li>
                        <li className='nav-list-items' id="covid">
                            COVID-19
                        </li>
                    </ul>
                </div>
                <div className='mobile-center'>
                    <img src={logo} alt='MT logo'/>
                </div>
                <div className='header-right'>
                    <ul className='nav-links'>
                        <li className='nav-list-items right-nav-link'>
                            <a href='https://www.multitracks.com/register/'>
                                <span>
                                    <svg className='right-svg' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 2C6.3841 2 5.08553 3.29949 5.08553 4.88849C5.08553 6.47749 6.3841 7.77698 8.00001 7.77698C9.61592 7.77698 10.9145 6.4775 10.9145 4.88849C10.9145 3.29949 9.61592 2 8.00001 2ZM3.08553 4.88849C3.08553 2.18238 5.29212 0 8.00001 0C10.7079 0 12.9145 2.18239 12.9145 4.88849C12.9145 7.5946 10.7079 9.77698 8.00001 9.77698C5.29212 9.77698 3.08553 7.5946 3.08553 4.88849ZM0 14.8041C0 12.5301 1.85861 10.6934 4.13158 10.6934H11.7418C14.07 10.6934 16 12.585 16 14.9299V16.3252C16 17.2612 15.2467 18 14.3207 18H1.67928C0.753359 18 0 17.2612 0 16.3252V14.8041ZM4.13158 12.6934C2.9506 12.6934 2 13.6472 2 14.8041V16H14V14.9299C14 13.7067 12.9826 12.6934 11.7418 12.6934H4.13158Z" />
                                    </svg>
                                </span>
                                <span className='right-nav-text'>Account</span>
                            </a>
                        </li>
                        <li className='nav-list-items right-nav-link'>
                            <a href='https://www.multitracks.com/cart/'>
                                <span>
                                    <svg className='right-svg' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19.5" height="15.4">
                                        <defs>
                                            <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 19.5 15.4">
                                                <path d="M16.5 10H5.4c-.4 0-.8-.3-.9-.7L2.7 1.9H1c-.5 0-1-.4-1-1s.4-1 1-1h2.5c.4 0 .8.3.9.7l.3 1.2h13.8c.3 0 .6.1.8.4.2.2.2.6.1.9l-2 6.1c-.1.5-.5.8-.9.8zM6.2 8.1h9.6l1.4-4.2h-12l1 4.2z"></path>
                                                <circle cx="16.2" cy="13.5" r="1.9"></circle>
                                                <circle cx="5.8" cy="13.5" r="1.9"></circle>
                                            </symbol>
                                        </defs>
                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart"></use>
                                    </svg>
                                    <span class='badge badge-warning' id='cartCount'> 2 </span>
                                </span>
                                <span className='right-nav-text'>Cart</span>
                            </a>
                        </li>

                        <li className='nav-list-items right-nav-link'>
                            <a href='https://intercom.help/multitracks/en/'>
                                <span>
                                    <svg className='right-svg' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19" height="18">
                                        <defs>
                                            <symbol xmlns="http://www.w3.org/2000/svg" id="support" viewBox="0 0 19 18" xmlSpace="preserve">
                                                <path d="M16.9 5.6h-.6C15.8 2.3 13 0 9.5 0S3.2 2.3 2.7 5.6h-.6c-.9 0-1.7.8-1.7 1.7v3.5c0 .9.8 1.7 1.7 1.7h3.7c.6 0 1-.4 1-1V6.6c0-.6-.4-1-1-1H4.7C5.2 3.5 7.1 2 9.5 2s4.3 1.5 4.8 3.6h-1.1c-.6 0-1 .4-1 1v4.9c0 .6.4 1 1 1h1.1c-.3 1.2-1.1 1.9-2.2 2.3-.4-.5-.9-.8-1.6-.8H8.4c-1.1 0-2 .9-2 2s.9 2 2 2h2.1c.8 0 1.6-.5 1.9-1.3 2.3-.6 3.7-2.1 3.9-4.3h.6c.9 0 1.7-.8 1.7-1.7V7.3c0-1-.8-1.7-1.7-1.7zM4.8 10.5H2.4V7.6h2.4v2.9zm11.8 0h-2.4V7.6h2.4v2.9z"></path>
                                            </symbol>
                                        </defs>
                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#support"></use>
                                    </svg>
                                </span> 
                               <span className='right-nav-text'>Support</span> 
                            </a>                          
                        </li>
                        <li className='nav-list-items right-nav-link' id='search-bar'>
                            <input type="search" placeholder="Search" class="search-field" />
                            <button type='submit' className='search-button'>
                                <svg id='magnify-glass' width="17" height="16" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.0025 16C0.742499 16 0.4925 15.9001 0.2925 15.7102C-0.0975 15.3204 -0.0975 14.6908 0.2925 14.3011L4.0225 10.5734C4.4125 10.1837 5.0425 10.1837 5.4325 10.5734C5.8225 10.9632 5.8225 11.5928 5.4325 11.9825L1.7025 15.7102C1.5125 15.9001 1.2625 16 1.0025 16Z"/>
                                    <path d="M9.10252 13.7913C5.30252 13.7913 2.20251 10.7032 2.20251 6.89565C2.20251 3.08805 5.29252 0 9.10252 0C12.9125 0 16.0025 3.08805 16.0025 6.89565C16.0025 10.7032 12.9125 13.7913 9.10252 13.7913ZM9.10252 2.00873C6.40252 2.00873 4.20251 4.20734 4.20251 6.90564C4.20251 9.60394 6.40252 11.8026 9.10252 11.8026C11.8025 11.8026 14.0025 9.60394 14.0025 6.90564C14.0025 4.20734 11.8025 2.00873 9.10252 2.00873Z"/>
                                </svg> 
                            </button>
                        </li>
                    </ul>
                    <svg className='mobile-right magnify' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.0025 16C0.742499 16 0.4925 15.9001 0.2925 15.7102C-0.0975 15.3204 -0.0975 14.6908 0.2925 14.3011L4.0225 10.5734C4.4125 10.1837 5.0425 10.1837 5.4325 10.5734C5.8225 10.9632 5.8225 11.5928 5.4325 11.9825L1.7025 15.7102C1.5125 15.9001 1.2625 16 1.0025 16Z" fill="#DADADA"/>
                        <path d="M9.10252 13.7913C5.30252 13.7913 2.20251 10.7032 2.20251 6.89565C2.20251 3.08805 5.29252 0 9.10252 0C12.9125 0 16.0025 3.08805 16.0025 6.89565C16.0025 10.7032 12.9125 13.7913 9.10252 13.7913ZM9.10252 2.00873C6.40252 2.00873 4.20251 4.20734 4.20251 6.90564C4.20251 9.60394 6.40252 11.8026 9.10252 11.8026C11.8025 11.8026 14.0025 9.60394 14.0025 6.90564C14.0025 4.20734 11.8025 2.00873 9.10252 2.00873Z" fill="#DADADA"/>
                    </svg>
                    <svg className='mobile-right account' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 2C6.3841 2 5.08553 3.29949 5.08553 4.88849C5.08553 6.47749 6.3841 7.77698 8.00001 7.77698C9.61592 7.77698 10.9145 6.4775 10.9145 4.88849C10.9145 3.29949 9.61592 2 8.00001 2ZM3.08553 4.88849C3.08553 2.18238 5.29212 0 8.00001 0C10.7079 0 12.9145 2.18239 12.9145 4.88849C12.9145 7.5946 10.7079 9.77698 8.00001 9.77698C5.29212 9.77698 3.08553 7.5946 3.08553 4.88849ZM0 14.8041C0 12.5301 1.85861 10.6934 4.13158 10.6934H11.7418C14.07 10.6934 16 12.585 16 14.9299V16.3252C16 17.2612 15.2467 18 14.3207 18H1.67928C0.753359 18 0 17.2612 0 16.3252V14.8041ZM4.13158 12.6934C2.9506 12.6934 2 13.6472 2 14.8041V16H14V14.9299C14 13.7067 12.9826 12.6934 11.7418 12.6934H4.13158Z" fill="#DADADA"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header;
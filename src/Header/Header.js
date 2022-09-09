import React from 'react';
import './Header.styles.scss';

function Header() {
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='header-left'>
                    <a className='logo' href='https://www.multitracks.com/resources/'>
                        <img src='https://mtracks.azureedge.net/public/images/site/logo/en/logo-mono.svg' alt='multi-tracks logo'/>
                    </a>
                    <ul className='nav-links'>
                        <li className='nav-list-items' id='product'>
                            Products
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
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
                        <li className='nav-list-items'>
                            <a href='https://www.multitracks.com/discovery/'>
                                Songs
                            </a>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37671 10.8276C8.21092 11.0575 7.83787 11.0575 7.63063 10.8276L5.76542 8.64368L4.10745 6.68966C3.85875 6.42146 4.066 6 4.48049 6H11.5268C11.8999 6 12.1486 6.42146 11.8999 6.68966L10.2419 8.64368L8.37671 10.8276Z"/>
                                </svg>
                            </span>
                        </li>
                        <li className='nav-list-items'>
                            <a href='https://www.multitracks.com/products/sounds/'>
                                Sounds
                            </a>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37671 10.8276C8.21092 11.0575 7.83787 11.0575 7.63063 10.8276L5.76542 8.64368L4.10745 6.68966C3.85875 6.42146 4.066 6 4.48049 6H11.5268C11.8999 6 12.1486 6.42146 11.8999 6.68966L10.2419 8.64368L8.37671 10.8276Z"/>
                                </svg>
                            </span>
                        </li>
                        <li className='nav-list-items'>
                            <a href='https://www.multitracks.com/pricing/'>
                                Pricing
                            </a>
                        </li>
                        <li className='nav-list-items'>
                            More
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37671 10.8276C8.21092 11.0575 7.83787 11.0575 7.63063 10.8276L5.76542 8.64368L4.10745 6.68966C3.85875 6.42146 4.066 6 4.48049 6H11.5268C11.8999 6 12.1486 6.42146 11.8999 6.68966L10.2419 8.64368L8.37671 10.8276Z"/>
                                </svg>
                            </span>
                        </li>
                        
                    </ul>
                </div>
                <div className='header-right'>
                    <ul className='nav-links'>
                        <li className='nav-list-items'>
                            <a href='https://www.multitracks.com/register/'>
                                Account
                            </a>
                        </li>
                        <li className='nav-list-items'>
                            <a href='https://www.multitracks.com/cart/'>
                                Cart
                            </a>
                        </li>
                        <li className='nav-list-items'>
                            Support
                        </li>
                        <li className='nav-list-items'>
                            Search Icon
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
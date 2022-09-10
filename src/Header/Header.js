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
                        <li className='nav-list-items' id='songs'>
                            <a href='https://www.multitracks.com/discovery/'>
                                Songs
                            </a>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
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
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
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
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
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
                <div className='header-right'>
                    <ul className='nav-links'>
                        <li className='nav-list-items'>
                            <a href='https://www.multitracks.com/register/'>
                                Account
                            </a>
                        </li>
                        <li className='nav-list-items'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19.5" height="15.4" className="navigation-links--item--icon">
                                    <defs>
                                        <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 19.5 15.4">
                                            <path d="M16.5 10H5.4c-.4 0-.8-.3-.9-.7L2.7 1.9H1c-.5 0-1-.4-1-1s.4-1 1-1h2.5c.4 0 .8.3.9.7l.3 1.2h13.8c.3 0 .6.1.8.4.2.2.2.6.1.9l-2 6.1c-.1.5-.5.8-.9.8zM6.2 8.1h9.6l1.4-4.2h-12l1 4.2z"></path>
                                            <circle cx="16.2" cy="13.5" r="1.9"></circle>
                                            <circle cx="5.8" cy="13.5" r="1.9"></circle>
                                        </symbol>
                                    </defs>
                                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart"></use>
                                </svg>
                            </span>
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
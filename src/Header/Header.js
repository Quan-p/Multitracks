import React from 'react';
import './Header.styles.scss';

function Header() {
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='header-left'>
                    <a href='https://www.multitracks.com/resources/'>
                        <img src='https://mtracks.azureedge.net/public/images/site/logo/en/logo-mono.svg' alt='multi-tracks logo'/>
                    </a>
                    <ul className='nav-links'>
                        <li className='nav-list-items'>
                            Products
                        </li>
                        <li className='nav-list-items'>
                            <a href='https://www.multitracks.com/discovery/'>
                                Songs
                            </a>
                        </li>
                        <li className='nav-list-items'>
                            <a href='https://www.multitracks.com/products/sounds/'>
                                Sounds
                            </a>
                        </li>
                        <li className='nav-list-items'>
                            <a href='https://www.multitracks.com/pricing/'>
                                Pricing
                            </a>
                        </li>
                        <li className='nav-list-items'>
                            More
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
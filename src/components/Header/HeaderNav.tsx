import React, { useState } from 'react';

const navList = [
    {
        displayName: 'home',
        link: '#',
    },
    {
        displayName: 'about',
        link: '#',
    },
    {
        displayName: 'services',
        link: '#'
    },
    {
        displayName: 'our team',
        link: '#'
    },
    {
        displayName: 'news',
        link: '#'
    },
    {
        displayName: 'careers',
        link: '#'
    },
    {
        displayName: 'contact',
        link: '#'
    }
];
const HeaderNav = () => {
    const [active, setActive] = useState('home');
    const [showNav, setShowNav] = useState(false);

    return <nav className="navbar navbar-expand-lg header-nav">
        <button
            className="navbar-toggler header-nav__toggle-button"
            type="button"
            onClick={() => { setShowNav(!showNav); }}>
            <i className="fa fa-bars"></i>
        </button>
        <div className={`header-nav__list-container collapse navbar-collapse ${showNav ? 'show' : ''}`} id="navbarTogglerDemo01">
            <ul className="navbar-nav header-nav-list font-slab">
                {
                    navList.map(nav => {
                        return <li key={nav.displayName} className="nav-item header-nav-list__item">
                            <a href={nav.link}
                                className={`nav-link ${active === nav.displayName ? 'active' : ''}   header-nav-list__link`}
                                onClick={() => { setActive(nav.displayName); }}>
                                {nav.displayName}
                            </a>
                        </li>;
                    })
                }

            </ul>
        </div>
    </nav>;
};

export default HeaderNav;
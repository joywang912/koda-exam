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

    return <ul className="nav header-nav">
        {
            navList.map(nav => {
                return <li key={nav.displayName} className="nav-item">
                    <a href={nav.link}
                        className={`nav-link ${active === nav.displayName ? 'active' : ''}`}
                        onClick={() => { setActive(nav.displayName); }}>
                        {nav.displayName}
                    </a>
                </li>;
            })
        }

    </ul>;
};

export default HeaderNav;
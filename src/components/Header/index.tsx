import React from 'react';
import logo from '../../assets/images/logo.png';
import './header.scss';
import HeaderNav from './HeaderNav';

const Header = () => {
    return <header>
        <img src={logo} alt="Koda" className="header__logo" />
        <HeaderNav />
    </header>;
};

export default Header;
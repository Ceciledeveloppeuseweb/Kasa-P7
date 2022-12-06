import React from 'react';
import logo from '../assets/logo.jpg';
import logoMobile from '../assets/logo-header-mobile.png';

const Logo = () => {
    return (
        <>
        <img src={logo} alt="logo kasa" className='logo'/>
        <img src={logoMobile} alt="logo de kasa" className='logo__mobile'/>
        </>
        
    );
};

export default Logo;
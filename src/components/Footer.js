import React from 'react';
import logo from '../assets/logo-footer.png';

const Footer = () => {
    return (
        <div className='footer'>
           <img src={logo} alt="logo kasa" className='logo-footer'/>
           <p className='pFooter'>© 2020 Kasa. All rights reserved</p> 
        </div>
    );
};

export default Footer;
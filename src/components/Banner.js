import React from 'react';
import banner from '../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='fond-banner'>
            <h1 className='titre-banner'>Chez vous, partout et ailleurs</h1>
            <img src={banner} alt="bannière paysage" className='img-banner'/>
        </div>
    );
};
            

export default Banner;
import React from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Header from '../components/Header';


const Home = () => {
    return (
        <div>
            <Header />
            <div className='banner'>
                <Banner />
            </div>
            <Gallery />
        </div>
    );
};

export default Home;
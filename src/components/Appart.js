import React from 'react';

const Appart = ({ cover, title }) => {
    return (
        <li className='appart'>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </li>

        
    );
};

export default Appart;
import React from 'react';

const Appart = ({ cover, title }) => {
    return (
        <article className='location'>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </article>

        
    );
};

export default Appart;
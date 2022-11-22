import React, { useState } from 'react';

import chevron from '../assets/chevron-ouvert.png';

const Button = () => {
    const [btnActive, setBtnActive] = useState(false);

    function handleClick() {
        setBtnActive(!btnActive);
    }
    
    return (
        <button className={`btn ${btnActive && "btnActiveclasse"}`} onClick={handleClick} >
            <img src={chevron} alt="bouton qui dévoile le contenu" />
        </button>
    );
};

export default Button;
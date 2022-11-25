import React, { useState } from 'react';//Un Hook est une fonction qui permet de « se brancher » sur des fonctionnalités React

import chevron from '../assets/chevron-ouvert.png';

const Button = () => {
    const [btnActive, setBtnActive] = useState(false);//=> variable d'état qui permet d’utiliser un état local dans une fonction composant/déstructuration positionnelle

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
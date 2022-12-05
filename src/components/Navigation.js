import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <ul className='nav'>
            
                <li>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    Accueil
                </NavLink>
                </li>
                <li>
                <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    A Propos
                </NavLink>
                </li>
            
            
        </ul>
    );
};

export default Navigation;
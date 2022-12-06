import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <ul className='nav'>
            {/* className={(nav) => (nav.isActive ? "nav-active" : "")} A remettre sur les liens pour une nav avec css :active*/}
            
                <li>
                <NavLink to="/" className="nav-liens">
                    Accueil
                </NavLink>
                </li>
                <li>
                <NavLink to="/About" className="nav-liens">
                    A Propos
                </NavLink>
                </li>
            
            
        </ul>
    );
};

export default Navigation;
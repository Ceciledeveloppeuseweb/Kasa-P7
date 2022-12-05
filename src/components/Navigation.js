import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <ul className='nav'>
            {/* className={(nav) => (nav.isActive ? "nav-active" : "")} */}
            
                <li>
                <NavLink to="/" className="nav">
                    Accueil
                </NavLink>
                </li>
                <li>
                <NavLink to="/About" className="nav">
                    A Propos
                </NavLink>
                </li>
            
            
        </ul>
    );
};

export default Navigation;
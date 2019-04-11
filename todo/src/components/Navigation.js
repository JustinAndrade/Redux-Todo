import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
    return (
        <div className='nav-wrapper'>
            <NavLink>
                Home
            </NavLink>
            <NavLink>
                Fact
            </NavLink>
            <NavLink>
                Home
            </NavLink>
        </div>
    )
}

export default Navigation;
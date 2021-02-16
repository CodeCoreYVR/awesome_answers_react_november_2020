import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props)=>{
    return(
        <nav>
            <NavLink to='/questions'>Questions Index</NavLink>
            |
            <NavLink to='/questions/new'>New Question</NavLink>
            |
            {
                props.currentUser ? 
                <span>{props.currentUser.first_name}</span> 
                :
                <NavLink to='/sign_in'>Sign In</NavLink>
            }
            
        </nav>
    )
}
export default Navbar;
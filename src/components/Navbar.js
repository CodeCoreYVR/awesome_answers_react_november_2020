import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav>
      <NavLink to='/questions'>Questions Index</NavLink>
      |
      <NavLink to='/'>Welcome</NavLink>
    </nav>
  )

}

export default Navbar;
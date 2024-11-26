import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" activeStyle={{ fontWeight: 'bold' }}>Home</NavLink>
      <NavLink to="/lab7r" activeStyle={{ fontWeight: 'bold' }}>Lab 7</NavLink>
      <NavLink to="/lab8r" activeStyle={{ fontWeight: 'bold' }}>Lab 8</NavLink>
    </nav>
  );
}

export default Navbar;
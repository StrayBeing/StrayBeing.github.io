import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Hobbies from './Hobbies';
import Favorite from './Favorite';
import Contact from './Contact';

const Lab9 = () => {
  return (
    <div className="lab9">
      <nav className="lab9-nav">
        <NavLink to="/lab9r" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/lab9r/aboutme" className="nav-link" activeClassName="active">
          About Me
        </NavLink>
        <NavLink to="/lab9r/hobbies" className="nav-link" activeClassName="active">
          Hobbies
        </NavLink>
        <NavLink to="/lab9r/favorite" className="nav-link" activeClassName="active">
          Favorite
        </NavLink>
        <NavLink to="/lab9r/contact" className="nav-link" activeClassName="active">
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Lab9;

import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './HomePage'; 
import CounterApp from './CounterApp'; 

const Lab7 = () => {
  return (
    <div>
      <nav style={styles.localNav}>
        <NavLink to="/lab7r" style={styles.navLink} activeStyle={styles.activeLink}>Zadanie 1</NavLink>
        <NavLink to="/lab7r/counterapp" style={styles.navLink} activeStyle={styles.activeLink}>Zadanie 2</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counterapp" element={<CounterApp />} />
      </Routes>
    </div>
  );
};

const styles = {
  localNav: {
    backgroundColor: '#555',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '0 10px',
  },
  activeLink: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
};

export default Lab7;
import React from 'react';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Lab7 from './components/Lab7/Lab7';
import Lab8 from './components/Lab8/Lab8';
import Lab9 from './components/Lab9/Lab9';
import NotFound from './components/Lab9/NotFound';

function App() {
  return (
    <Router>
      <div>
        <nav style={styles.mainNav}>
          <NavLink to="/lab7r" style={styles.navLink} activeStyle={styles.activeLink}>
            Lab 7
          </NavLink>
          <NavLink to="/lab8r" style={styles.navLink} activeStyle={styles.activeLink}>
            Lab 8
          </NavLink>
          <NavLink to="/lab9r" style={styles.navLink} activeStyle={styles.activeLink}>
            Lab 9
          </NavLink>
        </nav>

        <Routes>
          <Route path="/lab7r/*" element={<Lab7 />} />
          <Route path="/lab8r" element={<Lab8 />} />
          <Route path="/lab9r/*" element={<Lab9 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  mainNav: {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    margin: '0 15px',
  },
  activeLink: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
};

export default App;

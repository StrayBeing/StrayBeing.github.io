import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CounterApp from './pages/CounterApp';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>Zadanie1</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/counterapp" style={styles.navLink}>Zadanie2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counterapp" element={<CounterApp />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default App;
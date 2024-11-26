import React, { useEffect, useRef } from 'react';
import Card from './Card';
import { CounterProvider, useCounter } from './CounterContext';

const CounterApp = () => {
  const renderCount = useRef(1);

  useEffect(() => {
    console.log('CounterApp mounted');
    return () => console.log('CounterApp unmounted');
  }, []);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`Render count: ${renderCount.current}`);
  });

  return (
    <CounterProvider>
      <div style={styles.container}>
        <h1 style={styles.title}>Counter App with Hooks</h1>

        <div style={styles.cardContainer}>
          <Card 
            title="Card 1"
            description="This is the first card with a local and global counter."
          />
          <Card 
            title="Card 2"
            description="This is the second card with a local and global counter."
          />
          <Card 
            title="Card 3"
            description="This is the third card with a local and global counter."
          />
        </div>
      </div>
    </CounterProvider>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    minHeight: '100vh',  
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px', 
  },
};

export default CounterApp;
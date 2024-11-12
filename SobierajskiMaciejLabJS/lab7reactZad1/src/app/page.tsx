"use client";
import React, { useEffect } from 'react';
import Card from '../../components/Card';
import { CounterProvider } from '../../components/CounterContext';

const HomePage = () => {
  useEffect(() => {
    console.log('HomePage mounted');
    return () => console.log('HomePage unmounted');
  }, []);

  return (
    <CounterProvider>
      <div style={styles.container}>
        <h1>Counter App with Hooks</h1>
        
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
    </CounterProvider>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    padding: '20px',
  },
};

export default HomePage;
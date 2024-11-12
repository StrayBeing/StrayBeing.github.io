"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useCounter } from './CounterContext';
interface CardProps {
  title: string;
  description: string;
}
const Card: React.FC<CardProps> = ({ title, description }) => {
  const [localCount, setLocalCount] = useState(0);
  const { state, dispatch } = useCounter();
  const incrementButtonRef = useRef<HTMLButtonElement>(null);
  const [isFocused, setIsFocused] = useState(false); 

  const handleFocusClick = () => {
    setIsFocused(true);
    incrementButtonRef.current?.focus();
  };
  const handleBlur = () => setIsFocused(false);
  useEffect(() => {
    console.log(`Global count changed: ${state.count}`);
  }, [state.count]);
  return (
    <div style={styles.cardContainer}>
      <h2>{title}</h2>
      <p>{description}</p>
      {}
      <h4>Local Count: {localCount}</h4>
      <button style={styles.button} onClick={() => setLocalCount(localCount + 1)}>Increment Local</button>
      {}
      <h4>Global Count: {state.count}</h4>
      {}
      <button
        ref={incrementButtonRef}
        onClick={() => dispatch({ type: 'increment' })}
        onBlur={handleBlur} 
        style={{
          ...styles.button,
          ...(isFocused ? styles.focusStyle : {}), 
        }}
      >
        Increment Global
      </button>
      {}
      <button
        onClick={() => dispatch({ type: 'decrement' })}
        style={styles.decrementButton}
      >
        Decrement Global
      </button>
      {}
      <button style={styles.button} onClick={handleFocusClick}>
        Focus Increment Button
      </button>
    </div>
  );
};

const styles = {
  cardContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center' as 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: '1px solid #007bff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.2s',
    margin: '8px',
    outline: 'none',
  },
  decrementButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: '1px solid #dc3545',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.2s',
    margin: '8px',
    outline: 'none',
  },
  focusStyle: {
    outline: '3px solid green', 
  },
};
export default Card;

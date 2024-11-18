import React, { createContext, useContext, useReducer, useState } from 'react';

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unhandled action type');
  }
};
const CounterContext = createContext(undefined);
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [localCount, setLocalCount] = useState(0);

  return (
    <CounterContext.Provider value={{ state, dispatch, localCount, setLocalCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
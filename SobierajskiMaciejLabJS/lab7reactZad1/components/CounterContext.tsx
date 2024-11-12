"use client";
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
interface State {
  count: number;
}
type Action = { type: 'increment' } | { type: 'decrement' };
const initialState: State = { count: 0 };
const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unhandled action type');
  }
};
interface CounterContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}
const CounterContext = createContext<CounterContextProps | undefined>(undefined);
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
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
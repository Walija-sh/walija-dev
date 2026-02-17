// src/components/CursorContext.jsx
import { createContext, useState, useContext } from 'react';

const CursorContext = createContext();
export const useCursorContext = () => useContext(CursorContext);

export const CursorContextProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');

  // Change cursor variant from any component
  const setVariant = (variant) => setCursorVariant(variant);

  return (
    <CursorContext.Provider value={{ cursorVariant, setVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

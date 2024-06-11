import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NameColorContextProps {
  nameColor: string;
  setNameColor: (color: string) => void;
}

const NameColorContext = createContext<NameColorContextProps | undefined>(undefined);

export const NameColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [nameColor, setNameColor] = useState<string>('black');

  return (
    <NameColorContext.Provider value={{ nameColor, setNameColor }}>
      {children}
    </NameColorContext.Provider>
  );
};

export const useNameColor = (): NameColorContextProps => {
  const context = useContext(NameColorContext);
  if (!context) {
    throw new Error('useNameColor must be used within a NameColorProvider');
  }
  return context;
};

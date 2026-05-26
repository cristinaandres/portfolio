// src/contexts/MenuContext.tsx
import React, { createContext, useState, useContext, ReactNode, FunctionComponent } from 'react';

interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: FunctionComponent<MenuProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleBodyScroll(!isMenuOpen);
  };

  const value = {
    isMenuOpen,
    toggleMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

const toggleBodyScroll = (isMenuOpen: boolean) => {
  document.body.classList.toggle('overflow-hidden', isMenuOpen);
};

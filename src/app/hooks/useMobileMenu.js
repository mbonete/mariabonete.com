'use client';
import React from 'react';

const MobileMenuContext = React.createContext({});

export const MobileMenuProvider = ({children}) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const value = {
    showMobileMenu,
    setShowMobileMenu
  }
  return (
    <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>
  )
}

export const useMobileMenu = () => React.useContext(MobileMenuContext);
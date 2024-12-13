import React from 'react';
import "./header.scss";

const Header: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <header className="header">
      {children}
    </header>
  );
};

export default Header;
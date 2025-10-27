
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 md:px-6 md:py-5">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 text-center">
          Our Voice, Our Rights
        </h1>
        <p className="text-center text-gray-500 mt-1">MGNREGA Performance Dashboard</p>
      </div>
    </header>
  );
};

export default Header;

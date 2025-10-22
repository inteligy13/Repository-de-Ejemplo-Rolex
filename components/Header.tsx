
import React, { useState } from 'react';
import { RolexLogo, SearchIcon, GlobeIcon, HeartIcon, MenuIcon } from './Icons';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-rolex-dark text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <RolexLogo />
        </div>
        
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8 text-sm font-semibold tracking-wider">
            <li><a href="#" className="hover:text-gray-300 transition-colors">Relojes</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">El mundo de Rolex</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Comprar un Rolex</a></li>
          </ul>
        </nav>
        
        <div className="flex items-center space-x-5">
          <button className="hidden lg:block hover:text-gray-300"><SearchIcon /></button>
          <button className="hidden lg:block hover:text-gray-300"><GlobeIcon /></button>
          <button className="hidden lg:block hover:text-gray-300"><HeartIcon /></button>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-rolex-dark">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            <li><a href="#" className="hover:text-gray-300 transition-colors">Relojes</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">El mundo de Rolex</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Comprar un Rolex</a></li>
            <li className="pt-4 flex space-x-6">
                <button className="hover:text-gray-300"><SearchIcon /></button>
                <button className="hover:text-gray-300"><GlobeIcon /></button>
                <button className="hover:text-gray-300"><HeartIcon /></button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

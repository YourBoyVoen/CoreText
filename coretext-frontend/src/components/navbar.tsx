import React from 'react';
import LanguageSwitch from './languangeswitcher';

interface NavbarProps {
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <header className="relative flex items-center justify-center px-6 py-4 bg-[#47BEB9] shadow-md">

      <div className="absolute left-6 text-xl font-bold text-white">
        CoreText.ai
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-6 text-white font-medium">
        <a href="#" className="hover:text-gray-100">Summarize</a>
        <a href="#" className="hover:text-gray-100">How to Use</a>
        <a href="#" className="hover:text-gray-100">About Us</a>
      </nav>

      {/* Language Switch */}
      <div className="absolute right-6 flex items-center space-x-2">
        <LanguageSwitch
          selectedLanguage={selectedLanguage}
          onLanguageChange={onLanguageChange}
        />
      </div>
    </header>
  );
};

export default Navbar;

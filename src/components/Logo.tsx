import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false }) => {
  return (
    <Link to="/" className="flex items-center transition-all duration-300">
      <img
        src="/sdasd.png"
        alt="Aljeroudy Aesthetikpraxis Logo"
        className={`h-12 w-auto transition-all duration-300 ${
          isScrolled ? 'brightness-100' : 'brightness-0 invert'
        }`}
      />
    </Link>
  );
};

export default Logo;
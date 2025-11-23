import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false }) => {
  return (
    <div className="flex items-center transition-all duration-300">
      <img
        src="/sdasd.png"
        alt="Aljeroudy Aesthetikpraxis Logo"
        className={`h-12 w-auto transition-all duration-300 ${
          isScrolled ? 'brightness-100' : 'brightness-0 invert'
        }`}
      />
    </div>
  );
};

export default Logo;
import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-16 w-auto" }: LogoProps) {
  return (
    <a href="https://kabura.nl" className="block">
      <img 
        src="http://kabura.nl/wp-content/uploads/2024/10/Kabura-catering-logo.jpg"
        alt="Kabura Catering"
        className={className}
      />
    </a>
  );
}
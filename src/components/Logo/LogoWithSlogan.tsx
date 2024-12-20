import React from 'react';
import { Logo } from './Logo';

interface LogoWithSloganProps {
  className?: string;
}

export function LogoWithSlogan({ className }: LogoWithSloganProps) {
  return (
    <div className="flex flex-col items-start">
      <Logo className={className} />
      <p className="hidden md:block text-white text-lg font-medium mt-2">
        Authentiek Afghaanse catering
      </p>
    </div>
  );
}
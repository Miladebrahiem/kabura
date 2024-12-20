import React from 'react';
import { Logo } from '../Logo';
import { MenuButton } from './MenuButton';

interface MobileHeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export function MobileHeader({ isMenuOpen, onMenuToggle }: MobileHeaderProps) {
  return (
    <div className="md:hidden space-y-4">
      <div className="flex justify-start">
        <Logo className="h-20 w-auto" />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-white text-lg font-medium text-center">
          Authentiek Afghaanse catering
        </h2>
        <MenuButton isOpen={isMenuOpen} onClick={onMenuToggle} />
      </div>
    </div>
  );
}
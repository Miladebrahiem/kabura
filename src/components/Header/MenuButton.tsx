import React from 'react';
import { Menu, X } from 'lucide-react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button 
      className="relative flex items-center space-x-3 bg-white px-4 py-3 rounded-full hover:bg-gray-100 transition-colors z-50"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <X className="h-5 w-5 text-primary" />
      ) : (
        <>
          <span className="text-tertiary font-medium">Ontdek ons</span>
          <Menu className="h-8 w-8 text-tertiary" />
        </>
      )}
    </button>
  );
}
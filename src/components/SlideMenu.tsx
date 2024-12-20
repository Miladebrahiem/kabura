import React, { useState } from 'react';
import type { MenuItem } from '../lib/graphql/types/menu';
import { SlideMenuItem } from './SlideMenuItem';
import { ContactButtons } from './ContactButtons';
import { Logo } from './Logo';

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export function SlideMenu({ isOpen, onClose, items }: SlideMenuProps) {
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const handleToggle = (itemId: string) => {
    setExpandedItemId(expandedItemId === itemId ? null : itemId);
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-primary shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 md:p-6">
          <Logo className="h-16 w-auto mx-auto md:mx-0" />
          <h2 className="text-white text-lg font-medium mt-3 text-center md:text-left">
            Authentiek Afghaanse catering
          </h2>
        </div>

        <div className="flex flex-col h-[calc(100%-6rem)]">
          <nav className="mt-8">
            {items.map((item, index) => (
              <SlideMenuItem 
                key={item.id}
                item={item}
                onClose={onClose}
                isExpanded={expandedItemId === item.id}
                onToggle={() => handleToggle(item.id)}
                isLast={index === items.length - 1}
              />
            ))}
          </nav>
          <div className="mt-6">
            <ContactButtons />
          </div>
        </div>
      </div>
    </>
  );
}
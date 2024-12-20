import React from 'react';
import type { MenuItem } from '../lib/graphql/types/menu';

interface MainMenuProps {
  items: MenuItem[];
}

const MENU_VISIBILITY_CLASSES = "hidden md:flex"; // Hidden on mobile (<768px), flex on medium screens and up

export function MainMenu({ items }: MainMenuProps) {
  return (
    <nav className={MENU_VISIBILITY_CLASSES}>
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <a
            href={item.url}
            className="text-white hover:text-tertiary font-medium transition-colors px-4"
          >
            {item.label}
          </a>
          {index < items.length - 1 && (
            <div className="w-px h-6 bg-quaternary self-center" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
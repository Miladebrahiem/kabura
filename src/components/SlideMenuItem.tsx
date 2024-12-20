import React from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import type { MenuItem } from '../lib/graphql/types/menu';

interface SlideMenuItemProps {
  item: MenuItem;
  onClose: () => void;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}

export function SlideMenuItem({ 
  item, 
  onClose, 
  isExpanded, 
  onToggle,
  isLast
}: SlideMenuItemProps) {
  const hasChildren = item.childItems?.nodes.length > 0;

  if (!hasChildren) {
    return (
      <a
        href={item.url}
        className={`block px-6 py-3 text-white hover:bg-secondary transition-colors ${!isLast ? 'border-b border-quaternary' : ''}`}
        onClick={onClose}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className={!isLast ? 'border-b border-quaternary' : ''}>
      <button
        className="w-full px-6 py-3 flex items-center justify-between text-white hover:bg-secondary transition-colors"
        onClick={onToggle}
      >
        <span>{item.label}</span>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {isExpanded && (
        <div className="bg-tertiary">
          {item.childItems.nodes.map((child) => (
            <a
              key={child.id}
              href={child.url}
              className="block px-6 py-2 text-sm text-white hover:bg-secondary transition-colors pl-8 flex items-center justify-between"
              onClick={onClose}
            >
              {child.label}
              <ChevronRight className="h-4 w-4 text-white" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
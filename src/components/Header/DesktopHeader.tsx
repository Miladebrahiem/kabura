import React from 'react';
import { Mail } from 'lucide-react';
import { MainMenu } from '../MainMenu';
import { LogoWithSlogan } from '../Logo';
import { MenuButton } from './MenuButton';
import { CONTACT_LINKS } from '../../constants/links';
import type { MenuItem } from '../../lib/graphql/types/menu';

interface DesktopHeaderProps {
  footerMenuItems: MenuItem[];
  error: string | null;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export function DesktopHeader({ 
  footerMenuItems, 
  error, 
  isMenuOpen, 
  onMenuToggle 
}: DesktopHeaderProps) {
  return (
    <div className="hidden md:grid grid-cols-[300px,1fr,auto] items-start gap-8 py-4">
      <LogoWithSlogan className="h-20 w-auto" />
      <div className="flex justify-center self-center">
        {error ? (
          <p className="text-white">{error}</p>
        ) : (
          <MainMenu items={footerMenuItems} />
        )}
      </div>

      <div className="flex items-center space-x-4 self-center">
        <a
          href={CONTACT_LINKS.contact}
          className="flex items-center space-x-3 bg-quaternary px-4 py-3 rounded-full text-white hover:bg-opacity-90 transition-colors"
        >
          <span className="font-medium">Contact</span>
          <Mail className="h-8 w-8" />
        </a>
        <MenuButton isOpen={isMenuOpen} onClick={onMenuToggle} />
      </div>
    </div>
  );
}
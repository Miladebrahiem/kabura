import React, { useEffect, useState } from 'react';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import { SlideMenu } from '../SlideMenu';
import { HeaderBorder } from '../HeaderBorder';
import { getFooterMenu, getMainMenu } from '../../lib/api/menu';
import type { MenuItem } from '../../lib/graphql/types/menu';

export function Header() {
  const [footerMenuItems, setFooterMenuItems] = useState<MenuItem[]>([]);
  const [mainMenuItems, setMainMenuItems] = useState<MenuItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const [footer, main] = await Promise.all([
          getFooterMenu(),
          getMainMenu()
        ]);
        setFooterMenuItems(footer);
        setMainMenuItems(main);
      } catch (err) {
        setError('Failed to load menus');
        console.error('Error loading menus:', err);
      }
    };

    fetchMenus();
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-primary shadow-md">
        <div className="container mx-auto px-4 py-4">
          <DesktopHeader
            footerMenuItems={footerMenuItems}
            error={error}
            isMenuOpen={isMenuOpen}
            onMenuToggle={handleMenuToggle}
          />
          <MobileHeader
            isMenuOpen={isMenuOpen}
            onMenuToggle={handleMenuToggle}
          />
        </div>

        <SlideMenu 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          items={mainMenuItems}
        />
      </header>
      <HeaderBorder />
    </>
  );
}
import React, { useEffect, useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { MainMenu } from './MainMenu';
import { SlideMenu } from './SlideMenu';
import { HeaderBorder } from './HeaderBorder';
import { Logo } from './Logo';
import { getFooterMenu, getMainMenu } from '../lib/api/menu';
import type { MenuItem } from '../lib/graphql/types/menu';

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

  return (
    <>
      <header className="bg-primary shadow-md">
        <div className="container mx-auto px-4 py-4">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-[auto,1fr,auto] items-center gap-8">
            <Logo />
            <div className="flex justify-center">
              {error ? (
                <p className="text-white">{error}</p>
              ) : (
                <MainMenu items={footerMenuItems} />
              )}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="mailto:info@kabura.nl"
                className="flex items-center space-x-3 bg-quaternary px-4 py-3 rounded-full text-white hover:bg-opacity-90 transition-colors"
              >
                <span className="font-medium">Contact</span>
                <Mail className="h-8 w-8" />
              </a>

              <button 
                className="relative flex items-center space-x-3 bg-white px-4 py-3 rounded-full hover:bg-gray-100 transition-colors z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <>
                    <span className="text-primary font-medium">Sluiten</span>
                    <X className="h-5 w-5 text-primary" />
                  </>
                ) : (
                  <>
                    <span className="text-tertiary font-medium">Ontdek ons</span>
                    <Menu className="h-8 w-8 text-tertiary" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            <div className="flex justify-start">
              <Logo className="h-20 w-auto" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-white text-lg font-medium text-center">
                Authentiek Afghaanse Catering
              </h2>
              <button 
                className="relative flex items-center space-x-3 bg-white px-4 py-3 rounded-full hover:bg-gray-100 transition-colors z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <>
                    <span className="text-primary font-medium">Sluiten</span>
                    <X className="h-5 w-5 text-primary" />
                  </>
                ) : (
                  <>
                    <span className="text-tertiary font-medium">Ontdek ons</span>
                    <Menu className="h-8 w-8 text-tertiary" />
                  </>
                )}
              </button>
            </div>
          </div>
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
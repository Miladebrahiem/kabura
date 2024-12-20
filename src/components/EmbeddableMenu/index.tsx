import React, { useState } from 'react';
import { X, Phone, MessageCircle, BookOpen } from 'lucide-react';

const CONTACT_LINKS = {
  whatsapp: 'https://wa.me/31852129942',
  phone: 'tel:+31852129942',
  quote: 'https://kabura.nl/offerte-aanvragen/'
};

export function KaburaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-5 right-5 bg-white px-4 py-2 rounded-full shadow-lg z-50 hover:bg-gray-50 transition-colors"
      >
        Menu
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu */}
      <div className={`fixed top-0 right-0 w-[300px] h-full bg-[#80232A] p-6 transform transition-transform duration-300 ease-in-out z-[9999] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X />
        </button>

        <div className="text-center mb-8">
          <img 
            src="http://kabura.nl/wp-content/uploads/2024/10/Kabura-catering-logo.jpg"
            alt="Kabura"
            className="w-40 mx-auto mb-4"
          />
          <h3 className="text-white text-lg">Authentiek Afghaanse catering</h3>
        </div>

        <div className="space-y-3">
          <a
            href={CONTACT_LINKS.whatsapp}
            className="flex items-center justify-between w-full px-4 py-3 bg-[#3499A3] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-3">
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </div>
          </a>

          <a
            href={CONTACT_LINKS.phone}
            className="flex items-center justify-between w-full px-4 py-3 bg-[#222F52] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-3">
              <Phone size={20} />
              <span>Bel ons</span>
            </div>
          </a>

          <a
            href={CONTACT_LINKS.quote}
            className="flex items-center justify-between w-full px-4 py-3 bg-[#94731A] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-3">
              <BookOpen size={20} />
              <span>Offerte aanvragen</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
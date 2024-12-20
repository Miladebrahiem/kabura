import React from 'react';
import { ArrowRight, Phone, MessageCircle, BookOpen } from 'lucide-react';
import { CONTACT_LINKS } from '../constants/links';

export function ContactButtons() {
  return (
    <div className="p-3 space-y-2">
      <a
        href={CONTACT_LINKS.whatsapp}
        className="flex items-center justify-between w-full px-4 py-2 bg-tertiary text-white rounded-lg hover:bg-opacity-90 transition-all group"
      >
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-full">
            <MessageCircle className="h-4 w-4 text-tertiary" />
          </div>
          <span className="font-medium">WhatsApp</span>
        </div>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>

      <a
        href={CONTACT_LINKS.phone}
        className="flex items-center justify-between w-full px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-all group"
      >
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-full">
            <Phone className="h-4 w-4 text-secondary" />
          </div>
          <span className="font-medium">Bel ons</span>
        </div>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>

      <a
        href={CONTACT_LINKS.quote}
        className="flex items-center justify-between w-full px-4 py-2 bg-quaternary text-white rounded-lg hover:bg-opacity-90 transition-all group"
      >
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-full">
            <BookOpen className="h-4 w-4 text-quaternary" />
          </div>
          <span className="font-medium">Offerte aanvragen</span>
        </div>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
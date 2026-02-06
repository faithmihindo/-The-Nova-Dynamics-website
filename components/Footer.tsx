
import React from 'react';
import { BUSINESS_NAME, BUSINESS_ADDRESS, BUSINESS_EMAIL } from '../constants.tsx';
import { Page } from '../types.ts';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-xl font-bold mb-4">{BUSINESS_NAME}</h3>
          <p className="max-w-sm mb-6">
            Pioneering excellence through innovation and dedicated client service. Your partner in digital transformation.
          </p>
          <div className="flex space-x-4">
            {/* Social Placeholders */}
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><button onClick={() => onPageChange(Page.Home)} className="hover:text-white">Home</button></li>
            <li><button onClick={() => onPageChange(Page.Services)} className="hover:text-white">Services</button></li>
            <li><button onClick={() => onPageChange(Page.Contact)} className="hover:text-white">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="mr-2">📍</span>
              {BUSINESS_ADDRESS}
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span>
              {BUSINESS_EMAIL}
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

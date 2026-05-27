import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative z-10 grid grid-cols-12 px-4 md:px-8 py-12 border-t border-black">
      <div className="col-span-12 md:col-span-8">
        <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-gray-400 mb-4">Contact / Collab</p>
        <a href="mailto:contact.ducnv@gmail.com" className="text-4xl md:text-6xl font-black uppercase hover:text-[#FF0000] transition-colors tracking-tighter">
          contact.ducnv@gmail.com
        </a>
      </div>
      <div className="col-span-12 md:col-span-4 flex flex-col justify-end items-start md:items-end mt-12 md:mt-0">
        <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-gray-400">Built with Next.js 15</p>
        <p className="text-[11px] font-mono tracking-[0.2em] uppercase">© 2026 Nguyễn Văn Đức</p>
      </div>
    </footer>
  );
};

import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="relative z-10 grid grid-cols-1 md:grid-cols-12 border-b border-black px-4 md:px-8">
      {/* Status Section */}
      <div className="md:col-span-6 py-4 border-b md:border-b-0 md:border-r border-black flex items-center">
        <Link href="/" className="flex items-center gap-2 group overflow-hidden">
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.15em] md:tracking-[0.2em] uppercase whitespace-nowrap">Status: </span>
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.15em] md:tracking-[0.2em] uppercase text-[#FF0000] animate-pulse whitespace-nowrap">● Available for Projects</span>
        </Link>
      </div>
      
      {/* Meta & Links Section */}
      <div className="md:col-span-6 py-3 md:py-4 flex flex-row justify-between items-center md:pl-8 gap-2 md:gap-4 overflow-hidden">
        <span className="text-[10px] md:text-[11px] font-mono tracking-[0.15em] md:tracking-[0.2em] uppercase leading-none opacity-60 md:opacity-100 whitespace-nowrap">Indie Dev / 26</span>
        <div className="flex gap-3 md:gap-4">
          <a href="https://github.com/dducnv" target="_blank" className="text-[10px] md:text-[11px] font-mono tracking-[0.15em] md:tracking-[0.2em] uppercase hover:text-[#FF0000] transition-colors whitespace-nowrap">GitHub</a>
          <a href="https://linkedin.com/in/ducnv0712" target="_blank" className="text-[10px] md:text-[11px] font-mono tracking-[0.15em] md:tracking-[0.2em] uppercase hover:text-[#FF0000] transition-colors whitespace-nowrap">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

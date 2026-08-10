import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-6 gap-4">
      {/* Status Section */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-70">
          <span className="text-sm font-medium tracking-tight text-zinc-900">Nguyễn Văn Đức</span>
          <span className="text-zinc-300 mx-2">/</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-medium tracking-tight text-zinc-500">Available for work</span>
          </div>
        </Link>
      </div>
      
      {/* Meta & Links Section */}
      <div className="flex items-center gap-6">
        <span className="text-sm font-medium tracking-tight text-zinc-400 hidden md:block">Indie Dev &copy; 2026</span>
        <div className="flex gap-4">
          <a href="https://github.com/dducnv" target="_blank" className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/ducnv0712" target="_blank" className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

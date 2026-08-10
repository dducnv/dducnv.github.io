import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-12 py-16 mt-12 gap-12">
      <div>
        <p className="text-sm font-medium tracking-tight text-zinc-400 mb-2">Get in touch</p>
        <a href="mailto:contact.ducnv@gmail.com" className="text-3xl md:text-5xl font-light tracking-tight text-zinc-900 hover:text-zinc-500 transition-colors">
          contact.ducnv@gmail.com
        </a>
      </div>
      <div className="flex flex-col items-start md:items-end gap-1">
        <p className="text-sm font-medium tracking-tight text-zinc-400">Built with Next.js 15</p>
        <p className="text-sm font-medium tracking-tight text-zinc-500">© 2026 Nguyễn Văn Đức</p>
      </div>
    </footer>
  );
};

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Navbar, Footer } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow w-full">
        {/* --- SECTION 1: HERO & IDENTITY --- */}
        <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 border-b border-black w-full">
          {/* Manifesto */}
          <div className="md:col-span-8 p-4 md:p-8 border-b md:border-b-0 md:border-r border-black overflow-hidden">
            <h1 className="text-[clamp(2.5rem,12vw,8rem)] font-black uppercase leading-[0.85] md:leading-[0.82] tracking-[-0.04em] md:tracking-[-0.05em] mb-8 md:mb-12">
              Indie <br /> Developer <br />
              <span className="text-[#FF0000]">//</span> Building <br />
              Digital <br /> Architecture.
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 md:pt-8 border-t border-black">
              <div>
                <p className="text-base md:text-lg font-bold uppercase leading-tight mb-3 md:mb-4 tracking-tighter">Mission Statement</p>
                <p className="text-gray-600 text-sm max-w-sm leading-relaxed text-left">
                  Xin chào! Tôi là Đức. Hiện tại, tôi là lập trình viên phát triển ứng dụng di động chuyên về Flutter.
                  Thiết kế của tôi tập trung vào sự tối giản và hiệu năng cao.
                </p>
              </div>
              <div className="space-y-2">
                <span className="block text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-gray-400">Core Expertise</span>
                <ul className="text-xs md:text-sm font-bold uppercase tracking-tight grid grid-cols-2 sm:grid-cols-1 gap-1">
                  <li>Flutter / Dart</li>
                  <li>Next.js / TS</li>
                  <li>Flame Engine</li>
                  <li>Security</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Identity Metadata */}
          <div className="md:col-span-4 p-4 md:p-8 flex flex-col justify-between space-y-8 md:space-y-12 overflow-hidden">
            <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] md:max-w-none mx-auto md:mx-0 bg-gray-100 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden border border-black">
              <Image
                src="/avatar.jpg"
                alt="Nguyễn Văn Đức"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="border-t border-black pt-4">
                <span className="block text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-gray-400 mb-1">Identity</span>
                <p className="text-xl md:text-2xl font-black uppercase leading-none tracking-tight">Nguyễn Văn Đức</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                <div className="border-t border-black pt-4 md:border-none md:pt-0">
                  <span className="block text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-gray-400 mb-1">System 2026</span>
                  <p className="text-xs md:text-sm font-bold uppercase leading-none">Vietnam</p>
                </div>
                <div className="border-t border-black pt-4 md:border-none md:pt-0">
                  <span className="block text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-gray-400 mb-1">Experience</span>
                  <p className="text-xs md:text-sm font-bold uppercase leading-none">02 Years</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: SELECTED WORKS --- */}
        <section className="relative z-10 border-b border-black w-full overflow-hidden">
          <div className="p-4 md:p-8 border-b border-black">
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-[#FF0000]">Index 00 — Selected Works</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Project 01: Tessera */}
            <div className="group border-b border-black md:border-r p-4 md:p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300">
              <div>
                <span className="text-4xl md:text-6xl font-black tracking-tighter mb-4 block group-hover:text-[#FF0000]">01</span>
                <h3 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter mb-4 md:mb-6">Tessera Arcade</h3>
                <p className="text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-md opacity-80">
                  Dự án game Arcade lấy cảm hứng từ xếp gạch cổ điển. 
                  Xây dựng tuyển tập game dựa trên cơ chế tương tác khối.
                </p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  {['Flutter', 'Flame', 'Game'].map(tag => (
                    <span key={tag} className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase border border-current px-2 py-1">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://play.google.com/store/apps/details?id=com.duc_innolab.game.tetrafall" className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-tighter border-b border-current pb-1 w-fit transition-all hover:text-[#FF0000]">Play Store <ArrowUpRight size={14}/></a>
                  <a href="https://apps.apple.com/vn/app/tessera-block-puzzle-game/id6758011076" className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-tighter border-b border-current pb-1 w-fit transition-all hover:text-[#FF0000]">App Store <ArrowUpRight size={14}/></a>
                </div>
              </div>
            </div>

            {/* Project 02: Modipix */}
            <a href="https://modipix.app" target="_blank" className="group border-b border-black p-4 md:p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300">
              <div>
                <span className="text-4xl md:text-6xl font-black tracking-tighter mb-4 block group-hover:text-[#FF0000]">02</span>
                <h3 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter mb-4 md:mb-6">Modipix</h3>
                <p className="text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-md opacity-80">
                  Công cụ biên tập ảnh mạnh mẽ với khả năng xử lý LUT chuyên nghiệp. 
                  Tùy biến bố cục, watermark tự động và mở rộng viền thông minh.
                </p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  {['Flutter', 'Image', 'LUT'].map(tag => (
                    <span key={tag} className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase border border-current px-2 py-1">{tag}</span>
                  ))}
                </div>
                <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-tighter border-b border-current pb-1 w-fit transition-all group-hover:text-[#FF0000]">Launch App <ArrowUpRight size={14}/></span>
              </div>
            </a>

            {/* Project 03: CyberSafe */}
            <a href="https://github.com/dducnv/cybersafe_pro" target="_blank" className="group border-b border-black md:border-b-0 md:border-r p-4 md:p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300">
              <div>
                <span className="text-4xl md:text-6xl font-black tracking-tighter mb-4 block group-hover:text-[#FF0000]">03</span>
                <h3 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter mb-4 md:mb-6">CyberSafe</h3>
                <p className="text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-md opacity-80">
                  Trình quản lý mật khẩu Offline-first. Mã hóa AES-256 cục bộ với Argon2id. 
                  Bảo mật tuyệt đối, loại bỏ hoàn toàn phụ thuộc máy chủ.
                </p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  {['Flutter', 'Security', 'SQL'].map(tag => (
                    <span key={tag} className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase border border-current px-2 py-1">{tag}</span>
                  ))}
                </div>
                <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-tighter border-b border-current pb-1 w-fit transition-all group-hover:text-[#FF0000]">View Source <ArrowUpRight size={14}/></span>
              </div>
            </a>

            {/* Project 04: Battleship */}
            <div className="group border-t border-black p-4 md:p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300">
              <div>
                <span className="text-4xl md:text-6xl font-black tracking-tighter mb-4 block group-hover:text-[#FF0000]">04</span>
                <h3 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter mb-4 md:mb-6">Battleship</h3>
                <p className="text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-md opacity-80">
                  Bắn tàu kinh điển phong cách hiện đại. 
                  Dàn trận kéo-thả và chiến đấu thời gian thực cực mượt trên Next.js 15.
                </p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  {['Next.js 15', 'Supabase', 'Game'].map(tag => (
                    <span key={tag} className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase border border-current px-2 py-1">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://battleship-p2p.vercel.app" target="_blank" className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-tighter border-b border-current pb-1 w-fit transition-all hover:text-[#FF0000]">Join Battle <ArrowUpRight size={14}/></a>
                  <a href="https://github.com/dducnv/battleship" target="_blank" className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-tighter border-b border-current pb-1 w-fit transition-all hover:text-[#FF0000]">View Source <ArrowUpRight size={14}/></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

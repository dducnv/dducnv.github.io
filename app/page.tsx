import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Navbar, Footer } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-grow w-full px-6 md:px-12">
        {/* --- SECTION 1: HERO & IDENTITY --- */}
        <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 py-16 md:py-24 border-b border-zinc-100">
          {/* Manifesto */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-light leading-[1.1] tracking-tight text-zinc-900 mb-12">
              Indie developer <br />
              <span className="text-zinc-300">/</span> building <br />
              digital architecture.
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 md:pt-12">
              <div>
                <p className="text-sm font-medium tracking-tight text-zinc-400 mb-4">Mission statement</p>
                <p className="text-zinc-600 text-base max-w-sm leading-relaxed">
                  Xin chào! Tôi là Đức. Hiện tại, tôi là lập trình viên phát triển ứng dụng di động chuyên về Flutter.
                  Thiết kế của tôi tập trung vào sự tối giản và hiệu năng cao.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium tracking-tight text-zinc-400 mb-4">Core expertise</p>
                <ul className="text-base text-zinc-800 font-medium tracking-tight space-y-2">
                  <li>Flutter / Dart</li>
                  <li>Next.js / TS</li>
                  <li>Flame Engine</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Identity Metadata */}
          <div className="lg:col-span-4 flex flex-col space-y-12 justify-center">
            <div className="relative aspect-square w-full max-w-[280px] lg:max-w-none bg-zinc-50 overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="Nguyễn Văn Đức"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
              <div>
                <p className="text-sm font-medium tracking-tight text-zinc-400 mb-1">System 2026</p>
                <p className="text-base font-medium text-zinc-800 tracking-tight">Vietnam</p>
              </div>
              <div>
                <p className="text-sm font-medium tracking-tight text-zinc-400 mb-1">Experience</p>
                <p className="text-base font-medium text-zinc-800 tracking-tight">02 Years</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: SELECTED WORKS --- */}
        <section className="relative z-10 py-16 md:py-24">
          <div className="mb-16">
            <h2 className="text-sm font-medium tracking-tight text-zinc-400">Selected works</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
            {/* Project 01: Tessera */}
            <div className="group flex flex-col">
              <span className="text-sm font-light text-zinc-400 mb-6 block">01</span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900 mb-4 group-hover:text-zinc-500 transition-colors">Tessera Arcade</h3>
              <p className="text-base text-zinc-600 leading-relaxed mb-8 max-w-md">
                Dự án game Arcade lấy cảm hứng từ xếp gạch cổ điển.
                Xây dựng tuyển tập game dựa trên cơ chế tương tác khối.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Flutter', 'Flame', 'Game'].map(tag => (
                    <span key={tag} className="text-xs font-medium text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="https://play.google.com/store/apps/details?id=com.duc_innolab.game.tetrafall" className="flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-900 hover:text-zinc-500 transition-colors">Play Store <ArrowUpRight size={16} className="text-zinc-400" /></a>
                  <a href="https://apps.apple.com/vn/app/tessera-block-puzzle-game/id6758011076" className="flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-900 hover:text-zinc-500 transition-colors">App Store <ArrowUpRight size={16} className="text-zinc-400" /></a>
                </div>
              </div>
            </div>

            {/* Project 02: Modipix */}
            <div className="group flex flex-col">
              <span className="text-sm font-light text-zinc-400 mb-6 block">02</span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900 mb-4 group-hover:text-zinc-500 transition-colors">Modipix</h3>
              <p className="text-base text-zinc-600 leading-relaxed mb-8 max-w-md">
                Công cụ biên tập ảnh mạnh mẽ với khả năng xử lý LUT chuyên nghiệp.
                Tùy biến bố cục, watermark tự động và mở rộng viền thông minh.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Flutter', 'Image', 'LUT'].map(tag => (
                    <span key={tag} className="text-xs font-medium text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <a href="https://modipix.app" target="_blank" className="flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-900 hover:text-zinc-500 transition-colors w-fit">Launch App <ArrowUpRight size={16} className="text-zinc-400" /></a>
              </div>
            </div>

            {/* Project 03: CyberSafe */}
            <div className="group flex flex-col">
              <span className="text-sm font-light text-zinc-400 mb-6 block">03</span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900 mb-4 group-hover:text-zinc-500 transition-colors">CyberSafe</h3>
              <p className="text-base text-zinc-600 leading-relaxed mb-8 max-w-md">
                Trình quản lý mật khẩu Offline-first. Mã hóa AES-256 cục bộ với Argon2id.
                Bảo mật tuyệt đối, loại bỏ hoàn toàn phụ thuộc máy chủ.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Flutter', 'Security', 'SQL'].map(tag => (
                    <span key={tag} className="text-xs font-medium text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <a href="https://github.com/dducnv/cybersafe_pro" target="_blank" className="flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-900 hover:text-zinc-500 transition-colors w-fit">View Source <ArrowUpRight size={16} className="text-zinc-400" /></a>
              </div>
            </div>

            {/* Project 04: Battleship */}
            <div className="group flex flex-col">
              <span className="text-sm font-light text-zinc-400 mb-6 block">04</span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900 mb-4 group-hover:text-zinc-500 transition-colors">Battleship</h3>
              <p className="text-base text-zinc-600 leading-relaxed mb-8 max-w-md">
                Bắn tàu kinh điển phong cách hiện đại.
                Dàn trận kéo-thả và chiến đấu thời gian thực cực mượt trên Next.js 15.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Next.js 15', 'Supabase', 'Game'].map(tag => (
                    <span key={tag} className="text-xs font-medium text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="https://battleship-p2p.vercel.app" target="_blank" className="flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-900 hover:text-zinc-500 transition-colors">Join Battle <ArrowUpRight size={16} className="text-zinc-400" /></a>
                  <a href="https://github.com/dducnv/battleship" target="_blank" className="flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-900 hover:text-zinc-500 transition-colors">View Source <ArrowUpRight size={16} className="text-zinc-400" /></a>
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

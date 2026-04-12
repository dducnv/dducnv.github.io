import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 font-sans selection:bg-gray-200 selection:text-black">

      <div className="m-auto max-w-3xl p-6 md:p-0 lg:pt-10">

        {/* --- HEADER --- */}
        <header className=" mb-14 animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-8 items-start animate">
            {/* Avatar */}
            <div className="w-20 h-20  md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
              <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-full overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/avatar.jpg"
                  className="object-cover"
                  alt="Nguyễn Văn Đức"
                  fill
                  priority
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  Nguyễn Văn Đức
                </h1>
                <p className="text-gray-500 text-lg">
                  Mobile App Developer
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-500 mt-2">
                  <a href="https://linkedin.com/in/ducnv0712" target="_blank" className="hover:text-black transition-colors flex items-center gap-1 group">
                    LinkedIn
                  </a>
                  <span className="text-gray-300">/</span>
                  <a href="https://github.com/dducnv" target="_blank" className="hover:text-black transition-colors flex items-center gap-1 group">
                    GitHub
                  </a>
                  <span className="text-gray-300">/</span>
                  <a href="mailto:contact.ducnv@gmail.com" className="hover:text-black transition-colors flex items-center gap-1 group">
                    Email
                  </a>
                </div>
              </div>


            </div>
          </div>
          <div className='mt-3'>
            {/* Links Group: Social & Store Profiles */}
            <div className="flex flex-col gap-2 pt-2 animate mb-4">
              {/* Row 1: Social */}


              {/* Row 2: Developer Profiles (All Apps) */}
              <div className="text-sm font-medium text-gray-500 mt-3 animate">
                <span className="text-gray-700">Indie Developer</span>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <a href="https://play.google.com/store/apps/dev?id=6805050269655315622" target="_blank" className="hover:text-gray-600 transition-colors flex items-center gap-1 group">
                    <img src="/icon/android_logo.svg" alt="" className='w-6 h-6 mr-1' />
                    Google Play
                  </a>
                  <span className="text-gray-300">/</span>
                  <a href="https://apps.apple.com/vn/developer/duc-nguyen/id1870248816" target="_blank" className="hover:text-gray-600 transition-colors flex items-center gap-1 group">
                    <img src="/icon/apple_logo.svg" alt="" className='w-5 h-5 mr-1 object-contain' />
                    App Store
                  </a>
                </div>
              </div>
            </div>
            {/* Bio */}
            <div className="text-gray-600 leading-relaxed text-[15px] animate">
              <p>
                Xin chào! Tôi là Đức. Hiện tại, tôi là lập trình viên phát triển ứng dụng di động chuyên về Flutter.
                Tôi đã tốt nghiệp FPT Aptech và tiếp tục theo học tại PTIT.
                Ngoài code, tôi là một DIYer tìm hiểu về các thiết bị điện tử, thích chụp ảnh phong cảnh và nghe nhạc Rock.
              </p>
            </div>



          </div>
        </header>

        {/* --- PROJECTS --- */}
        <section className="animate-fade-in-up ">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2 animate">
            Projects
          </h2>

          <div className="space-y-10">

            {/* === TESSERA (Main) === */}
            <div className="group animate">
              <h3 className="text-xl font-bold text-gray-900">
                Tessera Arcade
              </h3>
              <p className="text-gray-600 mb-2 leading-relaxed max-w-xl">
                Dự án game Arcade lấy cảm hứng từ xếp gạch cổ điển, mở rộng với nhiều chế độ chơi sáng tạo. Mục tiêu xây dựng một tuyển tập game đa dạng dựa trên cơ chế tương tác với các khối (blocks).
              </p>

              <div className="flex gap-2 text-[10px] text-gray-400 uppercase font-medium tracking-wide mb-4">
                <span>Flutter</span>
                <span>/</span>
                <span>Flame</span>
                <span>/</span>
                <span>Game</span>
              </div>

              {/* Minimal Store Buttons for this specific app */}
              <div className="flex gap-3 mt-4">
                {/* Google Play - Active */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.duc_innolab.game.tetrafall"
                  target="_blank"
                  className="group px-4 py-2 bg-transparent border border-gray-300 text-gray-700 text-xs font-medium rounded-full 
               hover:bg-black hover:text-white hover:border-black transition-all duration-300 flex items-center gap-2"
                >
                  {/* Bạn có thể thay text này bằng Icon Android nếu muốn */}
                  <span>Get on Google Play</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>

                {/* App Store - Coming Soon State */}
                <a
                  href="https://apps.apple.com/vn/app/tessera-block-puzzle-game/id6758011076"
                  target="_blank"
                  className="group px-4 py-2 bg-transparent border border-gray-300 text-gray-700 text-xs font-medium rounded-full 
               hover:bg-black hover:text-white hover:border-black transition-all duration-300 flex items-center gap-2"
                >
                  {/* Bạn có thể thay text này bằng Icon Android nếu muốn */}
                  <span>Get on App Store</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>

              </div>
            </div>


            {/* === MODIPIX === */}
            <a
              href="/modipix"
              target="_blank"
              className="group block animate"
            >
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                  Modipix
                </h3>
                <ArrowUpRight size={18} className="text-gray-300 group-hover:text-gray-600 transition-colors group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-200" />
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Công cụ biên tập ảnh di động mạnh mẽ, nổi bật với khả năng xử lý LUT (Look-Up Table) để chỉnh màu chuyên nghiệp. Ứng dụng cung cấp bộ công cụ tùy biến bố cục linh hoạt: bo góc, tạo khung watermark tự động và mở rộng viền ảnh thông minh.              </p>
              <div className="flex gap-2 text-[10px] text-gray-400 uppercase font-medium tracking-wide">
                <span>Flutter</span>
                <span>/</span>
                <span>Image Processing</span>
              </div>
            </a>

            {/* === CYBERSAFE === */}
            <a
              href="/cybersafe"
              className="group block animate"
            >
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                  CyberSafe
                </h3>
                <ArrowUpRight size={18} className="text-gray-300 group-hover:text-gray-600 transition-colors group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-200" />
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Trình quản lý mật khẩu Offline-first an toàn tuyệt đối. Sử dụng SQLite và SQLCipher để mã hóa dữ liệu cục bộ (AES-256). Tăng cường bảo mật khóa với thuật toán Argon2id, loại bỏ hoàn toàn phụ thuộc vào máy chủ.
              </p>
              <div className="flex gap-2 text-[10px] text-gray-400 uppercase font-medium tracking-wide">
                <span>Flutter</span>
                <span>/</span>
                <span>Security</span>
                <span>/</span>
                <span>Local Auth</span>
              </div>
            </a>
            <div className="mt-8 text-center animate">
              <a href="https://tools4u.vercel.app/" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-gray-500 text-sm font-medium  hover:text-gray-900 transition-all">
                <Terminal size={14} />
                <span>Xem thêm các công cụ nhỏ tại 7TH.DEC</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
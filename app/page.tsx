import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200 selection:text-black">
      <div className="m-auto max-w-2xl p-6 md:p-12 lg:pt-20">

        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row gap-8 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative shrink-0">
            {/* Avatar: Quay về tròn đơn giản, clean nhất */}
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

          <div className="flex-1 space-y-3">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Nguyễn Văn Đức
              </h1>
              <p className="text-gray-500 text-lg">
                Mobile App Developer
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
              <Link
                href="https://play.google.com/store/apps/dev?id=6805050269655315622"
                target="_blank"
                className="hover:text-black transition-colors underline underline-offset-4"
              >
                Founder @ Duc&apos;s Innovation Lab, Ind.
              </Link>
              <span className="text-gray-300">/</span>
              <Link href="https://github.com/dducnv" target="_blank" className="hover:text-black transition-colors flex items-center gap-1">
                GitHub
              </Link>
              <span className="text-gray-300">/</span>
              <Link href="mailto:contact.ducnv@gmail.com" className="hover:text-black transition-colors flex items-center gap-1">
                Email
              </Link>
            </div>
          </div>
        </header>

        {/* --- ABOUT --- */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          <div className="prose prose-neutral prose-p:text-gray-600 prose-a:no-underline max-w-none">
            <p className="animate">
              Xin chào! Tôi là Đức, một lập trình viên đam mê công nghệ. Hiện tại, tôi tập trung phát triển ứng dụng di động với Flutter và không ngừng học hỏi. Tôi đã tốt nghiệp FPT Aptech và đang theo học tại PTIT.
            </p>
            <p className="animate">
              Ngoài code, tôi là một DIYer, thích chụp ảnh phong cảnh và nghe nhạc Rock.
            </p>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Projects</h2>

          <div className="grid gap-4">

            {/* === FEATURED PROJECT: TESSERA === */}
            {/* Design: Nổi bật hơn nhờ background trắng và shadow nhẹ */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.duc_innolab.game.tetrafall"
              target="_blank"
              className="group relative block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-gray-400 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Tessera
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 text-[10px] font-bold uppercase tracking-wide border border-pink-100">
                    New
                  </span>
                </div>
                {/* Arrow Icon */}
                <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Game xếp gạch cổ điển với tư duy thiết kế hiện đại. Tập trung vào trải nghiệm người dùng mượt mà (smooth UX), tối ưu hiệu năng và phong cách visual tối giản.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">Flutter</span>
                <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">Flame Engine</span>
              </div>
            </Link>


            {/* === OTHER PROJECTS === */}
            {/* Design: Grid 2 cột cho các dự án phụ để cân đối layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Modipix */}
              <Link
                href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.pic_trim_app"
                target="_blank"
                className="group p-5 rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-black">Modipix</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  Chỉnh ảnh Aesthetic với bộ lọc 3D LUT và Film simulation.
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>Flutter</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>Image Processing</span>
                </div>
              </Link>

              {/* CyberSafe */}
              <Link
                href="/cybersafe"
                className="group p-5 rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-black">CyberSafe</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  Quản lý mật khẩu Offline-first. Mã hóa AES-256 bảo mật tuyệt đối.
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>Security</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>Local Auth</span>
                </div>
              </Link>

            </div>

            {/* Side Projects Link */}
            <div className="mt-2 text-center md:text-left">
              <Link href="https://tools4u.vercel.app/" target="_blank" className="text-sm text-gray-400 hover:text-gray-600 transition-colors inline-flex items-center gap-1">
                Xem thêm các công cụ nhỏ tại 7TH.DEC &rarr;
              </Link>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
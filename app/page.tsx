import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-100">
      <div className="mx-auto max-w-2xl px-6 py-12 md:py-20">

        {/* --- HEADER & INTRO --- */}
        <header className="mb-12 flex flex-col-reverse gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-black mb-2">
              Nguyễn Văn Đức
            </h1>

            {/* Highlight vị trí Founder */}
            <p className="text-lg font-medium text-gray-800 mb-1">
              Founder <Link href="https://play.google.com/store/apps/dev?id=6805050269655315622" target="_blank" className="font-semibold hover:text-gray-900 transition-colors">Duc&apos;s Innovation Lab, Ind.</Link>
            </p>
            <p className="text-gray-500 mb-6">Mobile App Developer</p>

            <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-3">
              <p>
                Xin chào! Tôi là Đức, một lập trình viên đam mê công nghệ. Hiện tại, tôi tập trung phát triển ứng dụng di động với Flutter và không ngừng học hỏi. Tôi đã tốt nghiệp FPT Aptech và đang theo học tại PTIT.
              </p>
              <p>
                Ngoài code, tôi là một DIYer, thích chụp ảnh phong cảnh và nghe nhạc Rock.
              </p>
            </div>
          </div>

          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border border-gray-100 bg-gray-50">
            {/* Bạn nhớ giữ file avatar.jpg trong folder public nhé */}
            <Image
              src="/avatar.jpg"
              alt="Nguyễn Văn Đức"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* --- PROJECTS SECTION --- */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-black mb-6">
            Dự án nổi bật
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">

            {/* Project 1: Modipix */}
            <ProjectCard
              title="Modipix"
              tag="Flutter"
              desc="App chỉnh ảnh aesthetic với 3D LUT, filter film & retro."
              href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.pic_trim_app"
            >
              <div className="flex gap-3 mt-3 text-xs text-gray-400">
                <Link href="/modipix/terms-of-service" className="hover:text-gray-900 transition-colors">Terms</Link>
                <Link href="/modipix/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy</Link>
              </div>
            </ProjectCard>

            {/* Project 2: CyberSafe */}
            <ProjectCard
              title="CyberSafe"
              tag="Flutter"
              desc="Trình quản lý mật khẩu ngoại tuyến an toàn và bảo mật."
              href="/cybersafe"
            >
              <div className="flex gap-3 mt-3 text-xs text-gray-400">
                <Link href="/cybersafe/en/terms-of-service" className="hover:text-gray-900 transition-colors">Terms</Link>
                <Link href="https://github.com/dducnv/cybersafe_pro" target="_blank" className="hover:text-gray-900 transition-colors">GitHub</Link>
              </div>
            </ProjectCard>

            {/* Project 3: 7TH.DEC */}
            <ProjectCard
              title="7TH.DEC"
              tag="Web Tool"
              desc="Công cụ cá nhân siêu tuyệt vời =))"
              href="https://tools4u.vercel.app/"
            />

          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-20 border-t border-gray-100 pt-6 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Duc&apos;s Innovation Lab, Ind.</p>
        </footer>
      </div>
    </main>
  );
}

// Component nhỏ để tái sử dụng card dự án cho gọn code
function ProjectCard({ title, tag, desc, href, children }: { title: string, tag: string, desc: string, href: string, children?: React.ReactNode }) {
  return (
    <div className="group relative flex flex-col rounded-lg border border-gray-200 bg-white p-4 transition-all hover:bg-gray-50">
      <div className="flex items-center justify-between mb-2">
        <Link href={href} target="_blank" className="font-semibold text-gray-900 after:absolute after:inset-0">
          {title}
        </Link>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
          {tag}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-auto">{desc}</p>
      {/* Nút con (Links phụ) cần z-index cao hơn để bấm được khi card có after:inset-0 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
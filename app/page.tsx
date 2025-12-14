import Image from "next/image";
import Link from "next/link";

// Nếu bạn đã cài lucide-react thì import, không thì dùng text hoặc svg thường
// import { Github, Mail } from "lucide-react"; 

export default function Home() {
  return (
    <>
      <div className="m-auto max-w-3xl p-4 md:p-6 md:pt-12">

        {/* --- HEADER ĐÃ NÂNG CẤP --- */}
        <div className="flex items-start md:items-center gap-6 mb-10 animate">
          {/* Avatar: Thêm viền và bóng nhẹ để nổi khối */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-full overflow-hidden border-4 border-white shadow-sm ring-1 ring-gray-100">
              <Image
                src="/avatar.jpg"
                className="object-cover"
                alt="Nguyễn Văn Đức"
                fill
                priority
              />
            </div>
            {/* Dot trạng thái (Tuỳ chọn): Báo hiệu đang active */}
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
          </div>

          <div className="flex-1 space-y-2">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight leading-none mb-1">
                Nguyễn Văn Đức
              </h1>
              <p className="text-gray-500 font-medium animate">Mobile App Developer</p>
            </div>

            {/* Dòng Founder: Làm thành dạng Badge (Thẻ) */}
            <div className="flex flex-wrap items-center gap-2 text-sm animate">
              <span className="text-gray-400">Founder @</span>
              <Link
                href="https://play.google.com/store/apps/dev?id=6805050269655315622"
                target="_blank"
                className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition-colors border border-blue-100"
              >
                Duc&apos;s Innovation Lab, Ind.
              </Link>
            </div>

            {/* Social Links: Thêm vào để tăng tính kết nối */}
            <div className="flex items-center gap-4 text-sm font-medium text-gray-500 pt-1 animate">
              <Link href="https://github.com/dducnv" target="_blank" className="hover:text-black transition-colors flex items-center gap-1">
                {/* Icon Github SVG nhỏ gọn */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="mailto:contact.ducnv@gmail.com" className="hover:text-black transition-colors flex items-center gap-1">
                {/* Icon Mail SVG nhỏ gọn */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                Email Me
              </Link>
            </div>
          </div>
        </div>

        {/* About (Giữ nguyên) */}
        <div className="mb-8">
          <div className="prose prose-gray max-w-none text-gray-600 text-sm md:text-base leading-relaxed space-y-3">
            <p className="animate">
              Xin chào! Tôi là Đức, một lập trình viên đam mê công nghệ. Hiện tại, tôi tập trung phát triển ứng dụng di động với Flutter và không ngừng học hỏi. Tôi đã tốt nghiệp FPT Aptech và đang theo học tại PTIT.
            </p>
            <p className="animate">
              Ngoài code, tôi là một DIYer, thích chụp ảnh phong cảnh và nghe nhạc Rock.
            </p>
          </div>
        </div>

        {/* Projects (Giữ nguyên layout cũ của bạn) */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 animate" >Dự án</h2>

          <div className="space-y-3">
            {/* Modipix */}
            <div className="border-l-2 border-gray-200 pl-4 py-2 animate group hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Link href={"https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.pic_trim_app"} target={"_blank"} className="font-medium text-gray-900 hover:text-blue-600">
                  Modipix
                </Link>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">Flutter</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">App chỉnh ảnh aesthetic với 3D LUT, filter film & retro.</p>
              <div className="flex gap-3 text-xs">
                <Link href={"/modipix/terms-of-service"} target={"_blank"} className="text-gray-400 hover:text-gray-900">
                  Terms
                </Link>
                <Link href={"/modipix/privacy-policy"} target={"_blank"} className="text-gray-400 hover:text-gray-900">
                  Privacy
                </Link>
              </div>
            </div>

            {/* CyberSafe */}
            <div className="border-l-2 border-gray-200 pl-4 py-2 animate group hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Link href={"/cybersafe"} target={"_blank"} className="font-medium text-gray-900 hover:text-blue-600">
                  CyberSafe
                </Link>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">Flutter</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Trình quản lý mật khẩu ngoại tuyến an toàn và bảo mật.</p>
              <div className="flex gap-3 text-xs">
                <Link href={"/cybersafe/en/terms-of-service"} target={"_blank"} className="text-gray-400 hover:text-gray-900">
                  Terms
                </Link>
                <Link href={"https://github.com/dducnv/cybersafe_pro"} target={"_blank"} className="text-gray-400 hover:text-gray-900">
                  GitHub
                </Link>
              </div>
            </div>

            {/* 7TH.DEC */}
            <div className="border-l-2 border-gray-200 pl-4 py-2 animate group hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Link href={"https://tools4u.vercel.app/"} target={"_blank"} className="font-medium text-gray-900 hover:text-blue-600">
                  7TH.DEC
                </Link>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">Web</span>
              </div>
              <p className="text-sm text-gray-600">Công cụ siêu tuyệt vời =))</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
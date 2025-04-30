
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Star } from 'lucide-react'
export async function generateMetadata() {
  return {
    title: "CyberSafe | Ứng Dụng Quản Lý Mật Khẩu Ngoại Tuyến",
    description: "Lưu trữ và quản lý mật khẩu của bạn một cách an toàn mà không cần internet. Toàn quyền kiểm soát. Không đám mây. Không trực tuyến.",
    keywords: "CyberSafe, Quản Lý Mật Khẩu Ngoại Tuyến, Bảo Mật Dữ Liệu, Mã Hóa",
    author: "Duc's Innovation Lab, Ind.",
  };
}
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6">
        <Image
          src="/cybersafe.png"
          alt="Biểu tượng CyberSafe"
          width={80}
          height={80}
          className="rounded-xl mb-4 shadow-md"
        />
        <h1 className="text-3xl font-extrabold tracking-tight font-mono text-gray-900 break-words">
          CyberSafe <br />Quản lý mật khẩu ngoại tuyến
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          Lưu trữ và quản lý mật khẩu của bạn một cách an toàn mà không cần internet.
          <br />
          Toàn quyền kiểm soát. Không đám mây. Không trực tuyến.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cybersafe_lmt" className="flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-100 transition">
            <ShieldCheck className="w-5 h-5" />
            Phiên bản miễn phí
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cyber_safe" className="flex items-center gap-2 px-5 py-3 bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition font-semibold shadow-md">
            <Star className="w-5 h-5" />
            Phiên bản Pro
          </Link>
        </div>

        {/* Chính sách */}
        <div className="mt-4 text-sm text-gray-500 flex gap-4">
          <Link href="/cybersafe/vi/privacy-policy" className="hover:underline">
            Chính sách quyền riêng tư
          </Link>
          <Link href="/cybersafe/vi/terms-of-service" className="hover:underline">
            Điều khoản sử dụng
          </Link>
        </div>
      </header>

      {/* Tính năng nổi bật */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Tính năng nổi bật</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🔐 Hoạt động 100% ngoại tuyến</h3>
              <p className="text-gray-600 text-sm">
                CyberSafe hoạt động hoàn toàn không cần internet. Dữ liệu của bạn không bao giờ rời khỏi thiết bị.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🛡️ Mã hóa AES-256</h3>
              <p className="text-gray-600 text-sm">
                Dữ liệu được mã hóa tại chỗ bằng AES-256 cấp quân sự — bao gồm mật khẩu và mã OTP.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🔑 Khóa mã hóa riêng biệt</h3>
              <p className="text-gray-600 text-sm">
                Mỗi cài đặt tạo một khóa mã hóa duy nhất. Dữ liệu chỉ mở được trên thiết bị của bạn.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🚫 Không tích hợp bên thứ ba</h3>
              <p className="text-gray-600 text-sm">
                Không phân tích, không quảng cáo, không theo dõi. CyberSafe hoàn toàn khép kín.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🧱 Chống tấn công mạng</h3>
              <p className="text-gray-600 text-sm">
                Thiết kế không kết nối mạng giúp giảm thiểu rủi ro từ phishing, keylogger và brute-force.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🙅 Không thu thập dữ liệu</h3>
              <p className="text-gray-600 text-sm">
                CyberSafe không thu thập bất kỳ thông tin nào từ bạn. Không email. Không tài khoản. Chỉ bạn và dữ liệu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

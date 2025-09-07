import { Database, Download, Eye, Github, Key, Lock, Shield, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "CyberSafe | Ứng Dụng Quản Lý Mật Khẩu Ngoại Tuyến",
    description: "Lưu trữ và quản lý mật khẩu của bạn một cách an toàn mà không cần internet. Toàn quyền kiểm soát. Không đám mây. Không trực tuyến.",
    keywords: "CyberSafe, Quản Lý Mật Khẩu Ngoại Tuyến, Bảo Mật Dữ Liệu, Mã Hóa, AES-256, SQLCipher, Argon2id",
    author: "Duc's Innovation Lab, Ind.",
  };
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="relative">
          <Image
            src="/cybersafe.png"
            alt="Biểu tượng CyberSafe"
            width={100}
            height={100}
            className="rounded-2xl mb-6 shadow-lg border-4 border-gray-200"
          />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          CyberSafe
        </h1>
        <h2 className="text-xl text-gray-600 mb-6 font-medium">
          Trình quản lý mật khẩu ngoại tuyến mã nguồn mở
        </h2>

        <p className="text-gray-600 max-w-2xl leading-relaxed mb-8">
          Lưu trữ và quản lý mật khẩu của bạn một cách an toàn mà không cần internet.
          <br />
          <strong>Toàn quyền kiểm soát. Không đám mây. Không trực tuyến.</strong>
        </p>

        {/* Download Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link
            href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cybersafe_lmt"
            className="flex items-center gap-3 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
          >
            <ShieldCheck className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Phiên bản miễn phí</div>
              <div className="text-xs text-gray-500">Limited Edition</div>
            </div>
          </Link>

          <Link
            href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cyber_safe"
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 font-semibold shadow-lg"
          >
            <Star className="w-5 h-5" />
            <div className="text-left">
              <div className="font-bold">Phiên bản Pro</div>
              <div className="text-xs text-gray-700">Full Features</div>
            </div>
          </Link>
        </div>

        {/* Open Source Badge */}
        <div className="flex items-center gap-2 mb-6">
          <Github className="w-5 h-5 text-gray-600" />
          <Link
            href="https://github.com/dducnv/cybersafe_pro"
            target="_blank"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Mã nguồn mở trên GitHub
          </Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500">
          <Link href="/cybersafe/vi/privacy-policy" className="hover:text-blue-600 transition-colors">
            Chính sách quyền riêng tư
          </Link>
          <Link href="/cybersafe/vi/terms-of-service" className="hover:text-blue-600 transition-colors">
            Điều khoản sử dụng
          </Link>
        </div>
      </header>

      {/* Security Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bảo mật cấp quân sự</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CyberSafe sử dụng các thuật toán mã hóa tiên tiến nhất để bảo vệ dữ liệu của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AES-256 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">AES-256</h3>
                  <p className="text-sm text-gray-600">Mã hóa cấp quân sự</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dữ liệu được mã hóa bằng thuật toán AES-256 - tiêu chuẩn mã hóa được sử dụng bởi các tổ chức chính phủ và quân đội.
              </p>
            </div>

            {/* SQLCipher */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">SQLCipher</h3>
                  <p className="text-sm text-gray-600">Cơ sở dữ liệu mã hóa</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Cơ sở dữ liệu SQLite được mã hóa bằng SQLCipher, đảm bảo toàn bộ dữ liệu được bảo vệ ngay cả khi file bị truy cập trái phép.
              </p>
            </div>

            {/* Argon2id */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Argon2id</h3>
                  <p className="text-sm text-gray-600">Hash mật khẩu an toàn</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Sử dụng Argon2id - thuật toán hash mật khẩu được khuyến nghị bởi các chuyên gia bảo mật, chống lại các cuộc tấn công brute-force.
              </p>
            </div>

            {/* Offline Operation */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">100% Ngoại tuyến</h3>
                  <p className="text-sm text-gray-600">Không cần internet</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Hoạt động hoàn toàn ngoại tuyến. Dữ liệu của bạn không bao giờ rời khỏi thiết bị, loại bỏ hoàn toàn rủi ro bị tấn công mạng.
              </p>
            </div>

            {/* Device-Specific Keys */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Khóa riêng biệt</h3>
                  <p className="text-sm text-gray-600">Mỗi thiết bị một khóa</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Mỗi thiết bị được tạo một khóa mã hóa duy nhất. Dữ liệu chỉ có thể được truy cập trên thiết bị mà nó được tạo.
              </p>
            </div>

            {/* Backup Security */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Sao lưu an toàn</h3>
                  <p className="text-sm text-gray-600">Bảo vệ bằng PIN</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                File sao lưu được mã hóa với mật khẩu do bạn đặt. Có thể lưu trữ trên Google Drive với mã hóa kép.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h2>
            <p className="text-gray-600">
              Tất cả những gì bạn cần để quản lý mật khẩu một cách an toàn
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Lưu trữ thông tin tài khoản</h3>
                  <p className="text-sm text-gray-600">Mật khẩu, mã 2FA, ghi chú riêng tư được mã hóa an toàn</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Khóa ứng dụng</h3>
                  <p className="text-sm text-gray-600">Bảo vệ bằng mã PIN và sinh trắc học</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Tự động khóa</h3>
                  <p className="text-sm text-gray-600">Tự động khóa ứng dụng khi không sử dụng</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Giao diện hiện đại</h3>
                  <p className="text-sm text-gray-600">Thiết kế đẹp mắt, dễ sử dụng</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Không thu thập dữ liệu</h3>
                  <p className="text-sm text-gray-600">Không phân tích, không quảng cáo, không theo dõi</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Chống tấn công mạng</h3>
                  <p className="text-sm text-gray-600">Thiết kế không kết nối mạng giảm thiểu rủi ro</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sao lưu Google Drive</h3>
                  <p className="text-sm text-gray-600">Đồng bộ sao lưu lên Google Drive với mã hóa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Mã nguồn mở</h3>
                  <p className="text-sm text-gray-600">Kiểm tra và đóng góp vào mã nguồn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Bắt đầu bảo vệ mật khẩu của bạn ngay hôm nay</h2>
          <p className="text-xl mb-8 opacity-90">
            Tải xuống CyberSafe và trải nghiệm sự an toàn tuyệt đối
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cybersafe_lmt"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Tải miễn phí
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cyber_safe"
              className="px-8 py-4 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 transition-colors"
            >
              Mua Pro
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
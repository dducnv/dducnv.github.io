import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="m-auto max-w-3xl p-4 md:p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 animate">
          <div className="w-16 h-16 relative rounded-full overflow-hidden">
            <Image
              src="/avatar.jpg"
              className="object-cover"
              alt="Picture of the author"
              fill
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Nguyễn Văn Đức</h1>
            <p className="text-gray-600">Mobile App Developer</p>
          </div>
        </div>

        {/* About */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4 animate">
            Xin chào! Tôi là Đức, một lập trình viên trẻ đam mê công nghệ. Hiện tại, tôi là nhà phát triển ứng dụng sử dụng Flutter và không ngừng học hỏi để nâng cao kỹ năng. Tôi đã tốt nghiệp FPT Aptech và đang tiếp tục theo học tại PTIT.
          </p>
          <p className="text-gray-700 leading-relaxed animate">
            Ngoài lập trình, tôi yêu thích các thiết bị điện tử, đam mê làm các sản phẩm D.I.Y, chụp ảnh phong cảnh và thưởng thức nhạc Rock.
          </p>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 animate" >Dự án</h2>

          <div className="space-y-3">
            {/* PicTrim */}
            <div className="border-l-2 border-gray-200 pl-4 py-2 animate">
              <div className="flex items-center gap-2 mb-1">
                <Link href={"https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.pic_trim_app"} target={"_blank"} className="font-medium text-gray-900 hover:text-blue-600">
                  PicTrim
                </Link>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Flutter</span>
              </div>
              <p className="text-sm text-gray-600">Ứng dụng chỉnh sửa ảnh với các tính năng làm tròn góc, thêm viền trắng, đổ bóng.</p>
            </div>

            {/* CyberSafe */}
            <div className="border-l-2 border-gray-200 pl-4 py-2 animate">
              <div className="flex items-center gap-2 mb-1">
                <Link href={"/cybersafe"} target={"_blank"} className="font-medium text-gray-900 hover:text-blue-600">
                  CyberSafe
                </Link>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Flutter</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Trình quản lý mật khẩu ngoại tuyến an toàn và bảo mật.</p>
              <div className="flex gap-3 text-xs">
                <Link href={"/cybersafe/en/terms-of-service"} target={"_blank"} className="text-gray-500 hover:text-blue-600">
                  Terms of Service
                </Link>
                <Link href={"/cybersafe/en/privacy-policy"} target={"_blank"} className="text-gray-500 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* 7TH.DEC */}
            <div className="border-l-2 border-gray-200 pl-4 py-2 animate">
              <div className="flex items-center gap-2 mb-1">
                <Link href={"/congcu"} target={"_blank"} className="font-medium text-gray-900 hover:text-blue-600">
                  7TH.DEC
                </Link>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Web</span>
              </div>
              <p className="text-sm text-gray-600">Công cụ siêu tuyệt vời =))</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
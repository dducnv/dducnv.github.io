import Link from 'next/link';
export async function generateMetadata() {
  return {
    title: "Chính Sách Bảo Mật - CyberSafe | Ứng Dụng Quản Lý Mật Khẩu Ngoại Tuyến",
    description: "Tìm hiểu về Chính Sách Bảo Mật của CyberSafe, ứng dụng quản lý mật khẩu ngoại tuyến. Khám phá cách chúng tôi bảo vệ dữ liệu và đảm bảo quyền riêng tư của bạn.",
    keywords: "Chính Sách Bảo Mật, CyberSafe, Quản Lý Mật Khẩu Ngoại Tuyến, Bảo Mật Dữ Liệu, Mã Hóa",
    author: "Duc's Innovation Lab, Ind.",
  };
}
const page = () => {
  return (
    <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5">
      <h1>CHÍNH SÁCH BẢO MẬT</h1>
      <h2>CyberSafe - Ứng dụng Quản Lý Mật Khẩu Ngoại Tuyến</h2>
      <h3>Duc&lsquo;s Innovation Lab, Ind.</h3>
      <p>
        <strong>Cập Nhật Lần Cuối:</strong> 3 tháng 4, 2025
      </p>
      <hr />
      <div className="section animate">
        <h2>1. GIỚI THIỆU</h2>
        <p>
          Tại Duc&lsquo;s Innovation Lab, Ind., chúng tôi cam kết bảo vệ quyền riêng tư và bảo mật thông tin của bạn. CyberSafe là một ứng dụng quản lý mật khẩu ngoại tuyến, được thiết kế để đảm bảo rằng dữ liệu của bạn luôn được bảo vệ, không lo lộ dữ liệu do vi phạm bảo mật của các dịch vụ trực tuyến, không dễ bị đánh cắp qua các cuộc tấn công mạng như phishing, keylogger hay brute-force, và không kết nối với máy chủ, không yêu cầu đồng bộ đám mây. CyberSafe giúp bạn kiểm soát hoàn toàn thông tin mà không lo bị thu thập dữ liệu hay theo dõi.
        </p>
      </div>
      <hr />
      <div className="section animate">
        <h2>2. THÔNG TIN CHÚNG TÔI KHÔNG THU THẬP</h2>
        <p>
          CyberSafe hoạt động hoàn toàn <strong>ngoại tuyến</strong>. Điều này có nghĩa là:
        </p>
        <ul>
          <li>
            <strong>
              Chúng tôi không thu thập, lưu trữ hoặc truyền bất kỳ dữ liệu cá nhân, mật khẩu hoặc thông tin nhạy cảm nào của bạn.
            </strong>
          </li>
          <li>
            Tất cả dữ liệu được lưu trữ cục bộ trên thiết bị của bạn và không thể truy cập bởi chúng tôi hoặc bất kỳ bên thứ ba nào.
          </li>
        </ul>
      </div>
      <hr />
      <div className="section animate">
        <h2>3. BẢO MẬT DỮ LIỆU</h2>
        <h3>3.1. Lưu trữ cục bộ</h3>
        <ul>
          <li>
            Dữ liệu của bạn được mã hóa và lưu trữ cục bộ trên thiết bị của bạn bằng các thuật toán mã hóa tiên tiến như <strong>AES-256</strong>.
          </li>
          <li>
            Các khóa mã hóa được tạo và quản lý trên thiết bị của bạn, đảm bảo rằng không ai ngoài bạn có thể truy cập dữ liệu.
          </li>
        </ul>
        <h3>3.2. Khóa mã hóa duy nhất cho từng thiết bị</h3>
        <ul>
          <li>
            Mỗi thiết bị sẽ được tạo một <strong>khóa mã hóa duy nhất</strong> khi bạn thiết lập ứng dụng lần đầu.
          </li>
          <li>
            Khóa mã hóa này không được chia sẻ giữa các thiết bị và không thể sao chép.
          </li>
          <li>
            Điều này đảm bảo rằng dữ liệu của bạn chỉ có thể được truy cập trên thiết bị mà nó được tạo.
          </li>
        </ul>
        <h3>3.3. Mã hóa thông tin</h3>
        <ul>
          <li>
            <strong>Mật khẩu, TOTP, và thông tin cá nhân</strong> được mã hóa bằng các khóa mã hóa duy nhất cho từng loại dữ liệu.
          </li>
          <li>
            Các thao tác mã hóa và giải mã được thực hiện cục bộ trên thiết bị của bạn.
          </li>
        </ul>
        <h3>3.4. Sao lưu & Khôi phục dữ liệu</h3>
        <ul>
          <li>
            <strong>Sao lưu dữ liệu:</strong>
            <p>Các tệp sao lưu được mã hóa bằng khóa ứng dụng kết hợp với mật khẩu do bạn thiết lập. Việc mã hóa đảm bảo chỉ có bạn mới có thể truy cập và giải mã nội dung sao lưu.</p>
          </li>
          <li>
            <strong>Khôi phục dữ liệu:</strong>
            <p>Để khôi phục, bạn phải cung cấp mật khẩu đã dùng khi tạo tệp sao lưu để tiến hành giải mã. Nếu mật khẩu bị quên, tệp sao lưu sẽ không thể được phục hồi.</p>
          </li>
          <li>
            <strong>Sao lưu lên Google Drive:</strong>
            <p>Nếu bạn chọn lưu trữ trên Google Drive, tệp sao lưu vẫn được mã hóa theo cùng cơ chế như sao lưu cục bộ. Tệp sao lưu được ẩn trong Google Drive và chỉ có thể mở bằng ứng dụng.</p>
          </li>
          <li>
            <strong>Khôi phục từ Google Drive:</strong>
            <p>Tệp sao lưu lưu trên Google Drive cần mật khẩu của bạn để giải mã giống như tệp sao lưu cục bộ. Trong trường hợp quên mật khẩu, dữ liệu sẽ không thể truy cập được.</p>
          </li>
          <li>
            <strong>Quy trình thực hiện:</strong>
            <p>Tất cả thao tác sao lưu và khôi phục đều do bạn chủ động thực hiện. Ứng dụng không thực hiện sao lưu hoặc khôi phục tự động nếu bạn không kích hoạt hoặc cho phép thao tác đó.</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="section animate">
        <h2>4. TÍNH NĂNG BẢO MẬT</h2>
        <h3>4.1. Quản lý mật khẩu ngoại tuyến</h3>
        <ul>
          <li>CyberSafe không yêu cầu kết nối internet để hoạt động.</li>
          <li>
            Dữ liệu của bạn không bao giờ được tải lên máy chủ hoặc chia sẻ với bên thứ ba.
          </li>
        </ul>
        <h3>4.2. Mã hóa TOTP và mật khẩu</h3>
        <ul>
          <li>
            TOTP (Time-based One-Time Password) và mật khẩu được mã hóa bằng các thuật toán tiên tiến.
          </li>
          <li>Chỉ bạn mới có thể giải mã và sử dụng dữ liệu này.</li>
        </ul>
      </div>
      <hr />
      <div className="section animate">
        <h2>5. DỊCH VỤ BÊN THỨ BA</h2>
        <p>
          CyberSafe không tích hợp với bất kỳ dịch vụ bên thứ ba nào. Dữ liệu của bạn không bao giờ được chia sẻ hoặc truyền ra ngoài thiết bị của bạn.
        </p>
      </div>
      <hr />
      <div className="section animate">
        <h2>6. THAY ĐỔI CHÍNH SÁCH BẢO MẬT</h2>
        <p>
          Chúng tôi có thể cập nhật Chính Sách Bảo Mật này theo thời gian. Chúng tôi sẽ đăng bất kỳ thay đổi nào trên trang này và cập nhật ngày &ldquo;Cập Nhật Lần Cuối&ldquo;. Việc bạn tiếp tục sử dụng CyberSafe sau bất kỳ thay đổi nào cho thấy bạn chấp nhận Chính Sách Bảo Mật mới.
        </p>
      </div>
      <hr />
      <div className="section animate">
        <h2>7. LIÊN HỆ VỚI CHÚNG TÔI</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về Chính Sách Bảo Mật này, vui lòng liên hệ với chúng tôi tại:
        </p>
        <p>
          <strong>Duc&apos;s Innovation Lab, Ind.</strong>
        </p>
        <p>
          <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">
            contact.ducnv@gmail.com
          </Link>
        </p>
        <p>Cảm ơn bạn đã sử dụng CyberSafe!</p>
      </div>
    </div>
  )
}

export default page
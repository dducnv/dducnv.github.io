import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "Điều Khoản Dịch Vụ - CyberSafe | Ứng Dụng Quản Lý Mật Khẩu Ngoại Tuyến",
    description: "Tìm hiểu về Điều Khoản Dịch Vụ của CyberSafe, ứng dụng quản lý mật khẩu ngoại tuyến. Khám phá các quyền và trách nhiệm của bạn khi sử dụng ứng dụng.",
    keywords: "Điều Khoản Dịch Vụ, CyberSafe, Quản Lý Mật Khẩu Ngoại Tuyến, Bảo Mật Dữ Liệu, Mã Hóa",
    author: "Duc's Innovation Lab, Ind.",
  };
}

const page = () => {
  return (
    <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5">
      <h1 className="animate">Điều Khoản Dịch Vụ</h1>
      <h2 className="animate">CyberSafe - Ứng Dụng Quản Lý Mật Khẩu Ngoại Tuyến</h2>
      <p className="animate"><strong>Duc&lsquo;s Innovation Lab, Ind.</strong></p>
      <p className="animate"><strong>Cập Nhật Lần Cuối:</strong> 3 tháng 4, 2025</p>
      <hr />

      <div className="section animate">
        <h2>1. Giới Thiệu</h2>
        <p>Chào mừng bạn đến với CyberSafe! Bằng cách sử dụng ứng dụng của chúng tôi, bạn đồng ý tuân thủ các Điều Khoản Dịch Vụ này. Vui lòng đọc kỹ trước khi sử dụng.</p>
        <p>CyberSafe là một ứng dụng quản lý mật khẩu ngoại tuyến, được thiết kế để bảo vệ dữ liệu của bạn bằng các công nghệ mã hóa tiên tiến.</p>
      </div>

      <hr />

      <div className="section animate">
        <h2>2. Quyền Và Trách Nhiệm Của Người Dùng</h2>
        <ul>
          <li>Bạn chịu trách nhiệm bảo vệ thiết bị của mình và dữ liệu được lưu trữ trong ứng dụng.</li>
          <li>Bạn đồng ý không sử dụng ứng dụng cho các mục đích bất hợp pháp hoặc trái phép.</li>
          <li>Bạn chịu trách nhiệm ghi nhớ mã PIN hoặc thông tin xác thực sinh trắc học. Nếu bạn quên mã PIN hoặc mất quyền truy cập vào thiết bị, dữ liệu của bạn sẽ không thể khôi phục.</li>
          <li>Bạn không được sao chép, sửa đổi hoặc phân phối bất kỳ phần nào của ứng dụng mà không có sự đồng ý bằng văn bản từ Duc&lsquo;s Innovation Lab, Ind.</li>
        </ul>
      </div>

      <hr />

      <div className="section animate">
        <h2>3. Giới Hạn Trách Nhiệm</h2>
        <ul>
          <li>CyberSafe được cung cấp &quot;như hiện trạng&quot; mà không có bất kỳ bảo đảm nào, dù rõ ràng hay ngụ ý.</li>
          <li>Duc&apos;s Innovation Lab, Ind. không chịu trách nhiệm cho bất kỳ mất mát dữ liệu, truy cập trái phép, hoặc vi phạm bảo mật nào do:
            <ul>
              <li>Thiết bị bị mất hoặc bị đánh cắp.</li>
              <li>Sử dụng trên các thiết bị đã root (Android) hoặc jailbreak (iOS).</li>
              <li>Sự bất cẩn của người dùng hoặc không tuân thủ các hướng dẫn bảo mật.</li>
            </ul>
          </li>
        </ul>
      </div>

      <hr />

      <div className="section animate">
        <h2>4. Quyền Sở Hữu Trí Tuệ</h2>
        <ul>
          <li>Tất cả các quyền sở hữu trí tuệ liên quan đến CyberSafe, bao gồm nhưng không giới hạn ở thiết kế ứng dụng, mã nguồn và thương hiệu, thuộc sở hữu của Duc&apos;s Innovation Lab, Ind.</li>
          <li>Bạn không được sao chép, sửa đổi hoặc phân phối bất kỳ phần nào của ứng dụng mà không có sự đồng ý bằng văn bản từ chúng tôi.</li>
        </ul>
      </div>

      <hr />

      <div className="section animate">
        <h2>5. Chính Sách Bảo Mật</h2>
        <p>Quyền riêng tư của bạn là ưu tiên hàng đầu của chúng tôi. Vui lòng tham khảo <Link href="/cybersafe/vi/privacy-policy">Chính Sách Bảo Mật</Link> để biết thêm chi tiết về cách chúng tôi xử lý dữ liệu của bạn.</p>
      </div>

      <hr />

      <div className="section animate">
        <h2>6. Cập Nhật Và Thay Đổi</h2>
        <ul>
          <li>Chúng tôi có quyền cập nhật hoặc thay đổi các Điều Khoản Dịch Vụ này bất kỳ lúc nào. Các thay đổi sẽ được đăng trên trang này cùng với ngày &quot;Cập Nhật Lần Cuối&quot;.</li>
          <li>Việc bạn tiếp tục sử dụng CyberSafe sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các Điều Khoản Dịch Vụ mới.</li>
        </ul>
      </div>
      <hr />
      <div className="section animate">
        <h2>7. Dịch vụ bên thứ ba</h2>
        <p>CyberSafe có thể tích hợp với các dịch vụ bên thứ ba như Google Drive để thực hiện sao lưu và khôi phục dữ liệu. Việc bạn sử dụng Google Drive sẽ tuân theo <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Chính sách quyền riêng tư của Google</a> và các điều khoản liên quan của Google. Chúng tôi khuyến khích bạn đọc kỹ các chính sách này trước khi sử dụng.</p>
      </div>

      <hr />

      <div className="section animate">
        <h2>8. Liên Hệ</h2>
        <p>Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về các Điều Khoản Dịch Vụ này, vui lòng liên hệ với chúng tôi tại:</p>
        <p><strong>Duc&apos;s Innovation Lab, Ind.</strong></p>
        <p><Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link></p>
      </div>

      <p>Cảm ơn bạn đã sử dụng CyberSafe!</p>
    </div>
  )
}

export default page
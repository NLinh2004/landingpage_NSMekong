import { motion } from "framer-motion";

export default function TargetAudience() {
  const sellerValues = [
    {
      title: 'Mô hình "Bán trước - Sản xuất sau"',
      description: "Nhận đơn hàng và yêu cầu từ người mua nước ngoài trước khi thu hoạch, giúp chủ động nguồn cung, tránh tình trạng sản xuất dư thừa và bị ép giá sau thu hoạch."
    },
    {
      title: 'Cơ chế "Đấu thầu kín" công bằng',
      description: "Tự do chào giá cạnh tranh. Hệ thống khóa thông tin báo giá của đối thủ, thiết lập chống tình trạng bán phá giá và ép giá từ bên mua."
    },
    {
      title: 'Tối ưu hóa lợi nhuận',
      description: "Loại bỏ hoàn toàn các tầng lớp 'cò lái' trung gian, kết nối trực tiếp chuỗi: Người mua – Doanh nghiệp thu mua – Nông dân."
    },
    {
      title: 'Hồ sơ số chuyên nghiệp',
      description: "Dễ dàng số hóa và trưng bày các chứng nhận uy tín (VietGAP, GlobalGAP, OCOP, VSATTP) để tăng lợi thế cạnh tranh xuất khẩu."
    }
  ];

  const buyerValues = [
    {
      title: "Minh bạch & Chuẩn ngạch 100%",
      description: "Dữ liệu nông sản được chuẩn hóa thông tin vùng trồng, mùa vụ. Số hóa mã số vùng trồng/đóng gói đáp ứng khắt khe lệnh tiêu chuẩn xuất khẩu (Lệnh 248, 249 của GACC)."
    },
    {
      title: "Đấu thầu tìm giá tối ưu",
      description: "Người mua chỉ đưa ra yêu cầu (sản phẩm, số lượng, tiêu chuẩn, giá mục tiêu). Hệ thống tự động kết nối với nhóm cung cấp phù hợp nhất lấy báo giá."
    },
    {
      title: "Đa dạng nguồn cung",
      description: "Không phụ thuộc vào một nhà cung cấp đơn lẻ, nền tảng tập hợp hàng loạt doanh nghiệp và HTX, đảm bảo nguồn cung sản lượng lớn và ổn định."
    }
  ];

  return (
    <section id="audience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Hệ Sinh Thái B2B</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Giá trị thực mang lại cho mọi thành viên
          </h3>
          <p className="text-lg text-gray-600">
            Giải pháp chuyên biệt giải quyết triệt để bài toán cung cầu, mang lại lợi ích tối đa cho cả người mua quốc tế và nhà cung cấp Việt Nam.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Seller Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-green-900/5 border-t-8 border-primary"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">🌾</div>
              <h4 className="text-2xl font-bold text-gray-900">Tại sao Seller nên tham gia?</h4>
            </div>
            <div className="space-y-6">
              {sellerValues.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-primary mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Buyer Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-blue-900/5 border-t-8 border-blue-600"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">🌐</div>
              <h4 className="text-2xl font-bold text-gray-900">Tại sao Buyer nên chọn Mekong?</h4>
            </div>
            <div className="space-y-6">
              {buyerValues.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-blue-600 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

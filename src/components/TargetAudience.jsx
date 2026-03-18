import { motion } from "framer-motion";

export default function TargetAudience() {
  const sellerValues = [
    { icon: "📦", title: '"Bán trước – Sản xuất sau"', desc: "Nhận đơn trước thu hoạch, chủ động nguồn cung." },
    { icon: "🔐", title: 'Đấu thầu kín, công bằng', desc: "Hệ thống khóa giá đối thủ, chống ép giá." },
    { icon: "🔗", title: "Bỏ trung gian cò lái", desc: "Kết nối trực tiếp: Buyer → DN → Nông dân." },
    { icon: "📜", title: "Hồ sơ số chuyên nghiệp", desc: "VietGAP, GlobalGAP, OCOP, mã vùng trồng." }
  ];

  const buyerValues = [
    { icon: "✅", title: "Chuẩn ngạch GACC 100%", desc: "Đáp ứng Lệnh 248, 249 Hải quan TQ." },
    { icon: "🎯", title: "Đấu thầu tìm giá tối ưu", desc: "Đưa yêu cầu → nhận báo giá tự động." },
    { icon: "🏭", title: "Nguồn cung lớn & ổn định", desc: "Tập hợp DN, HTX toàn vùng ĐBSCL." },
    { icon: "🔍", title: "Truy xuất từ vườn", desc: "QR Code, nhật ký canh tác, kiểm dịch." }
  ];

  return (
    <section id="audience" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Lợi ích cho <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">mọi bên</span>
          </h3>
          <p className="text-gray-500">Nền tảng tối ưu cho cả nhà cung cấp Việt và người mua quốc tế.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Seller */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-gray-900/80 rounded-2xl p-7 border border-emerald-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-400"></div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🌾</span>
              <h4 className="text-lg font-bold text-white">Nhà Cung Cấp Việt Nam</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {sellerValues.map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-emerald-500/20 transition-colors">
                  <span className="text-lg">{item.icon}</span>
                  <h5 className="font-bold text-white text-sm mt-2 mb-1">{item.title}</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Buyer */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-gray-900/80 rounded-2xl p-7 border border-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🌐</span>
              <h4 className="text-lg font-bold text-white">Người Mua Quốc Tế</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {buyerValues.map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-blue-500/20 transition-colors">
                  <span className="text-lg">{item.icon}</span>
                  <h5 className="font-bold text-white text-sm mt-2 mb-1">{item.title}</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

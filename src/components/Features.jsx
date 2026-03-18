import { motion } from "framer-motion";

export default function Features() {
  const values = [
    {
      id: 1,
      title: "Gửi Yêu cầu báo giá (RFQ) thông minh",
      desc: "Trải nghiệm B2B chuyên nghiệp, cho phép người mua gửi yêu cầu báo giá chi tiết và đàm phán trực tiếp với người bán ngay trên hệ thống.",
      icon: "📋"
    },
    {
      id: 2,
      title: "Huy hiệu Doanh nghiệp đã xác thực",
      desc: "Hệ thống kiểm duyệt chặt chẽ bởi Admin đối với hồ sơ doanh nghiệp và sản phẩm. Chỉ đơn vị có giấy phép và chứng nhận hợp lệ mới được cấp quyền giao dịch.",
      icon: "🛡️"
    },
    {
      id: 3,
      title: "Không gian đấu thầu bảo mật",
      desc: "Giao dịch an toàn với thuật toán mã hóa hiện đại, đảm bảo tuyệt đối quyền lợi và sự riêng tư cho cả bên mua và bên bán trong quá trình thương lượng báo giá.",
      icon: "🔒"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Sticky Intro */}
          <div className="lg:w-1/3 lg:sticky top-32 self-start">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
              Tại sao chọn <br/>
              <span className="text-primary">Mekong Agri?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Chúng tôi không chỉ cung cấp nguyên liệu, chúng tôi mang tới một hệ sinh thái minh bạch và bền vững cho chuỗi cung ứng.
            </p>
            <motion.button 
              className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Tìm hiểu thêm về công nghệ
              <span>→</span>
            </motion.button>
          </div>

          {/* Right Side: Grid */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {values.map((v, index) => (
              <motion.div 
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border text-left border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
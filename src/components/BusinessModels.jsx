import { motion } from "framer-motion";

export default function BusinessModels() {
  const models = [
    {
      number: "01",
      title: "Đặt trước theo lô",
      subtitle: "Bán trước – Sản xuất sau",
      points: ["Hợp đồng & đặt cọc", "Thu mua theo đơn", "Kiểm định GACC", "Xuất khẩu chính ngạch"],
      gradient: "from-emerald-500 to-green-600",
      bg: "bg-emerald-50", border: "border-emerald-200",
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: "02",
      title: "Đấu thầu kín",
      subtitle: "Tìm giá tối ưu – Công bằng",
      points: ["NCC chào giá bảo mật", "Chấm điểm đa tiêu chí", "Hệ thống chọn tự động", "Chống ép giá"],
      gradient: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50", border: "border-blue-200",
      img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: "03",
      title: "Thị trường 3 chiều",
      subtitle: "Buyer – DN – Nông dân",
      points: ["Minh bạch cung cầu", "Nông dân biết thị trường", "GPS vùng trồng", "Giảm tồn kho"],
      gradient: "from-amber-500 to-orange-600",
      bg: "bg-amber-50", border: "border-amber-200",
      img: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="models" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            3 mô hình <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">linh hoạt</span>
          </h3>
          <p className="text-gray-500">Phù hợp từ container lớn đến lô thử nghiệm TMĐT.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={model.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group ${model.bg} rounded-2xl ${model.border} border overflow-hidden hover:shadow-2xl transition-all duration-400`}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img src={model.img} alt={model.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${model.gradient} text-white font-extrabold text-sm flex items-center justify-center shadow-lg`}>
                  {model.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-0.5">{model.title}</h4>
                <p className={`text-xs font-semibold bg-gradient-to-r ${model.gradient} bg-clip-text text-transparent mb-4`}>{model.subtitle}</p>

                <div className="space-y-2">
                  {model.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${model.gradient}`}></span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

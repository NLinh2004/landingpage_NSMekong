import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

const RICE_IMG = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80";
const FARM_IMG = "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=600&q=80";

export default function Features() {
  const features = [
    { title: "RFQ Thông Minh", desc: "Song ngữ Việt–Trung. Tự động kết nối NCC.", icon: "📋", color: "from-emerald-500 to-green-600" },
    { title: "Verified Supplier", desc: "Kiểm duyệt giấy phép, mã vùng trồng.", icon: "🛡️", color: "from-blue-500 to-indigo-600" },
    { title: "Đấu Thầu Bảo Mật", desc: "Khóa thông tin, chống ép giá.", icon: "🔒", color: "from-purple-500 to-violet-600" },
    { title: "Truy Xuất Nguồn Gốc", desc: "QR Code. GACC 248/249.", icon: "🔍", color: "from-amber-500 to-orange-600" }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={heroImg} alt="Vùng nguyên liệu Mekong" className="w-full h-[380px] object-cover" />
            </div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
              <p className="text-emerald-600 font-extrabold text-xl">ĐBSCL</p>
              <p className="text-gray-500 text-xs">Vùng thí điểm</p>
            </motion.div>
          </motion.div>

          {/* Right */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Tính năng <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">nổi bật</span>
              </h3>
              <p className="text-gray-500 mb-8">Số hóa toàn diện cho TMĐT nông sản.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg border border-gray-100 transition-all">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center text-xl mb-3 shadow-md`}>{f.icon}</div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
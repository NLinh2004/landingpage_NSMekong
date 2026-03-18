import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "14+", label: "Loại nông sản", sub: "xuất khẩu chính ngạch sang TQ", icon: "🌿" },
    { value: "3", label: "Mô hình giao dịch", sub: "Đặt trước · Đấu thầu · 3 chiều", icon: "⚡" },
    { value: "ĐBSCL", label: "Vùng thí điểm", sub: "Cần Thơ & các tỉnh lân cận", icon: "📍" }
  ];

  return (
    <section id="stats" className="relative bg-gray-950 py-8 -mt-1">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-2xl shadow-black/20 p-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-6 ${index < 2 ? 'md:border-r border-gray-700/50' : ''}`}
              >
                <div className="text-3xl">{stat.icon}</div>
                <div>
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-white font-semibold text-sm">{stat.label}</p>
                  <p className="text-gray-500 text-xs">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

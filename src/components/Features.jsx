import { motion } from "framer-motion";
import heroImg from "../assets/hero.png"; // đảm bảo đúng đường dẫn

export default function Features() {
  const features = [
    {
      title: "RFQ Thông Minh",
      desc: "Song ngữ Việt–Trung. Tự động kết nối NCC.",
      icon: "📋",
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "Verified Supplier",
      desc: "Kiểm duyệt giấy phép, mã vùng trồng.",
      icon: "🛡️",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Đấu Thầu Bảo Mật",
      desc: "Khóa thông tin, chống ép giá.",
      icon: "🔒",
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "Truy Xuất Nguồn Gốc",
      desc: "QR Code. GACC 248/249.",
      icon: "🔍",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* background blur */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* layer dưới (tạo hiệu ứng mockup) */}
            <div className="absolute inset-0 translate-y-6 scale-95 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl blur-xl opacity-40"></div>

            {/* layer trên */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={heroImg}
                alt="Mekong"
                className="w-full h-[380px] object-cover"
              />

              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute -bottom-5 -right-5 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100"
            >
              <p className="text-emerald-600 font-extrabold text-lg">ĐBSCL</p>
              <p className="text-gray-500 text-xs">Vùng thí điểm</p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* pill badge */}
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Công nghệ nền tảng
              </span>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
                Tính năng{" "}
                <span
                  className="relative inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  nổi bật
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 80 8"
                    fill="none"
                  >
                    <path
                      d="M2 6 Q40 1 78 6"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h3>

              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Số hóa toàn diện cho{" "}
                <strong className="text-gray-700 font-semibold">
                  TMĐT nông sản
                </strong>{" "}
                — từ kết nối đến truy xuất.
              </p>
            </motion.div>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-xl border border-gray-100 transition-all"
                >
                  <div
                    className={`w-11 h-11 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center text-lg mb-3 shadow-md`}
                  >
                    {f.icon}
                  </div>

                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {f.title}
                  </h4>

                  <p className="text-gray-500 text-xs leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

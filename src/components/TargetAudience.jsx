import { motion } from "framer-motion";

export default function TargetAudience() {
  const sellerValues = [
    {
      icon: "📦",
      title: '"Bán trước – Sản xuất sau"',
      desc: "Nhận đơn trước thu hoạch, chủ động nguồn cung.",
    },
    {
      icon: "🔐",
      title: "Đấu thầu kín, công bằng",
      desc: "Hệ thống khóa giá đối thủ, chống ép giá.",
    },
    {
      icon: "🔗",
      title: "Bỏ trung gian cò lái",
      desc: "Kết nối trực tiếp: Buyer → DN → Nông dân.",
    },
    {
      icon: "📜",
      title: "Hồ sơ số chuyên nghiệp",
      desc: "VietGAP, GlobalGAP, OCOP, mã vùng trồng.",
    },
  ];

  const buyerValues = [
    {
      icon: "✅",
      title: "Chuẩn ngạch GACC 100%",
      desc: "Đáp ứng Lệnh 248, 249 Hải quan TQ.",
    },
    {
      icon: "🎯",
      title: "Đấu thầu tìm giá tối ưu",
      desc: "Đưa yêu cầu → nhận báo giá tự động.",
    },
    {
      icon: "🏭",
      title: "Nguồn cung lớn & ổn định",
      desc: "Tập hợp DN, HTX toàn vùng ĐBSCL.",
    },
    {
      icon: "🔍",
      title: "Truy xuất từ vườn",
      desc: "QR Code, nhật ký canh tác, kiểm dịch.",
    },
  ];

  return (
    <section
      id="audience"
      className="py-24 bg-gradient-to-br from-[#81ff8a] via-[#5ab860] to-[#3d7a42] relative overflow-hidden"
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute -top-20 -right-20 w-[420px] h-[420px] bg-yellow-300/25 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-[320px] h-[320px] bg-emerald-900/30 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-white/10 rounded-full blur-[60px] pointer-events-none" />

      {/* ── Subtle dot pattern overlay ── */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          {/* pill badge */}
          <span className="inline-flex items-center gap-1.5 bg-white/25 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/40 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
            Dành cho tất cả
          </span>

          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-sm">
            Lợi ích cho{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #ffe066 0%, #ff9900 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              mọi bên
              {/* underline accent */}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 160 8"
                fill="none"
              >
                <path
                  d="M2 6 Q80 1 158 6"
                  stroke="#ffe066"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h3>

          <p className="text-white/85  text-base md:text-lg font-medium leading-relaxed">
            Nền tảng tối ưu cho cả{" "}
            <strong className="text-yellow-200">nhà cung cấp Việt</strong> và{" "}
            <strong className="text-white">người mua quốc tế.</strong>
          </p>
        </motion.div>

        {/* ── Two cards ── */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* ── Seller card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            {/* top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500" />

            <div className="p-7">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm text-xl"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.9)",
                  }}
                >
                  🌾
                </div>
                <div>
                  <h4
                    className="text-lg font-bold leading-none"
                    style={{ color: "#1a3a10" }}
                  >
                    Nhà Cung Cấp Việt Nam
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: "#4a7a3a" }}>
                    Suppliers
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {sellerValues.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl p-4 transition-all duration-200 cursor-default hover:shadow-md"
                    style={{
                      background: "rgba(255,255,255,0.35)",
                      border: "1px solid rgba(255,255,255,0.55)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.55)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.35)")
                    }
                  >
                    <span className="text-xl">{item.icon}</span>
                    <h5
                      className="font-bold text-sm mt-2 mb-1"
                      style={{ color: "#1a3a10" }}
                    >
                      {item.title}
                    </h5>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#3d6b2e" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Buyer card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            {/* top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />

            <div className="p-7">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm text-xl"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.9)",
                  }}
                >
                  🌐
                </div>
                <div>
                  <h4
                    className="text-lg font-bold leading-none"
                    style={{ color: "#1a3a10" }}
                  >
                    Người Mua Quốc Tế
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: "#4a7a3a" }}>
                    Global Buyers
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {buyerValues.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl p-4 transition-all duration-200 cursor-default hover:shadow-md"
                    style={{
                      background: "rgba(255,255,255,0.35)",
                      border: "1px solid rgba(255,255,255,0.55)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.55)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.35)")
                    }
                  >
                    <span className="text-xl">{item.icon}</span>
                    <h5
                      className="font-bold text-sm mt-2 mb-1"
                      style={{ color: "#1a3a10" }}
                    >
                      {item.title}
                    </h5>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#3d6b2e" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

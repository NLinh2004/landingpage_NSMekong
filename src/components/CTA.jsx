import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #81ff8a 0%, #5ab860 45%, #3d7a42 100%)",
      }}
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute -top-24 -right-24 w-[450px] h-[450px] bg-yellow-300/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-[350px] h-[350px] bg-emerald-900/35 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-white/15 rounded-full blur-[70px] pointer-events-none animate-pulse" />

      {/* ── Dot pattern ── */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Diagonal light streak ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* ── Pill badge ── */}
          <span className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-8 border border-white/40 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
            Giai đoạn thí điểm – ĐBSCL
          </span>

          {/* ── Heading ── */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-sm">
            Cùng xây dựng chuỗi cung ứng
            <br className="hidden sm:block" />
            <span
              className="relative inline-block mt-1"
              style={{
                background: "linear-gradient(135deg, #ffe066 0%, #ff9900 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              minh bạch &amp; bền vững
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 400 10"
                fill="none"
              >
                <path
                  d="M2 7 Q200 1 398 7"
                  stroke="#ffe066"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* ── Sub-text ── */}
          <p className="text-lg md:text-xl text-white/80 mb-14 leading-relaxed max-w-2xl mx-auto font-medium">
            Doanh nghiệp, HTX, nhà sản xuất nông sản – Hãy trở thành{" "}
            <strong className="text-yellow-200 font-bold">
              đối tác tiên phong
            </strong>{" "}
            trên nền tảng Mekong Agri.
          </p>

          {/* ── CTA buttons ── */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Primary */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="relative w-full sm:w-auto overflow-hidden group px-10 py-4 rounded-full font-bold text-lg text-center shadow-xl"
              style={{
                background: "linear-gradient(135deg, #ffe066 0%, #ff9900 100%)",
                color: "#3b1a00",
                boxShadow: "0 8px 32px rgba(255,180,0,0.35)",
              }}
            >
              {/* shimmer sweep */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 0.7s linear forwards",
                }}
              />
              Đăng ký hợp tác →
            </motion.a>

            {/* Secondary – glass */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-lg text-white text-center border border-white/40 transition-all duration-200 hover:bg-white/20"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              Liên hệ tư vấn
            </motion.a>
          </div>

          {/* ── Trust strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm font-medium"
          >
            {[
              { icon: "🔒", label: "Bảo mật dữ liệu" },
              { icon: "⚡", label: "Onboarding nhanh 24h" },
              { icon: "🌱", label: "Miễn phí giai đoạn thử nghiệm" },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Shimmer keyframe ── */}
      <style>{`
    @keyframes shimmer {
      from { background-position: 200% center; }
      to   { background-position: -200% center; }
    }
  `}</style>
    </section>
  );
}

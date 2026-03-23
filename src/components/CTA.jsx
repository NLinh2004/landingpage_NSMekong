import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CTA() {
  const { t } = useTranslation();
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
          transition={{ duration: 1.0 }}
        >
          {/* ── Pill badge ── */}
          <span className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-8 border border-white/40 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
            {t('cta.badge')}
          </span>

          {/* ── Heading ── */}
          <h2 className="text-4xl md:text-5xl lg:text-3xl font-extrabold text-white mb-6 leading-tight drop-shadow-sm">
            {t('cta.title_1')} <br className="md:hidden" />
            <span
              className="relative inline-block mt-1"
              style={{
                background: "linear-gradient(135deg, #ffe066 0%, #ff9900 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t('cta.title_2')}
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
            <br className="md:hidden" /> {t('cta.title_3')}
          </h2>

          {/* ── CTA buttons ── */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
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
              {t('cta.btn_primary')}
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
              {t('cta.btn_secondary')}
            </motion.a>
          </div>

          {/* ── Trust strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm font-medium"
          >
            {[
              { icon: "🔒", label: t('cta.trust_1') },
              { icon: "⚡", label: t('cta.trust_2') },
              { icon: "🌱", label: t('cta.trust_3') },
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

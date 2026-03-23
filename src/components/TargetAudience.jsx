import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function TargetAudience() {
  const { t } = useTranslation();
  const sellerValues = [
    {
      icon: "🌍",
      title: t('audience.seller_1_title'),
      desc: t('audience.seller_1_desc'),
    },
    {
      icon: "📉",
      title: t('audience.seller_2_title'),
      desc: t('audience.seller_2_desc'),
    },
    {
      icon: "⚡",
      title: t('audience.seller_3_title'),
      desc: t('audience.seller_3_desc'),
    },
    {
      icon: "📦",
      title: t('audience.seller_4_title'),
      desc: t('audience.seller_4_desc'),
    },
  ];

  const buyerValues = [
    {
      icon: "🏭",
      title: t('audience.buyer_1_title'),
      desc: t('audience.buyer_1_desc'),
    },
    {
      icon: "🔍",
      title: t('audience.buyer_2_title'),
      desc: t('audience.buyer_2_desc'),
    },
    {
      icon: "🛡️",
      title: t('audience.buyer_3_title'),
      desc: t('audience.buyer_3_desc'),
    },
    {
      icon: "⏱️",
      title: t('audience.buyer_4_title'),
      desc: t('audience.buyer_4_desc'),
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
          transition={{ duration: 0.9 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          {/* pill badge */}
          <span className="inline-flex items-center gap-1.5 bg-white/25 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/40 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
            {t('audience.badge')}
          </span>

          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-sm">
            {t('audience.title_1')}{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #ffe066 0%, #ff9900 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t('audience.title_2')}
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
            {t('audience.desc_1')}{" "}
            <strong className="text-yellow-200">{t('audience.desc_2')}</strong> {t('audience.desc_3')}{" "}
            <strong className="text-white">{t('audience.desc_4')}</strong>
          </p>
        </motion.div>

        {/* ── Two cards ── */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* ── Seller card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
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
                    {t('audience.seller_title')}
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: "#4a7a3a" }}>
                    {t('audience.seller_subtitle')}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {sellerValues.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl p-[9px] transition-all duration-200 cursor-default hover:shadow-md"
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
            transition={{ duration: 0.85, delay: 0.2 }}
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
                    {t('audience.buyer_title')}
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: "#4a7a3a" }}>
                    {t('audience.buyer_subtitle')}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {buyerValues.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl p-[14px] transition-all duration-200 cursor-default hover:shadow-md"
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

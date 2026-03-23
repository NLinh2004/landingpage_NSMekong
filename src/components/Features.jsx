import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroImg from "../assets/hero.png"; // đảm bảo đúng đường dẫn

export default function Features() {
  const { t } = useTranslation();
  const features = [
    {
      title: t('features.f1_title'),
      desc: t('features.f1_desc'),
      icon: "🤝",
      color: "from-emerald-500 to-green-600",
    },
    {
      title: t('features.f2_title'),
      desc: t('features.f2_desc'),
      icon: "💬",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: t('features.f3_title'),
      desc: t('features.f3_desc'),
      icon: "📜",
      color: "from-purple-500 to-violet-600",
    },
    {
      title: t('features.f4_title'),
      desc: t('features.f4_desc'),
      icon: "🚚",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* background blur */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
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
              transition={{ repeat: Infinity, duration: 4.0 }}
              className="absolute -bottom-5 -right-5 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100"
            >
              <p className="text-emerald-600 font-extrabold text-lg">{t('features.badge_1')}</p>
              <p className="text-gray-500 text-xs">{t('features.badge_2')}</p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              {/* pill badge */}
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t('features.badge_3')}
              </span>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
                {t('features.title_1')}{" "}
                <span
                  className="relative inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t('features.title_2')}
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
                {t('features.desc_1')}{" "}
                <strong className="text-gray-700 font-semibold">
                  {t('features.desc_2')}
                </strong>{" "}
                {t('features.desc_3')}
              </p>
            </motion.div>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  style={{ willChange: "transform, opacity" }}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-xl border border-gray-100 transition-shadow duration-300"
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

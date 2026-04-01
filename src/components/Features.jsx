import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Handshake,
  MessageSquare,
  Truck,
  Star
} from "lucide-react";
import logisticImgV2 from "../assets/logistic_v2.png";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      title: t('features.f1_title'),
      desc: t('features.f1_desc'),
      icon: <Handshake className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: t('features.f2_title'),
      desc: t('features.f2_desc'),
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-amber-400 to-amber-600",
    },
    // Đã xóa phần f3 ở đây
    {
      title: t('features.f4_title'),
      desc: t('features.f4_desc'),
      icon: <Truck className="w-6 h-6" />,
      color: "from-emerald-400 to-teal-600",
    },
    {
      title: t('features.f5_title'),
      desc: t('features.f5_desc'),
      icon: <Star className="w-6 h-6" />,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="features" className="relative bg-slate-50 overflow-hidden py-10">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-[-10%] w-96 h-96 bg-emerald-200 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-[-10%] w-96 h-96 bg-amber-100 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE - Tech Logistics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-amber-500/10 rounded-3xl blur-3xl opacity-60 transform rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src={logisticImgV2}
                alt={t('features.alt_logistic')}
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>

            {/* Dynamic Badge */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-6 -right-8 glass-card-premium rounded-2xl p-6 border-emerald-100 shadow-2xl"
            >
              <p className="text-emerald-700 font-bold text-xl mb-1">99.9%</p>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{t('features.uptime_security')}</p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-amber-500"></div>
                <span className="text-emerald-600 font-bold text-sm tracking-[0.2em]">{t('features.badge_3')}</span>
                <div className="h-[2px] w-12 bg-amber-500"></div>
              </div>

              <h3 className="text-4xl font-black text-slate-900 mb-4 leading-[1.1] tracking-tight">
                {t('features.title_1')}<br />
                <span className="text-gradient-premium">
                  {t('features.title_2')}
                </span>
              </h3>

              <p className="text-lg text-slate-500 leading-relaxed mb-6 font-medium italic border-l-4 border-emerald-200 pl-8">
                "{t('features.desc_1')} {t('features.desc_2')} {t('features.desc_3')}"
              </p>
            </motion.div>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-slate-50 flex items-center gap-4 transition-all duration-300 group"
                >
                  <div className={`shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-lg text-white transform group-hover:rotate-12 transition-transform`}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base tracking-tight group-hover:text-emerald-600 transition-colors">{f.title}</h4>
                    <p className="text-slate-500 text-sm leading-tight font-medium mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
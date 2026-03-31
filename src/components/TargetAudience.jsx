import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sprout,
  Globe,
  TrendingUp,
  Zap,
  Package,
  Factory,
  Search,
  ShieldCheck,
  Timer
} from "lucide-react";

export default function TargetAudience() {
  const { t } = useTranslation();

  const sellerValues = [
    { icon: <Globe size={20} />, title: t('audience.seller_1_title'), desc: t('audience.seller_1_desc'), color: "from-amber-400 to-amber-600" },
    { icon: <TrendingUp size={20} />, title: t('audience.seller_2_title'), desc: t('audience.seller_2_desc'), color: "from-orange-400 to-orange-600" },
    { icon: <Zap size={20} />, title: t('audience.seller_3_title'), desc: t('audience.seller_3_desc'), color: "from-yellow-400 to-yellow-600" },
    { icon: <Package size={20} />, title: t('audience.seller_4_title'), desc: t('audience.seller_4_desc'), color: "from-amber-500 to-amber-700" },
  ];

  const buyerValues = [
    { icon: <Factory size={20} />, title: t('audience.buyer_1_title'), desc: t('audience.buyer_1_desc'), color: "from-emerald-400 to-emerald-600" },
    { icon: <Search size={20} />, title: t('audience.buyer_2_title'), desc: t('audience.buyer_2_desc'), color: "from-teal-400 to-teal-600" },
    { icon: <ShieldCheck size={20} />, title: t('audience.buyer_3_title'), desc: t('audience.buyer_3_desc'), color: "from-sky-400 to-sky-600" },
    { icon: <Timer size={20} />, title: t('audience.buyer_4_title'), desc: t('audience.buyer_4_desc'), color: "from-emerald-500 to-teal-700" },
  ];

  return (
    <section id="audience" className="relative py-10 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle, #059669 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>
      </div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-amber-500"></div>
              <span className="text-amber-600 font-black text-sm tracking-[0.3em]">{t('audience.badge')}</span>
              <div className="h-[2px] w-12 bg-amber-500"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
              {t('audience.title_1')}{" "}
              <span className="text-gradient-premium">{t('audience.title_2')}</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed italic border-l-4 border-emerald-500/20 pl-8 inline-block text-left">
              {t('audience.desc_1')} <span className="text-emerald-500 font-black">"{t('audience.desc_2')}"</span> {t('audience.desc_3')} <span className="text-emerald-500 font-black">"{t('audience.desc_4')}"</span>.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 relative">
          {/* Decorative Divider Logic for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-gradient-to-b from-transparent via-slate-200 to-transparent z-0" />

          {/* SELLER CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-amber-500/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-3xl bg-white border border-slate-100 shadow-2xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-inner border border-amber-100 transform group-hover:rotate-6 transition-transform duration-500">
                  <Sprout size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tighter">{t('audience.seller_title')}</h4>
                  <p className="text-amber-600 font-black text-[12px] uppercase tracking-[0.2em] mt-1">{t('audience.seller_subtitle')}</p>
                </div>
              </div>

              <div className="grid gap-4">
                {sellerValues.map((v, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:border-amber-200 transition-all duration-300 group/item flex items-center gap-4"
                  >
                    <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center text-xl text-white shadow-lg transform group-hover/item:scale-110 transition-transform`}>
                      {v.icon}
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 text-xl tracking-tight">{v.title}</h5>
                      <p className="text-slate-500 text-sm font-medium leading-tight mt-1">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BUYER CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-3xl bg-white border border-slate-100 shadow-2xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner border border-emerald-100 transform group-hover:-rotate-6 transition-transform duration-500">
                  <Globe size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tighter">{t('audience.buyer_title')}</h4>
                  <p className="text-emerald-600 font-black text-[12px] uppercase tracking-[0.2em] mt-1">{t('audience.buyer_subtitle')}</p>
                </div>
              </div>

              <div className="grid gap-4">
                {buyerValues.map((v, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group/item flex items-center gap-4"
                  >
                    <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center text-xl text-white shadow-lg transform group-hover/item:scale-110 transition-transform`}>
                      {v.icon}
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 text-xl tracking-tight">{v.title}</h5>
                      <p className="text-slate-500 text-sm font-medium leading-tight mt-1">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

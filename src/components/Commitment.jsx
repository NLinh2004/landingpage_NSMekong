import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Settings, BarChart3 } from "lucide-react";

export default function Commitment() {
  const { t } = useTranslation();

  const items = [
    {
      title: t('commitment.f1_title'),
      desc: t('commitment.f1_desc'),
      icon: <Settings className="w-12 h-12" />,
      color: "from-amber-400 to-amber-600",
      label: "Technical Support"
    },
    {
      title: t('commitment.f2_title'),
      desc: t('commitment.f2_desc'),
      icon: <BarChart3 className="w-12 h-12" />,
      color: "from-emerald-400 to-emerald-600",
      label: "Market Insights"
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* ── Background Aesthetics ── */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/30 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-24 items-center">

          {/* LEFT: Branding & Guarantee */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-emerald-500"></div>
              <span className="text-emerald-700 font-black text-sm tracking-[0.2em]">{t('commitment.title')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tighter leading-[1.1]">
              {t('commitment.headline_1')}<br />
              <span className="text-gradient-gold">{t('commitment.headline_2')}</span>
            </h2>

            <div className="relative p-10 rounded-2xl bg-slate-900 text-white overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <p className="text-emerald-400 font-black text-xs uppercase tracking-[0.3em] mb-4 italic">{t('commitment.partner_badge')}</p>
                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                  "{t('commitment.partner_quote')}"
                </p>
              </div>
              {/* Seal Decor */}
              <div className="absolute bottom-6 right-6 opacity-10">
                <div className="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center font-bold text-[10px] uppercase text-center rotate-12">
                  {t('commitment.quality_seal')}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Commitment Items */}
          <div className="grid gap-12">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="group relative flex flex-col md:flex-row items-center gap-10 p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500"
              >
                <div className={`shrink-0 w-28 h-28 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {item.icon}
                </div>

                <div className="flex-1 text-center md:text-left">
                  <span className="text-emerald-600/60 font-bold text-[10px] uppercase tracking-widest mb-2 block">{t(`commitment.${idx === 0 ? 'tech_support_label' : 'market_insights_label'}`)}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors uppercase">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Decoration */}
                <div className="absolute top-8 right-10 text-slate-200 text-6xl font-bold opacity-20 pointer-events-none group-hover:text-emerald-500/10 transition-colors">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

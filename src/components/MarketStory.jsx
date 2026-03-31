import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import marketImgV2 from "../assets/market_story_v2.png";

export default function MarketStory() {
  const { t } = useTranslation();

  return (
    <section id="market-story" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-amber-500"></div>
              <span className="text-amber-600 font-black text-sm tracking-[0.2em]">{t('market_story.title')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {t('market_story.headline_1')} <br />
              <span className="text-gradient-premium">{t('market_story.headline_2')}</span>
            </h2>

            <div className="space-y-8">
              <div className="group relative">
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-4 relative z-10">
                  {t('market_story.p1')}
                </p>
                <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-amber-500 rounded-full transition-colors" />
              </div>

              <div className="group relative">
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-4 relative z-10">
                  {t('market_story.p2')}
                </p>
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-slate-100 rounded-full group-hover:bg-emerald-400 transition-colors" />
              </div>

              <p className="font-black text-slate-900 text-lg border-l-8 border-emerald-500 pl-8 italic bg-emerald-50/30 py-6 rounded-r-xl">
                "{t('market_story.p3')}"
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE - Expressive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl transform rotate-3 scale-105 blur-2xl -z-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.12)] border-4 border-white group">
              <img
                src={marketImgV2}
                alt="Expressive Market Growth"
                className="w-full h-[650px] object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
            </div>

            {/* Floating Highlight */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-slate-50 flex flex-col items-center min-w-[120px]"
            >
              <span className="text-2xl mb-1">📈</span>
              <span className="text-slate-900 font-black text-2xl">70B+</span>
              <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-0.5">{t('market_story.export_value')}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
